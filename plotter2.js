var svg = d3.select("#Plotter")  // Select the chart container
  .append("svg")
    .attr("width", 200)  // Set width
    .attr("height", 200); // Set height (larger than max data value)

var data = [10, 20, 30, 40, 50];

svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
    .attr("width", 50)
    .attr("height", function(d) { return d; }) // Set height based on data
    .attr("x", function(d, i) { return i * 55; })
    .attr("y", function(d) { return svg.attr("height") - d; }) // Subtract data from height
    .attr("fill", "steelblue");

