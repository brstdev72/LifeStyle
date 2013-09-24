function Compass() {

	var hgt = Ti.Platform.displayCaps.platformHeight;
	var wdh = Ti.Platform.displayCaps.platformWidth;

	var fnt = Ti.Platform.displayCaps.platformHeight * 0.035;

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
		top : 0,
		left : 0
	});

	// Add to the parent view.
	AllView.add(TopBar);

	// Create a Label.
	var TopLabel = Ti.UI.createLabel({
		text : 'Compass',
		color : 'black',
		font : {
			fontSize : fnt
		},
		textAlign : 'center',
	});

	// Add to the parent view.
	TopBar.add(TopLabel);

	// Create a TextField.
	var CompassIdentity = Ti.UI.createTextArea({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.12,
		top : hgt * 0.12,
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
		top : hgt * 0.27,
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
		top : hgt * 0.42,
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
		top : hgt * 0.57,
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
		top : hgt * 0.72,
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

	// Create a Button.
	var Save = Ti.UI.createButton({
		backgroundColor : '#AA7A36',
		color : 'black',
		font : {
			fontSize : fnt
		},
		title : 'Save',
		height : hgt * 0.1,
		width : wdh * 0.3,
		bottom : hgt * 0.05
	});

	// Listen for click events.
	Save.addEventListener('click', function() {
		if (CompassIdentity.value != '') {
			var conn = Ti.Database.install('/LifeStyleDB.sqlite', 'LifeStyleDB');
			var theData = conn.execute('INSERT INTO Compass (Identity,SenseofLife,Mission,CompassValues,Believes) VALUES(?,?,?,?,?)', CompassIdentity.value, CompassSense.value, CompassMission.value, CompassValues.value, CompassBelieve.value);
			conn.close();
			alert('Successfully Added');
		} else {
			alert('please Enter Your Compass Identity');
		}
	});

	// Add to the parent view.
	AllView.add(Save);

	return AllView;
}

module.exports = Compass;
