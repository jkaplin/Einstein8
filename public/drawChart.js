// Load the Visualization API and the corechart package.
google.charts.load("current", { packages: ["line"] });
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn("number", "Days");
  data.addColumn("number", "Money");

  data.addRows(rows);

  // Set chart options
  var options = {
    curveType: "function",
    chart: {
      title: "Money",
      subtitle: "in dollars (USD)"
    },
    width: 900,
    height: 500
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.charts.Line(document.getElementById("chart_div"));

  chart.draw(data, google.charts.Line.convertOptions(options));
}
