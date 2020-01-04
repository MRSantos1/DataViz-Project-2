const data = [
    {category: 'American Indian or Alaska Native', 
     values: [
        {pop: 74, year: '2016'},
        {pop: 93, year: '2017'},
        {pop: 84, year: '2018'},
        {pop: 78, year: '2019'}
    ]
    },
    {category: 'Black or African American',
     values: [
        {pop: 224, year: '2016'},
        {pop: 223, year: '2017'},
        {pop: 188, year: '2018'},
        {pop: 163, year: '2019'}
    ]
    },
    {category: 'General Asian',
     values: [
        {pop: 3735, year: '2016'},
        {pop: 3718, year: '2017'},
        {pop: 3653, year: '2018'},
        {pop: 3546, year: '2019'}
    ]
    },
    {category: 'Hispanic/Latino',
     values: [
        {pop: 4150, year: '2016'},
        {pop: 4021, year: '2017'},
        {pop: 3961, year: '2018'},
        {pop: 3785, year: '2019'}
    ]   
    },
    {category: 'Pacific Islander',
     values: [
        {pop: 288, year: '2016'},
        {pop: 299, year: '2017'},
        {pop: 241, year: '2018'},
        {pop: 237, year: '2019'}
    ]
    },
    {category: 'Undefined',
     values: [
        {pop: 46, year: '2016'},
        {pop: 77, year: '2017'},
        {pop: 76, year: '2018'},
        {pop: 77, year: '2019'}
    ]
    },
    {category: 'White',
     values: [
        {pop: 958, year: '2016'},
        {pop: 904, year: '2017'},
        {pop: 874, year: '2018'},
        {pop: 852, year: '2019'}
    ]
    }
];

    var margin = {top: 20, right: 20, bottom: 180, left: 40},
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    
   
    var x0  = d3.scaleBand().rangeRound([0, width], .5);
    var x1  = d3.scaleBand();
    var y   = d3.scaleLinear().rangeRound([height, 0]);

    var xAxis = d3.axisBottom().scale(x0)
                                // .tickFormat(d3.timeFormat("Week %V"))
                                .tickValues(data.map(d=>d.category));

    var yAxis = d3.axisLeft().scale(y);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    var svg = d3.select('body').append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var categoryNames = data.map(function(d) { return d.category; });
    var year = data[0].values.map(function(d) { return d.year; });

    x0.domain(categoryNames);
    x1.domain(year).rangeRound([0, x0.bandwidth()]);
    y.domain([0, d3.max(data, function(key) { return d3.max(key.values, function(d) { return d.pop; }); })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
        .attr("transform", function(d) {return "rotate(-90)"})
        .style("text-anchor", "end")
        .style('font-weight','bold');


    svg.append("g")
      .attr("class", "y axis")
      .style('opacity','0')
      .call(yAxis)
        .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .style('font-weight','bold')
            .text("Value");

    svg.select('.y').transition().duration(500).delay(1300).style('opacity','1');

    var slice = svg.selectAll(".slice")
      .data(data)
      .enter().append("g")
      .attr("class", "g")
      .attr("transform",function(d) { return "translate(" + x0(d.category) + ",0)"; });

      slice.selectAll("rect")
      .data(function(d) { return d.values; })
        .enter().append("rect")
            .attr("width", x1.bandwidth())
            .attr("x", function(d) { return x1(d.year); })
             .style("fill", function(d) { return color(d.year) })
             .attr("y", function(d) { return y(0); })
             .attr("height", function(d) { return height - y(0); })
            .on("mouseover", function(d) {
                d3.select(this).style("fill", d3.rgb(color(d.year)).darker(2));
            })
            .on("mouseout", function(d) {
                d3.select(this).style("fill", color(d.year));
            });


    slice.selectAll("rect")
      .transition()
      .delay(function (d) {return Math.random()*1000;})
      .duration(1000)
      .attr("y", function(d) { return y(d.pop); })
      .attr("height", function(d) { return height - y(d.pop); });

      //Legend
  var legend = svg.selectAll(".legend")
      .data(data[0].values.map(function(d) { return d.year; }).reverse())
  .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d,i) { return "translate(0," + i * 20 + ")"; })
      .style("opacity","0");

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function(d) { return color(d); });

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) {return d; });

  legend.transition().duration(500).delay(function(d,i){ return 1300 + 100 * i; }).style("opacity","1");



