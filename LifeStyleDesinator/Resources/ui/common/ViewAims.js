var ViewAims = Ti.UI.currentWindow;

var fnt = Ti.Platform.displayCaps.platformHeight * 0.028;
var fnt1 = Ti.Platform.displayCaps.platformHeight * 0.023;
var fnt2 = Ti.Platform.displayCaps.platformHeight * 0.04;

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
var TopAddLabel = Ti.UI.createLabel({
	text : 'Add',
	color : 'black',
	font : {
		fontSize : fnt
	},
	textAlign : 'center',
	width : wdh * 0.15,
	height : hgt * 0.09,
	right : wdh * 0.02
});
TopAddLabel.addEventListener('click', function() {
	Ti.App.Properties.setBool('edit', false);
	var CreateAims = require('CreateAims');
	var createAims = new CreateAims();
	Ti.UI.currentWindow.add(createAims);
});

// Add to the parent view.
TopBar.add(TopAddLabel);

	// Create a Label.
	var TopCancelview = Ti.UI.createView({
		width : wdh * 0.2,
		height : hgt * 0.09,
		left : 0
	});
	TopCancelview.addEventListener('click', function() {
		ViewAims.close();
	});

	// Add to the parent view.
	TopBar.add(TopCancelview);

// Create a Label.
var TopBackLabel = Ti.UI.createImageView({
	image:'/images/back_b.png',
	width : wdh * 0.09,
	height : hgt * 0.07,
	left : wdh * 0.03
});


// Add to the parent view.
TopCancelview.add(TopBackLabel);

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
pickerView.add(AimToBeDone);

var AimsViews = Ti.UI.createScrollView({
	height : hgt * 0.6,
	top : hgt * 0.43,
	left : wdh * 0.03,
	width : wdh * 0.94,
});
AllView.add(AimsViews);

Data();
var AimsView;
function Data() {

	AimsView = Ti.UI.createView({
		height : hgt * 0.65,
		width : wdh,
		layout : 'vertical'
	});
	AimsViews.add(AimsView);

	if (length == 0) {
		// Create a Label.
		var no = Ti.UI.createLabel({
			text : 'No Aims',
			color : '#D1D3D1',
			font : {
				fontSize : fnt2
			},
			width : wdh * 0.94,
			height : hgt * 0.65,
			textAlign : 'center'
		});
		// Add to the parent view.
		AimsView.add(no);
	} else {
		for (var i = 0; i < length; i++) {

			var SingleAimsView = Ti.UI.createView({
				top : 0,
				height : Ti.UI.SIZE,
				width : Ti.UI.SIZE,
				id : i
			});
			SingleAimsView.addEventListener('click', function(e) {
				var tmp = e.source.id;
				Ti.App.Properties.setBool('edit', true);
				Ti.App.Properties.setString('AimYear', AimYearValue);
				Ti.App.Properties.setString('ToBeDone', AimToBeDoneValue);
				Ti.App.Properties.setString('Date', this_Date[tmp]);
				Ti.App.Properties.setString('Title', this_Title[tmp]);
				Ti.App.Properties.setString('Description', this_Description[tmp]);
				var CreateAims = require('CreateAims');
				var createAims = new CreateAims();
				Ti.UI.currentWindow.add(createAims);
			});
			AimsView.add(SingleAimsView);

			// Create an ImageView.
			var circle = Ti.UI.createImageView({
				image : '/images/circle.png',
				width : wdh * 0.035,
				height : hgt * 0.02,
				top : hgt * 0.01,
				left : wdh * 0.01
			});
			circle.addEventListener('load', function() {
				Ti.API.info('Image loaded!');
			});

			// Add to the parent view.
			SingleAimsView.add(circle);

			var SingleRightAimsView = Ti.UI.createView({

				top : 0,
				left : wdh * 0.07,
				height : Ti.UI.SIZE,
				width : Ti.UI.SIZE,
				layout : 'vertical',
				id : i
			});
			SingleAimsView.add(SingleRightAimsView);

			// Create a Label.
			var Title = Ti.UI.createLabel({
				text : 'Title: ' + this_Title[i],
				color : '#AA7A36',
				font : {
					fontSize : fnt
				},
				width : wdh * 0.94,
				left : 0,
				id : i
			});

			// Add to the parent view.
			SingleRightAimsView.add(Title);

			// Create a Label.
			var Date = Ti.UI.createLabel({
				text : 'Date: ' + this_Date[i],
				color : 'white',
				font : {
					fontSize : fnt1
				},
				width : wdh * 0.94,
				left : 0,
				id : i
			});

			// Add to the parent view.
			SingleRightAimsView.add(Date);

			// Create a Label.
			var Description = Ti.UI.createLabel({
				text : 'Description: ' + this_Description[i],
				color : 'white',
				font : {
					fontSize : fnt1
				},
				width : wdh * 0.94,
				left : 0,
				id : i
			});

			// Add to the parent view.
			SingleRightAimsView.add(Description);

			LineView = Ti.UI.createView({
				backgroundColor : '#AA7A36',
				top : hgt * 0.01,
				height : hgt * 0.003,
				width : wdh * 0.9,
				left : 0

			});
			SingleRightAimsView.add(LineView);
		}
	}
}

function getData(Aim, ToBeDone) {
	var conn = Ti.Database.install('/LifeStyleDB.sqlite', 'LifeStyleDB');
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
	conn.close();
}

ViewAims.add(AllView);

