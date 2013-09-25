function CreateAims() {

	var edit = Ti.App.Properties.getBool('edit', true);
	var editAimYear = Ti.App.Properties.getString('AimYear');
	var editToBeDone = Ti.App.Properties.getString('ToBeDone');
	var editDate = Ti.App.Properties.getString('Date');
	var editTitle = Ti.App.Properties.getString('Title');
	var editDescription = Ti.App.Properties.getString('Description');

	if (editToBeDone == 'To') {
		editToBeDone = 1;
	} else if (editToBeDone == 'Be') {
		editToBeDone = 2;
	} else {
		editToBeDone = 3;
	}

	var conn = Ti.Database.install('/LifeStyleDB.sqlite', 'LifeStyleDB');
	var AimsResultSet = conn.execute("SELECT rowid FROM Aims where AimsYear ='" + editAimYear + "' and Title='" + editTitle + "' and Date='" + editDate + "' and Description='" + editDescription + "'");
	this_rowid = '';
	while (AimsResultSet.isValidRow()) {
		this_rowid = AimsResultSet.fieldByName('rowid');
		AimsResultSet.next();
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
		text : 'Aims',
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
	var TopCancelview = Ti.UI.createView({
		width : wdh * 0.2,
		height : hgt * 0.09,
		left :  0
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
		if (Aimtitle.value != '') {
			var conn = Ti.Database.install('/LifeStyleDB.sqlite', 'LifeStyleDB');
			if (edit) {
				var theData = conn.execute('UPDATE Aims SET AimsYear=?,ToBeDone=?,Title=?,Date=?,Description=? WHERE rowid=?', AimYearValue, AimToBeDoneValue, Aimtitle.value, AimEndDate.value, AimDescription.value, this_rowid);
			} else {
				var theData = conn.execute('INSERT INTO Aims (AimsYear,ToBeDone,Title,Date,Description) VALUES(?,?,?,?,?)', AimYearValue, AimToBeDoneValue, Aimtitle.value, AimEndDate.value, AimDescription.value);
			}
			conn.close();
			var Aims = Ti.UI.createWindow({
				backgroundColor : 'white',
				url : 'ViewAims.js',
				navBarHidden : true,
				modal : true
			});
			Aims.open();
			Ti.UI.currentWindow.remove(AllView);
		} else {
			alert('please Enter Your Aim Title');
		}
	});

	// Add to the parent view.
	TopBar.add(TopSaveLabel);

	// Create an ImageView.
	var pickerView = Ti.UI.createView({
		backgroundColor : 'white',
		width : wdh * 0.94,
		height : hgt * 0.27,
		top : hgt * 0.14,
		left : wdh * 0.03,
		borderRadius : wdh * 0.02,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36'
	});

	// Add to the parent view.
	AllView.add(pickerView);

	var TopAddLabel = Ti.UI.createLabel({
		text : 'Choose your option',
		color : '#AA7A36',
		font : {
			fontSize : fnt
		},
		left : wdh * 0.02,
		top : hgt * 0.01
	});
	pickerView.add(TopAddLabel);

	// Create a Picker.
	var AimYear = Ti.UI.createPicker({
		color : 'black',
		height : 'auto',
		top : hgt * 0.06,
		left : wdh * 0.02,
		width : wdh * 0.90,
		selectionIndicator : true,
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
	pickerView.add(AimYear);

	// Create a Picker.
	var AimToBeDone = Ti.UI.createPicker({
		color : 'black',
		height : 'auto',
		top : hgt * 0.16,
		left : wdh * 0.02,
		width : wdh * 0.90,
		selectionIndicator : true,
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
	pickerView.add(AimToBeDone);

	// Create a TextField.
	var Aimtitle = Ti.UI.createTextField({
		backgroundColor : 'white',
		color : 'black',
		height : hgt * 0.1,
		top : hgt * 0.44,
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
		top : hgt * 0.57,
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
		top : hgt * 0.7,
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

	if (edit) {
		Aimtitle.value = editTitle;
		AimEndDate.value = editDate;
		AimDescription.value = editDescription;
		AimYearValue = editAimYear;
		AimToBeDoneValue = editToBeDone;
		editAimYear = parseInt(editAimYear - 1);
		AimYear.setSelectedRow(0, editAimYear, false);
		editToBeDone = parseInt(editToBeDone - 1);
		AimToBeDone.setSelectedRow(0, editToBeDone, false);
	} else {
		Aimtitle.value = '';
		AimEndDate.value = '';
		AimDescription.value = '';
	}

	return AllView;
}

module.exports = CreateAims;
