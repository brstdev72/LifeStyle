function ViewCompass() {

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
	var length = this_Identity.length;

	var fnt = Ti.Platform.displayCaps.platformHeight * 0.035;

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
		text : 'Compass',
		color : 'black',
		font : {
			fontSize : fnt
		},
		textAlign : 'center',
	});

	// Add to the parent view.
	TopBar.add(TopLabel);

	var CompassViews = Ti.UI.createScrollView({
		backgroundColor : 'white',
		height : hgt * 0.85,
		top : hgt * 0.12,
		left : wdh * 0.03,
		width : wdh * 0.94,
		borderWidth : wdh * 0.005,
		borderColor : '#AA7A36',
	});
	AllView.add(CompassViews);

	var CompassView = Ti.UI.createScrollView({
		height : hgt * 0.85,
		width : wdh * 0.94,
		layout : 'vertical'
	});
	CompassViews.add(CompassView);

	for (var i = 0; i < length; i++) {

		var SinglecompassView = Ti.UI.createView({
			top : 0,
			backgroundColor : 'white',
			height : Ti.UI.SIZE,
			width : Ti.UI.SIZE,
			borderWidth : wdh * 0.005,
			borderColor : '#AA7A36',
			layout : 'vertical'
		});
		CompassView.add(SinglecompassView);

		// Create a Label.
		var Identity = Ti.UI.createLabel({
			text : 'Identity: ' + this_Identity[i],
			color : 'black',
			font : {
				fontSize : fnt
			},
			width : wdh * 0.94,
			left : wdh * 0.02,
		});

		// Add to the parent view.
		SinglecompassView.add(Identity);

		// Create a Label.
		var SenseofLife = Ti.UI.createLabel({
			text : 'Sense of Life: ' + this_SenseofLife[i],
			color : 'black',
			font : {
				fontSize : fnt
			},
			width : wdh * 0.94,
			left : wdh * 0.02,
		});

		// Add to the parent view.
		SinglecompassView.add(SenseofLife);

		// Create a Label.
		var Mission = Ti.UI.createLabel({
			text : 'Mission-Statement: ' + this_Mission[i],
			color : 'black',
			font : {
				fontSize : fnt
			},
			width : wdh * 0.94,
			left : wdh * 0.02
		});

		// Add to the parent view.
		SinglecompassView.add(Mission);

		// Create a Label.
		var Values = Ti.UI.createLabel({
			text : 'Values: ' + this_Values[i],
			color : 'black',
			font : {
				fontSize : fnt
			},
			width : wdh * 0.94,
			left : wdh * 0.02
		});

		// Add to the parent view.
		SinglecompassView.add(Values);

		// Create a Label.
		var Believes = Ti.UI.createLabel({
			text : 'Believes: ' + this_Mission[i],
			color : 'black',
			font : {
				fontSize : fnt
			},
			width : wdh * 0.94,
			left : wdh * 0.02
		});

		// Add to the parent view.
		SinglecompassView.add(Believes);
	}

	return AllView;
}

module.exports = ViewCompass;
