// Define SVG area dimensions
var svgWidth = 1100;
var svgHeight = 580;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 50
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select <body>. Append SVG area to <body> and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ("translate") it to the rigth and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load csv file
d3.csv("/code/assets/data/race_2016_data.csv").then(function(enrollData)
  {
  console.log(enrollData);

  // Cast the enrollment value to a number for each piece of enrollData
  enrollData.forEach(function(d) {
   d.enrollment =+ d.enrollment;

  });

// Configure a band scale for the horizontal axis with a pdding of 0.2 (20%)
var xBandScale = d3.scaleBand()
  .domain(enrollData.map(d => d.ethnicity))
  .range([0, chartWidth])
  .padding(0.2);

// // Create a linear scale for the vertical axis
var yLinearScale = d3.scaleLinear()
  .domain([0, d3.max(enrollData, d => d.enrollment)])
  .range([chartHeight, 0]);

// // Create two new functions passing our scales in as arguments
// // These will be used to create the chart's axes
var bottomAxis = d3.axisBottom(xBandScale);
var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

// // Append two SVG group elements to the chartGroup area,
// // and create the bottom and left axes inside of them
chartGroup.append("g")
  .call(leftAxis);

chartGroup.append("g")
  .attr("transform", `translate(0, ${chartHeight})`)
  .call(bottomAxis);

// // Create one SVG rectangle per piece of tvData
// // Use the linear and band scales to position each rectangle within the chart
chartGroup.selectAll(".bar")
  .data(enrollData)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", d => xBandScale(d.ethnicity))
  .attr("y", d => yLinearScale(d.enrollment))
  .attr("width", xBandScale.bandwidth())
  .attr("height", d => chartHeight - yLinearScale(d.enrollment));

}).catch(function(error) {
  console.log(error);
});
  