import { color } from 'd3';
import Plot from 'react-plotly.js'
import VisualizationsService from '../../service/visualizationsService';

function ParallelCoordinates(props) {

  const fileData = props.data
  const columns = props.columns

  var data = [{
    type: 'parcoords',
    pad: [80,80,80,80],
    line: {
      color: VisualizationsService.colors(fileData, columns),
      colorscale: 'RdBu',
    },
    dimensions: VisualizationsService.dimensions(fileData, columns)
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