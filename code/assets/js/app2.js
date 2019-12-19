var years = ['2016', '2017', '2018', '2019']

Plotly.d3.csv('/code/assets/data/race_data.csv',
(err, rows) => {
    var layout = {
        width: 750,
        height: 500,
        title:"Yearly Enrollment (by ethnicity)",
        xaxis: {automargin: true,
            tickangle: 40,
            tickfont: {
            size:11
        }},
        yaxis: {tickfont: {
            size:11
        }}
    };
    var data = years.map(y => {
        var d = rows.filter(r => r.year === y)

        return {
            type: 'bar',
            name: y,
            x: d.map(r => r.ethnicity),
            y: d.map(r => r.enrollment)
        }
    })

    Plotly.newPlot('graph', data, layout)
})
