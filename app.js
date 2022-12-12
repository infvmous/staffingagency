google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Jobs', 'Trends per Day'],
          ['Construction',     10],
          ['Creative',      2],
          ['Health',  2],
          ['IT', 2],
          ['Energy',    8]
        ]);

        var options = {
          title: '2022 Hiring Trends',
          pieHole: 0.2,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }