var FirstView = Ti.UI.currentWindow;

var hgt = Ti.Platform.displayCaps.platformHeight;
var wdh = Ti.Platform.displayCaps.platformWidth;

var gridLeftArray = ['/images/1.png', '/images/3.png', '/images/3.png', '/images/5.png'];
var gridLeftLabel = ['Aims', 'Yearly Planing', 'Weekly Planing', 'Questions'];
var gridRightArray = ['/images/2.png', '/images/3.png', '/images/3.png', '/images/7.png'];
var gridRightLabel = ['Compass', 'Rules', 'Daily Planing', 'Album Dreams'];

var AllView = Ti.UI.createView({
	backgroundImage : '/images/ld-bg.png',
	top : 0,
	height : Ti.Platform.displayCaps.platformHeight,
	width : Ti.Platform.displayCaps.platformWidth
});

FirstView.add(AllView);

// Create an ImageView.
var anImageView = Ti.UI.createImageView({
	image : '/images/Ld.png',
	width : wdh,
	height : hgt * 0.09,
	top : 0,
	left : 0
});

// Add to the parent view.
AllView.add(anImageView);

var GridViewLeft = Ti.UI.createView({
	top : hgt * 0.1,
	width : wdh * 0.48,
	height : hgt * 0.65,
	left : 0,
	layout : 'vertical'
});

AllView.add(GridViewLeft);

for (var i = 0; i < 4; i++) {

	var subGridViewLeft = Ti.UI.createView({
		backgroundImage : '/images/tile.png',
		top : hgt * 0.012,
		width : wdh * 0.48,
		height : hgt * 0.15,
		left : 0
	});
	GridViewLeft.add(subGridViewLeft);

	// Create an ImageView.
	var GridIcon = Ti.UI.createImageView({
		image : gridLeftArray[i],
		width : wdh * 0.13,
		height : hgt * 0.08,
		top : '20%',
		left : wdh * 0.03,
	});

	// Add to the parent view.
	subGridViewLeft.add(GridIcon);

	// Create a Label.
	var GridLabel = Ti.UI.createLabel({
		text : gridLeftLabel[i],
		color : 'black',
		font : {
			fontSize : 24
		},
		right : wdh * 0.04,
		width : wdh * 0.25,
		textAlign : 'center'
	});

	// Add to the parent view.
	subGridViewLeft.add(GridLabel);

}

var GridViewRight = Ti.UI.createView({
	top : hgt * 0.1,
	width : wdh * 0.48,
	height : hgt * 0.65,
	right : 0,
	layout : 'vertical'
});

AllView.add(GridViewRight);

for (var i = 0; i < 4; i++) {

	var subGridViewRight = Ti.UI.createView({
		backgroundImage : '/images/tile.png',
		top : hgt * 0.012,
		width : wdh * 0.48,
		height : hgt * 0.15,
		right : 0
	});

	GridViewRight.add(subGridViewRight);

	// Create an ImageView.
	var GridIcon = Ti.UI.createImageView({
		image : gridRightArray[i],
		width : wdh * 0.13,
		height : hgt * 0.08,
		top : '20%',
		left : wdh * 0.03,
	});

	// Add to the parent view.
	subGridViewRight.add(GridIcon);

	// Create a Label.
	var GridLabel = Ti.UI.createLabel({
		text : gridRightLabel[i],
		color : 'black',
		font : {
			fontSize : 24
		},
		width : wdh * 0.23,
		right : wdh * 0.04,
		textAlign : 'center'
	});

	// Add to the parent view.
	subGridViewRight.add(GridLabel);
}

var Bottom = Ti.UI.createView({
	backgroundImage : '/images/tile.png',
	top : hgt * 0.76,
	width : wdh,
	height : hgt * 0.15,
	right : 0,
});

AllView.add(Bottom);

// Create an ImageView.
var BottomIcon = Ti.UI.createImageView({
	image : '/images/6.png',
	width : wdh * 0.13,
	height : hgt * 0.08,
	top : '20%',
	left : wdh * 0.03,
});

// Add to the parent view.
Bottom.add(BottomIcon);

// Create a Label.
var BottomLabel = Ti.UI.createLabel({
	top : '40%',
	text : 'Buget Plan',
	color : 'black',
	font : {
		fontSize : 24
	},
	width : wdh * 0.8,
	right : wdh * 0.04,
	textAlign : 'center'
});

// Add to the parent view.
Bottom.add(BottomLabel);
