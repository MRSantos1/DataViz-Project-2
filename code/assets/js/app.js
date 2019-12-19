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
  