import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js'
import VisualizationsService from "../../service/visualizationsService";

function TSNEVisualization(props){

  const [fileData, setFileData] = useState(props.data);
  const [data, setData] = useState([]);
  const columns = props.columns;

  useEffect(() => {

    fetch("http://localhost:5000/tsne",{
        'method':'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(fileData)
      })  
        .then( res => res.json())
        .then( d => {
          
          const classif = new Set(VisualizationsService.unpack(fileData, columns.label));
          setData([]);

          classif.forEach( value => { 

            let auxX = [], auxY = [];
            for(let i=0; i<VisualizationsService.unpack(fileData, columns.label).length; i++){
              if(VisualizationsService.unpack(fileData, columns.label)[i] === value){
                auxX.push(d.X[i]);
                auxY.push(d.y[i]);
              }
            }

            let group = {
              x: auxX,
              y: auxY,
              name: value,
              mode: 'markers',
              type: 'scatter'
            };

            setData( oldArray => [...oldArray, group]);

          })

        }) 

  }, []);  

  return(

    <div id="tsne">
      <Plot data={data} layout={{width:1000, height:700}}/>
    </div> 
    
  )
}

export default TSNEVisualization;