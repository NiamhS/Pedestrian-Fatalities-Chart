Design Rationale:

I want to create a column chart that shows the percentage of road deaths across all five NYC boroughs that are pedestrian fatalities.
Manhattan is by far the most dangerous of the five boroughs for pedestrians, with 73 percent of all road deaths affecting pedestrians, so I want the focus to be on Manhattan.
I intend to make the column representing Manhattan a different color so as to draw attention to it.
I intend to annotate the Manhattan column with an additional marker that shows the nationwide average percentage of pedestrian fatalities in car accidents.
I am using a column chart as it will best show the contrast between Manhattan and the other boroughs.
The vAxis will have a scale (percentage) that starts at zero, as per best practice, and will increase to 100 (i.e. the maximum possible).
Each column will be clearly labeled with the column name so as to make each item of data easily understood.

Configuration options elements:

var myPedestrianTextStyle = {
	fontName : 'Arial',
	fontSize : 18,
	bold : false,
	italic : true,
	color : 'gray',     // The color of the text.
}

var myGridLinesColor = {
	color : 'gray',
	count : 4
};

var options = {
	'title' : 'Road Deaths: Percentage of Pedestrian Fatalities by Location',
	'width' : 850,
	'height' : 600
};
//end of options

options.hAxis = {
	'title' : 'Borough'
};
options.vAxis = {
	'title' : 'Percent'
};
options.hAxis.textStyle = myPedestrianTextStyle
options.vAxis.textStyle = myPedestrianTextStyle

options.vAxis.gridlines = myGridLinesColor;
// this instructs vAxis gridlines to follow format contained within var myGridlinesColor
