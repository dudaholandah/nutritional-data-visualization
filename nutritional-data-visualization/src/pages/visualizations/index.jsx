import './style.scss'
import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import ScatterplotMatrix from '../../components/scatterplotMatrix';
import ParallelCoordinates from '../../components/parallelCoordinates';
import TSNEVisualization from '../../components/TSNEVisualization';


function Visualizations() {

  const {state} = useLocation();
  const {sheetName, fileName, fileData } = state

  console.log(fileData)

  return (
      <div className='visualizations'>
        <ScatterplotMatrix data={fileData} />
        <ParallelCoordinates data={fileData} /> 
        <TSNEVisualization data={fileData} />
      </div>
  )

}

export default Visualizations