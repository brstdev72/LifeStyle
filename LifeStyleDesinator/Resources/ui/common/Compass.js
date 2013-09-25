function Compass() {

	var editCompass = Ti.App.Properties.getBool('editCompass', false);
	var Compassrowid = Ti.App.Properties.getString('Compassrowid');

	var conn = Ti.Database.install('/LifeStyleDB.sqlite', 'LifeStyleDB');

	var CompassResultSet = conn.execute("SELECT * FROM Compass where rowid=" + Compassrowid);
	var this_Identity = '';
	var this_SenseofLife = '';
	var this_Mission = '';
	var this_Values = '';
	var this_Believes = '';

	while (CompassResultSet.isValidRow()) {
		this_Identity = CompassResultSet.fieldByName('Identity');
		this_SenseofLife = CompassResultSet.fieldByName('SenseofLife');
		this_Mission = CompassResultSet.fieldByName('Mission');
		this_Values = CompassResultSet.fieldByName('CompassValues');
		this_Believes = CompassResultSet.fieldByName('Believes');
		CompassResultSet.next();
	}

	var hgt = Ti.Platform.displayCaps.platformHeight;
	var wdh = Ti.Platform.displayCaps.platformWidth;

	var fnt = Ti.Platform.displayCaps.platformHeight * 0.028;

	var AllView = Ti.UI.createView({
		backgroundImage : '/images/ld-bg.png',
		width : Ti.Platform.displayCaps.platformWidth,
		height : Ti.Platform.displayCaps.platformHeight
	});

	// Create an ImageView.
	var TopBar = Ti.UI.createView({
		backgroundImage : '/images/tile.png',
		width : wdh,
		height : hgt * 0.09,
		top : hgt * 0.03,
		left : 0
	});

	// Add to the parent view.
	AllView.add(TopBar);

	// Create a Label.
	var TopLabel = Ti.UI.createLabel({
		text : 'Compass',
		color : 'black',
		font : {
			fontSize : fnt,
			fontWeight : 'bold'
		},
		textAlign : 'center',
	});

	// Add to the parent view.
	TopBar.add(TopLabel);

	// Create a Label.
	var TopSaveLabel = Ti.UI.createLabel({
		text : 'Save',
		color : 'black',
		font : {
			fontSize : fnt
		},
		textAlign : 'center',
		width : wdh * 0.2,
		height : hgt * 0.09,
		right : wdh * 0.02
	});
	TopSaveLabel.addEventListener('click', function() {
		if (CompassIdentity.value != '') {
			var conn = Ti.Database.install('/LifeStyleDB.sqlite', 'LifeStyleDB');
			if (editCompass) {
				var theData = conn.execute('UPDATE Compass SET Identity=?,SenseofLife=?,Mission=?,CompassValues=?,Believes=? WHERE rowid=?', CompassIdentity.value, CompassSense.value, CompassMission.value, CompassValues.value, CompassBelieve.value, Compassrowid);
			} else {
				var theData = conn.execute('INSERT INTO Compass (Identity,SenseofLife,Mission,CompassValues,Believes) VALUES(?,?,?,?,?)', CompassIdentity.value, CompassSense.value, CompassMission.value, CompassValues.value, CompassBelieve.value);
			}
			conn.close();
			var CompassWin = Ti.UI.createWindow({
				backgroundColor : 'white',
				url : 'ViewCompass.js',
				navBarHidden : true,
				modal : true
			});
			CompassWin.open();
			Ti.UI.currentWindow.remove(AllView);
		} else {
			alert('please Enter Your Compass Identity');
		}
	});

	// Add to the parent view.
	TopBar.add(TopSaveLabel);

	// Create a Label.
	var TopCancelview = Ti.UI.createView({
		width : wdh * 0.2,
		height : hgt * 0.09,
		left : 0
	});
	TopCancelview.addEventListener('click', function() {
		Ti.UI.currentWindow.remove(AllView);
	});

	// Add to the parent view.
	TopBar.add(TopCancelview);

	// Create a Label.
	var TopCancelLabel = Ti.UI.createImageView({
		image : '/images/back_b.png',
		width : wdh * 0.09,
		height : hgt * 0.07,
		left : wdh * 0.03
	});
	// Add to the parent view.
	TopCancelview.add(TopCancelLabel);

	// Create a TextField.
	var CompassIdentity = Ti.UI.createTextArea({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.15,
		top : hgt * 0.15,
		left : wdh * 0.03,
		font : {
			fontSize : fnt
		},
		width : wdh * 0.94,
		hintText : 'Identity',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'

	});

	// Listen for return events.
	CompassIdentity.addEventListener('return', function(e) {
		CompassIdentity.blur();
	});

	// Add to the parent view.
	AllView.add(CompassIdentity);

	// Create a TextField.
	var CompassSense = Ti.UI.createTextArea({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.12,
		top : hgt * 0.33,
		left : wdh * 0.03,
		font : {
			fontSize : fnt
		},
		width : wdh * 0.94,
		hintText : 'Sense of Life',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'

	});

	// Listen for return events.
	CompassSense.addEventListener('return', function(e) {
		CompassSense.blur();
	});

	// Add to the parent view.
	AllView.add(CompassSense);

	var CompassMission = Ti.UI.createTextArea({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.12,
		top : hgt * 0.48,
		left : wdh * 0.03,
		font : {
			fontSize : fnt
		},
		width : wdh * 0.94,
		hintText : 'Mission-Statement',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'

	});

	// Listen for return events.
	CompassMission.addEventListener('return', function(e) {
		CompassMission.blur();
	});

	// Add to the parent view.
	AllView.add(CompassMission);

	var CompassValues = Ti.UI.createTextArea({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.12,
		top : hgt * 0.63,
		left : wdh * 0.03,
		font : {
			fontSize : fnt
		},
		width : wdh * 0.94,
		hintText : 'Values',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'

	});

	// Listen for return events.
	CompassValues.addEventListener('return', function(e) {
		CompassValues.blur();
	});

	// Add to the parent view.
	AllView.add(CompassValues);

	var CompassBelieve = Ti.UI.createTextArea({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.12,
		top : hgt * 0.78,
		left : wdh * 0.03,
		font : {
			fontSize : fnt
		},
		width : wdh * 0.94,
		hintText : 'Believes',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'

	});

	// Listen for return events.
	CompassBelieve.addEventListener('return', function(e) {
		CompassBelieve.blur();
	});

	// Add to the parent view.
	AllView.add(CompassBelieve);

	if (editCompass) {
		CompassIdentity.value = this_Identity;
		CompassSense.value = this_SenseofLife;
		CompassMission.value = this_Mission;
		CompassValues.value = this_Values;
		CompassBelieve.value = this_Believes;
	} else {
		CompassIdentity.value = '';
		CompassSense.value = '';
		CompassMission.value = '';
		CompassValues.value = '';
		CompassBelieve.value = '';
	}

	return AllView;
}

module.exports = Compass;
