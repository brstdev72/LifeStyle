function ViewAims() {

	var conn = Ti.Database.install('/LifeStyleDB.sqlite', 'LifeStyleDB');
	
	var fnt = Ti.Platform.displayCaps.platformHeight * 0.035;

	var this_Date = [];
	var this_Title = [];
	var this_Description = [];

	getData('1', 'To');

	var length = this_Title.length;

	var hgt = Ti.Platform.displayCaps.platformHeight;
	var wdh = Ti.Platform.displayCaps.platformWidth;

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
			fontSize : fnt
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
		custom_item : 1
	});
	data[1] = Ti.UI.createPickerRow({
		title : 'Aims Between5 to 10 years',
		custom_item : 2
	});
	data[2] = Ti.UI.createPickerRow({
		title : 'Aims for over 10 years',
		custom_item : 3
	});
	AimYear.add(data);

	var AimYearValue = 1;

	// Listen for change events.
	AimYear.addEventListener('change', function(e) {
		AimYearValue = e.row.custom_item;
		//alert('You selected: row:' + e.row.title + ', column: ' + e.column + ', custom_item: ' + e.row.custom_item);

		switch(AimYearValue) {
			case 1:
				if (AimToBeDoneValue == 'To') {
					getData(AimYearValue, 'To')
					AimsViews.remove(AimsView);
					Data();

				} else if (AimToBeDoneValue == 'Be') {
					getData(AimYearValue, 'Be')
					AimsViews.remove(AimsView);
					Data();

				} else if (AimToBeDoneValue == 'Done') {
					getData(AimYearValue, 'Done')
					AimsViews.remove(AimsView);
					Data();

				}
				break;
			case 2:
				if (AimToBeDoneValue == 'To') {
					getData(AimYearValue, 'To')
					AimsViews.remove(AimsView);
					Data();

				} else if (AimToBeDoneValue == 'Be') {
					getData(AimYearValue, 'Be')
					AimsViews.remove(AimsView);
					Data();

				} else if (AimToBeDoneValue == 'Done') {
					getData(AimYearValue, 'Done')
					AimsViews.remove(AimsView);
					Data();
				}
				break;

			case 3:
				if (AimToBeDoneValue == 'To') {
					getData(AimYearValue, 'To')
					AimsViews.remove(AimsView);
					Data();

				} else if (AimToBeDoneValue == 'Be') {
					getData(AimYearValue, 'Be')
					AimsViews.remove(AimsView);
					Data();

				} else if (AimToBeDoneValue == 'Done') {
					getData(AimYearValue, 'Done')
					AimsViews.remove(AimsView);
					Data();
				}
				break;
			default:
				break;
		}
	});

	// Add to the parent view.
	AllView.add(AimYear);

	// Create a Picker.
	var AimToBeDone = Ti.UI.createPicker({
		color : 'black',
		height : 'auto',
		top : hgt * 0.25,
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

		if (AimToBeDoneValue == 'To') {
			switch(AimYearValue) {
				case 1:
					getData(AimYearValue, 'To')
					AimsViews.remove(AimsView);
					Data();
					break;
				case 2:
					getData(AimYearValue, 'To')
					AimsViews.remove(AimsView);
					Data();
					break;

				case 3:
					getData(AimYearValue, 'To')
					AimsViews.remove(AimsView);
					Data();
					break;
				default:
					break;
			}
		} else if (AimToBeDoneValue == 'Be') {
			switch(AimYearValue) {
				case 1:
					getData(AimYearValue, 'Be')
					AimsViews.remove(AimsView);
					Data();
					break;
				case 2:
					getData(AimYearValue, 'Be')
					AimsViews.remove(AimsView);
					Data();
					break;

				case 3:
					getData(AimYearValue, 'Be')
					AimsViews.remove(AimsView);
					Data();
					break;
				default:
					break;
			}
		} else if (AimToBeDoneValue == 'Done') {
			switch(AimYearValue) {
				case 1:
					getData(AimYearValue, 'Done')
					AimsViews.remove(AimsView);
					Data();
					break;
				case 2:
					getData(AimYearValue, 'Done')
					AimsViews.remove(AimsView);
					Data();
					break;

				case 3:
					getData(AimYearValue, 'Done')
					AimsViews.remove(AimsView);
					Data();
					break;
				default:
					break;
			}
		} else {
		}
	});

	// Add to the parent view.
	AllView.add(AimToBeDone);

	var AimsViews = Ti.UI.createScrollView({
		backgroundColor : 'white',
		height : hgt * 0.65,
		top : hgt * 0.38,
		left : wdh * 0.03,
		width : wdh * 0.94,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36',
	});
	AllView.add(AimsViews);

	Data();
	var AimsView;
	function Data() {

		AimsView = Ti.UI.createScrollView({
			height : hgt * 0.65,
			width : wdh * 0.94,
			layout : 'vertical'
		});
		AimsViews.add(AimsView);

		for (var i = 0; i < length; i++) {

			var SingleAimsView = Ti.UI.createView({
				top : 0,
				backgroundColor : 'white',
				height : Ti.UI.SIZE,
				width : Ti.UI.SIZE,
				borderWidth : wdh * 0.005,
				borderColor : '#AA7A36',
				layout : 'vertical'
			});
			AimsView.add(SingleAimsView);

			// Create a Label.
			var Date = Ti.UI.createLabel({
				text : 'Date: ' + this_Date[i],
				color : 'black',
				font : {
					fontSize : fnt
				},
				width : wdh * 0.94,
				left : wdh * 0.02,
			});

			// Add to the parent view.
			SingleAimsView.add(Date);

			// Create a Label.
			var Title = Ti.UI.createLabel({
				text : 'Title: ' + this_Title[i],
				color : 'black',
				font : {
					fontSize : fnt
				},
				width : wdh * 0.94,
				left : wdh * 0.02,
			});

			// Add to the parent view.
			SingleAimsView.add(Title);

			// Create a Label.
			var Description = Ti.UI.createLabel({
				text : 'Description: ' + this_Description[i],
				color : 'black',
				font : {
					fontSize : fnt
				},
				width : wdh * 0.94,
				left : wdh * 0.02
			});

			// Add to the parent view.
			SingleAimsView.add(Description);
		}
	}

	function getData(Aim, ToBeDone) {

		var AimsResultSet = conn.execute("SELECT * FROM Aims where AimsYear =" + Aim + " and ToBeDone='" + ToBeDone + "'");
		this_Date = [];
		this_Title = [];
		this_Description = [];
		while (AimsResultSet.isValidRow()) {
			this_Date.push(AimsResultSet.fieldByName('Date'));
			this_Title.push(AimsResultSet.fieldByName('Title'));
			this_Description.push(AimsResultSet.fieldByName('Description'));
			AimsResultSet.next();
		}
		length = this_Title.length;
	}

	return AllView;
}

module.exports = ViewAims;
