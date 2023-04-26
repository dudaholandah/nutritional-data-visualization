import './style.scss'
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ScatterplotMatrix from '../../components/scatterplotMatrix';
import ParallelCoordinates from '../../components/parallelCoordinates';
import TSNEVisualization from '../../components/TSNEVisualization';


function Visualizations() {

  const { state } = useLocation();
  const { sheetName, fileName, fileData, columns, visualizations } = state

  console.log(visualizations)

  return (

    <div className='visualizations'>
      <div className="scroller">

        {visualizations.has('scatterplotmatrix') &&
          <div className="scroller-item">
            <ScatterplotMatrix data={fileData} />
          </div>
        }
        
        {visualizations.has('parallelcoord') &&
          <div className="scroller-item">
            <ParallelCoordinates data={fileData} />
          </div>
        }

        {visualizations.has('tsne') &&        
          <div className="scroller-item">
            <TSNEVisualization data={fileData} />
          </div>
        }
      </div>
    </div>


  )

}

export default Visualizations