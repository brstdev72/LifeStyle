var CompassWin = Ti.UI.currentWindow;

var conn = Ti.Database.install('/LifeStyleDB.sqlite', 'LifeStyleDB');

var CompassResultSet = conn.execute("SELECT * FROM Compass");
var this_Identity = [];
var this_SenseofLife = [];
var this_Mission = [];
var this_Values = [];
var this_Believes = [];

while (CompassResultSet.isValidRow()) {
	this_Identity.push(CompassResultSet.fieldByName('Identity'));
	this_SenseofLife.push(CompassResultSet.fieldByName('SenseofLife'));
	this_Mission.push(CompassResultSet.fieldByName('Mission'));
	this_Values.push(CompassResultSet.fieldByName('CompassValues'));
	this_Believes.push(CompassResultSet.fieldByName('Believes'));
	CompassResultSet.next();
}

var CompassResultSet = conn.execute("SELECT rowid FROM Compass");
var this_rowid = [];
while (CompassResultSet.isValidRow()) {
	this_rowid.push(CompassResultSet.fieldByName('rowid'));
	CompassResultSet.next();
}
var length = this_Identity.length;

var fnt = Ti.Platform.displayCaps.platformHeight * 0.028;
var fnt1 = Ti.Platform.displayCaps.platformHeight * 0.023;
var fnt2 = Ti.Platform.displayCaps.platformHeight * 0.04;

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
	Ti.App.Properties.setBool('editCompass', false);
	var Compass = require('Compass');
	var compass = new Compass();
	CompassWin.add(compass);
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
	CompassWin.close();
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

var CompassViews = Ti.UI.createScrollView({
	height : hgt * 0.85,
	top : hgt * 0.15,
	left : wdh * 0.03,
	width : wdh * 0.94,
	layout : 'vertical'

});
AllView.add(CompassViews);

if (length == 0) {
	// Create a Label.
	var no = Ti.UI.createLabel({
		text : 'No Compass',
		color : '#D1D3D1',
		font : {
			fontSize : fnt2
		},
		width : wdh * 0.94,
		height : hgt * 0.65,
		textAlign : 'center'
	});
	// Add to the parent view.
	CompassViews.add(no);
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
			Ti.App.Properties.setBool('editCompass', true);
			Ti.App.Properties.setString('Compassrowid', this_rowid[tmp]);
			var Compass = require('Compass');
			var compass = new Compass();
			CompassWin.add(compass);
		});
		CompassViews.add(SingleAimsView);

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
		var Identity = Ti.UI.createLabel({
			text : 'Identity: ' + this_Identity[i],
			color : '#AA7A36',
			font : {
				fontSize : fnt
			},
			width : wdh * 0.94,
			left : wdh * 0.02,
			id : i
		});

		// Add to the parent view.
		SingleRightAimsView.add(Identity);

		// Create a Label.
		var SenseofLife = Ti.UI.createLabel({
			text : 'Sense of Life: ' + this_SenseofLife[i],
			color : 'white',
			font : {
				fontSize : fnt1
			},
			width : wdh * 0.94,
			left : wdh * 0.02,
			id : i
		});

		// Add to the parent view.
		SingleRightAimsView.add(SenseofLife);

		// Create a Label.
		var Mission = Ti.UI.createLabel({
			text : 'Mission-Statement: ' + this_Mission[i],
			color : 'white',
			font : {
				fontSize : fnt1
			},
			width : wdh * 0.94,
			left : wdh * 0.02,
			id : i
		});

		// Add to the parent view.
		SingleRightAimsView.add(Mission);

		// Create a Label.
		var Values = Ti.UI.createLabel({
			text : 'Values: ' + this_Values[i],
			color : 'white',
			font : {
				fontSize : fnt1
			},
			width : wdh * 0.94,
			left : wdh * 0.02,
			id : i
		});

		// Add to the parent view.
		SingleRightAimsView.add(Values);

		// Create a Label.
		var Believes = Ti.UI.createLabel({
			text : 'Believes: ' + this_Mission[i],
			color : 'white',
			font : {
				fontSize : fnt1
			},
			width : wdh * 0.94,
			left : wdh * 0.02,
			id : i
		});

		// Add to the parent view.
		SingleRightAimsView.add(Believes);

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

CompassWin.add(AllView);
