import Collapsible from '../../components/componentsUI/collapsible';
import Toggle from '../../components/componentsUI/toggle';
import styles from './style.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Forms3() {

  const navigate = useNavigate();
  const {state} = useLocation();
  const visualizacoes = ["parallelcoord", "scatterplotmatrix", "tsne"];
  const [visualizationsChosen, setVisualizationsChosen] = useState(new Set());

  console.log(state)

  const toggleService = {

    handleChecked: function(event, val){

      let aux = visualizationsChosen;
      aux.add(val);
      setVisualizationsChosen(aux);

      console.log(visualizationsChosen);
    },

    handleUnchecked: function(event, val){
      let aux = visualizationsChosen;
      aux.delete(val);
      setVisualizationsChosen(aux);

      console.log(visualizationsChosen);
    },

  }

  const prevStep = () => {
    navigate('/step2', { state: state });
  }

  const nextStep = () => {

    let newState = state
    newState = {...newState, visualizations:visualizationsChosen};
    navigate('/visualizations', { state: newState });
  }

  const displayColunas = () => {
    const col = [];
    for (let i = 0; i < visualizacoes.length; i++) {

      col.push(
        <div className={styles.containerColuna} key={i}>

          <div className={styles.coluna}>
            <p>{visualizacoes[i]}</p>
            <Toggle 
              id={visualizacoes[i]} 
              handleChecked = {event => toggleService.handleChecked(event,visualizacoes[i])}
              handleUnchecked = {event => toggleService.handleUnchecked(event,visualizacoes[i])}  
            />
          </div>

          <Collapsible id={"col" + i} img={"exe_" + visualizacoes[i]}/>

        </div>);
    }
    return col;
  }

  return (
    <div className={styles.forms}>
      <div className={styles.steps}>
        <p className={styles.stepOther}>1</p>
        <p className={styles.stepOther}>2</p>
        <p className={styles.stepCurr}>3</p>
      </div>

      <div className={styles.frame}>
        <p style={{ fontSize: '20px' }}>Quais colunas você deseja incluir nas visualizações?</p>

        <div className={styles.colunas}>
          {displayColunas()}
        </div>
        <div className={styles.bottom}>
          <button onClick={prevStep}>anterior</button>
          <button onClick={nextStep}>proximo</button>
        </div>
      </div>

    </div>

  )
}

export default Forms3;