import { color } from 'd3';
import Plot from 'react-plotly.js'

function ParallelCoordinates(props) {

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

  var data = [{
    type: 'parcoords',
    pad: [80,80,80,80],
    line: {
      color: colors,
      colorscale: 'RdBu',
    },
  
    dimensions: [{
      label:"Carbohydrates", 
      values: unpack(fileData, "Carbohydrate")
    }, {
      label:"Protein", 
      values: unpack(fileData, "Proteins")
    }, {
      label:"Dietary Fiber", 
      values: unpack(fileData, "Dietary Fiber")
    }, {
      label:"Total Fat", 
      values: unpack(fileData, "Total Fats")
    }, {
      label:"Saturated Fat", 
      values:unpack(fileData, "Saturated Fats")
    }]
  }];
  
  var layout = {
    title:"Parallel Coordinates",
    width: 1000,
    height: 700
  };

  return (
    <Plot
      data={data}
      layout={layout}
    />
  )
}

export default ParallelCoordinates