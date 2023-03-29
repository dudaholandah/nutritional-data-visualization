import { color } from 'd3';
import Plot from 'react-plotly.js'

function ScatterplotMatrix(props) {

  const fileData = props.data

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  const classif = new Set(unpack(fileData, "Classification"));

  let colors = []
  for (let i=0; i < unpack(fileData, "Classification").length; i++) {
    let j = 0
    classif.forEach( value => { 
      if (unpack(fileData, "Classification")[i] === value)
        colors.push(0 + j*(1/classif.size));
      j++;
    })
  }

  var axis = () => ({
    showline:false,
    zeroline:false,
    gridcolor:'#ffff',
    ticklen:2,
    tickfont:{size:10},
    titlefont:{size:12}
  })

  var data = [{
    type: 'splom',
    dimensions: [
      {label:"Carbohydrates", values:unpack(fileData, "Carbohydrate")},
      {label:"Protein", values:unpack(fileData, "Proteins")},
      {label:"Dietary Fiber", values:unpack(fileData, "Dietary Fiber")},
      {label:"Total Fat", values:unpack(fileData, "Total Fats",)},
      {label:"Saturated Fat", values:unpack(fileData, "Saturated Fats")},
    ],
    text: unpack(fileData, "Classification"),
    marker: {
      color: colors,
      colorscale: 'RdBu',
      line: {
        color: 'white',
        width: 0.5
      }
    }
  }]

  var layout = {
    title:"Scatterplot Matrix",
    height: 1000,
    width: 1000,
    autosize: false,
    hovermode:'closest',
    dragmode:'select',
    plot_bgcolor:'rgba(240,240,240, 0.95)',
    xaxis:axis(),
    xaxis2:axis(),
    xaxis3:axis(),
    xaxis4:axis(),
    xaxis5:axis(),
    yaxis:axis(),
    yaxis2:axis(),
    yaxis3:axis(),
    yaxis4:axis(),
    yaxis5:axis()
  }

  return (
    <Plot
      data={data}
      layout={layout}
    />
  )
}

export default ScatterplotMatrix