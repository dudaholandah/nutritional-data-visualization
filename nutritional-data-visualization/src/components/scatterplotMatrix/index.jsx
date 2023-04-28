import { color } from 'd3';
import { useEffect } from 'react';
import Plot from 'react-plotly.js'
import VisualizationsService from '../../service/visualizationsService';

function ScatterplotMatrix(props) {

  const fileData = props.data
  const columns = props.columns

  let i = 0;
  for(let key of columns.descricao){
    console.log(VisualizationsService.unpack(fileData, key))  
  }

  // TODO: PRE PROCESSAR OS DADOS
  // CRIAR DESCRICAO PARA CADA VISUALIZACAO
  // CRIAR DESCRICAO PARA OS DADOS (PONTOS)
  var data = [{
    type: 'splom',
    dimensions: VisualizationsService.dimensions(fileData, columns),
    // todo: criar desc
    // text: VisualizationsService.unpack(fileData, columns.label)
    marker: {
      color: VisualizationsService.colors(fileData, columns),
      colorscale: 'RdBu',
      line: {
        color: 'white',
        width: 0.5
      }
    }
  }]

  var layout = {
    title:"Scatterplot Matrix",
    height: 700,
    width: 1000,
    autosize: false,
    hovermode:'closest',
    dragmode:'select',
    plot_bgcolor:'rgba(240,240,240, 0.95)',
  }

  for(let i=0; i<=columns.atributo.size; i++){
    if(i != 0){
      layout['xaxis' + i] = VisualizationsService.axis();
      layout['yaxis' + i] = VisualizationsService.axis();
    }
    else{
      layout['xaxis'] = VisualizationsService.axis();
      layout['yaxis'] = VisualizationsService.axis();
    }
  }

  return (
    <Plot
      data={data}
      layout={layout}
    />
  )
}

export default ScatterplotMatrix