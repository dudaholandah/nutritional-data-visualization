import './style.scss'
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ScatterplotMatrix from '../../components/scatterplotMatrix';
import ParallelCoordinates from '../../components/parallelCoordinates';
import TSNEVisualization from '../../components/TSNEVisualization';


function Visualizations() {

  const { state } = useLocation();
  // const { columns, fileData, fileName, sheetName, visualizations } = state

  console.log(state)

  return (

    <div className='visualizations'>
      <div className="scroller">

        {
          state.visualizations.has('scatterplotmatrix') &&
          <div className="scroller-item">
            <ScatterplotMatrix data={state.fileData} columns={state.columns} />
          </div>
        }
        
        {
          state.visualizations.has('parallelcoord') &&
          <div className="scroller-item">
            <ParallelCoordinates data={state.fileData} columns={state.columns}/>
          </div>
        }

        {
          state.visualizations.has('tsne') &&        
          <div className="scroller-item">
            <TSNEVisualization data={state.fileData} columns={state.columns}/>
          </div>
        }
      </div>
    </div>


  )

}

export default Visualizations