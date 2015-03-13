// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);
      
     
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Percentage of Total Road Fatalities');
        data.addColumn('number', 'Borough');
        data.addRows(myPedestrianData);

        // Set chart options
        var options = {'title':'Road Deaths: Percentage of Pedestrian Fatalities by Location',
                       'width':850,
                       'height':600};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }