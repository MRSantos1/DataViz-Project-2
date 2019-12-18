// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
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
d3.csv("code/assets/data/final_demo_data.csv").then(function(enrollData) {
  console.log(enrollData);
})


// Load csv files
// =====================================

d3.csv("./2016_demo_data.csv").then(function(enrollData) {

    console.log(enrollData);
  
    // + =========== Modify codes from here ================ +
    // log a list of names
    var names = tvData.map(data => data.name);
    console.log("names", names);
  
    // Cast each hours value in tvData as a number using the unary + operator
    tvData.forEach(function(data) {
      data.hours = +data.hours;
      console.log("Name:", data.name);
      console.log("Hours:", data.hours);
    });
  }).catch(function(error) {
    console.log(error);
  });
  