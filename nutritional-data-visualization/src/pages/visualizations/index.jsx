// import './style.scss'
import styles from './style.module.scss'
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

    <div className={styles.visualizations}>
      <div className={styles.box}>
        <div className={styles.scroller}>

          {
            state.visualizations.has('scatterplotmatrix') &&
            <div className={styles.scrollerItem}>
              <ScatterplotMatrix data={state.fileData} columns={state.columns} />
            </div>
          }
          
          {
            state.visualizations.has('parallelcoord') &&
            <div className={styles.scrollerItem}>
              <ParallelCoordinates data={state.fileData} columns={state.columns}/>
            </div>
          }

          {
            state.visualizations.has('tsne') &&        
            <div className={styles.scrollerItem}>
              <TSNEVisualization data={state.fileData} columns={state.columns}/>
            </div>
          }
        </div>
      </div>
    </div>


  )

}

export default Visualizations