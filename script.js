d3.csv("digimon.csv", function(ds) {
  
  var shit = d3.select('.container')
    .selectAll('div')
    .data(ds)
    .enter().append('div')
    .attr('class', 'style_prevu_kit')
    .transition()
    .duration(666)
    .delay(function(d, i) { return i * 33 })
      .style("display", "flex")
      .style("align-items", "center")
      .style('justify-content', 'center')
      .style("background-color", function(d) {
        switch (d.Stage) {
          case "Baby":
              return "pink"
          case "In-Training":
              return "green"
          case "Rookie":
              return "seagreen"
          case "Champion":
              return "skyblue"
          case "Ultimate":
              return "silver"
          case "Mega":
              return "gold"
         default:
              return 'black';
      }
      })
      .style("border-radius", "100px")
      .style("width", "200px")
      .style("height", "200px")
      .style("margin", "10px")
      .style("color", "white")
      .text(function(d) {return d.Digimon})

      // .on("mouseover", function (d) {
      //   select(this).style("color", "blue")
      // })
})