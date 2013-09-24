function CreateAims() {

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
		text : 'Aims',
		color : 'black',
		font : {
			fontSize : fnt,
			fontWeight:'bold'
		},
		textAlign : 'center',
	});

	// Add to the parent view.
	TopBar.add(TopLabel);

	// Create a Picker.
	var AimYear = Ti.UI.createPicker({
		color : 'black',
		height : 'auto',
		top : hgt * 0.12,
		left : wdh * 0.03,
		width : wdh * 0.94,
		selectionIndicator : true,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'
	});

	// Add data to the Picker.
	var data = [];
	data[0] = Ti.UI.createPickerRow({
		title : 'Aims between 1-5 years',
		custom_item : '1'
	});
	data[1] = Ti.UI.createPickerRow({
		title : 'Aims Between5 to 10 years',
		custom_item : '2'
	});
	data[2] = Ti.UI.createPickerRow({
		title : 'Aims for over 10 years',
		custom_item : '3'
	});
	AimYear.add(data);

	var AimYearValue = '1';

	// Listen for change events.
	AimYear.addEventListener('change', function(e) {
		AimYearValue = e.row.custom_item;
		//alert('You selected: row:' + e.row.title + ', column: ' + e.column + ', custom_item: ' + e.row.custom_item);
	});

	// Add to the parent view.
	AllView.add(AimYear);

	// Create a Picker.
	var AimToBeDone = Ti.UI.createPicker({
		color : 'black',
		height : 'auto',
		top : hgt * 0.25,
		font : {
			fontSize : fnt
		},
		left : wdh * 0.03,
		width : wdh * 0.94,
		selectionIndicator : true,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36',
	});

	// Add data to the Picker.
	var data = [];
	data[0] = Ti.UI.createPickerRow({
		title : 'To',
		custom_item : '1'
	});
	data[1] = Ti.UI.createPickerRow({
		title : 'Be',
		custom_item : '2'
	});
	data[2] = Ti.UI.createPickerRow({
		title : 'Done',
		custom_item : '3'
	});
	AimToBeDone.add(data);

	var AimToBeDoneValue = 'To';
	// Listen for change events.
	AimToBeDone.addEventListener('change', function(e) {
		AimToBeDoneValue = e.row.title;
	});

	// Add to the parent view.
	AllView.add(AimToBeDone);

	// Create a TextField.
	var Aimtitle = Ti.UI.createTextField({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.1,
		top : hgt * 0.38,
		left : wdh * 0.03,
		width : wdh * 0.94,
		font : {
			fontSize : fnt
		},
		hintText : 'Title',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'

	});

	// Listen for return events.
	Aimtitle.addEventListener('return', function(e) {
		Aimtitle.blur();
	});

	// Add to the parent view.
	AllView.add(Aimtitle);

	// Create a TextField.
	var AimEndDate = Ti.UI.createTextField({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.1,
		top : hgt * 0.51,
		left : wdh * 0.03,
		font : {
			fontSize : fnt
		},
		width : wdh * 0.94,
		hintText : 'Date',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'

	});

	// Listen for return events.
	AimEndDate.addEventListener('return', function(e) {
		Aimtitle.blur();
	});

	// Add to the parent view.
	AllView.add(AimEndDate);

	// Create a TextField.
	var AimDescription = Ti.UI.createTextArea({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.18,
		top : hgt * 0.64,
		left : wdh * 0.03,
		font : {
			fontSize : fnt
		},
		width : wdh * 0.94,
		hintText : 'Description',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'

	});

	// Listen for return events.
	AimDescription.addEventListener('return', function(e) {
		Aimtitle.blur();
	});

	// Add to the parent view.
	AllView.add(AimDescription);

	// Create a Button.
	var Save = Ti.UI.createButton({
		backgroundColor : '#AA7A36',
		color : 'black',
		font : {
			fontSize : fnt
		},
		title : 'Save',
		height : hgt * 0.1,
		width : wdh * 0.4,
		bottom : hgt * 0.05
	});

	// Listen for click events.
	Save.addEventListener('click', function() {
		if(Aimtitle.value!=''){
		var conn = Ti.Database.install('/LifeStyleDB.sqlite', 'LifeStyleDB');
		var theData = conn.execute('INSERT INTO Aims (AimsYear,ToBeDone,Title,Date,Description) VALUES(?,?,?,?,?)', AimYearValue, AimToBeDoneValue, Aimtitle.value, AimEndDate.value, AimDescription.value);
		conn.close();
		alert('Successfully Added');
		}else{
			alert('please Enter Your Aim Title');
		}
	});

	// Add to the parent view.
	AllView.add(Save);

	return AllView;
}

module.exports = CreateAims;
