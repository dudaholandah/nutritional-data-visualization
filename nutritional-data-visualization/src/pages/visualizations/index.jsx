import './style.scss'
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ScatterplotMatrix from '../../components/scatterplotMatrix';
import ParallelCoordinates from '../../components/parallelCoordinates';
import TSNEVisualization from '../../components/TSNEVisualization';


function Visualizations() {

  const { state } = useLocation();
  const { sheetName, fileName, fileData } = state

  console.log(fileData)

  return (

    <div className='visualizations'>
      <div className="scroller">
        <div className="scroller-item">
          <ScatterplotMatrix data={fileData} />
        </div>
        <div className="scroller-item">
          <ParallelCoordinates data={fileData} />
        </div>
        <div className="scroller-item">
          <TSNEVisualization data={fileData} />
        </div>
      </div>
    </div>


  )

}

export default Visualizations