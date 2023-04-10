import React, { useState, useEffect } from "react";
import Plot from 'react-plotly.js'

function TSNEVisualization(props){

  const [fileData, setFileData] = useState(props.data);
  const [data, setData] = useState([])

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  // arrumar para chamar somente uma vez quando data = []
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
          
          const classif = new Set(unpack(fileData, "Classification"));
          setData([]);

          classif.forEach( value => { 

            let auxX = [], auxY = [];
            for(let i=0; i<unpack(fileData, "Classification").length; i++){
              if(unpack(fileData, "Classification")[i] === value){
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

    <div id="oi">

      <Plot data={data} layout={{width:1000, height:700}}/>
      
    </div> 
    
  )
}

export default TSNEVisualization;