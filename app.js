google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['jobs', 'trends'],
    ['Industrial',     10],
    ['Health',      3],
    ['Education',  2],
    ['Legal', 2],
    ['Creative',    7]
  ]);

  var options = {
    title: '2022 Hiring Trends'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}