import Collapsible from '../../components/componentsUI/collapsible';
import Toggle from '../../components/componentsUI/toggle';
import styles from './style.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Forms3() {

  const navigate = useNavigate();
  const {state} = useLocation();
  const visualizacoes = ["parallelcoord", "scatterplotmatrix", "tsne"];
  const [chosen, setChosen] = useState({});

  useEffect(() => {
    let auxChos = {};
    for(const vis in visualizacoes){
      auxChos[vis] = 0;
    }
    setChosen(auxChos);
  }, [])

  console.log(state)

  const prevStep = () => {
    navigate('/step2', { state: state });
  }

  const nextStep = () => {

    let aux = new Set();
    let newState = state
    for(const key in chosen){
      if (chosen[key] == 1) aux.add(key);
    } 

    newState = {...newState, visualizations:aux};

    navigate('/visualizations', { state: newState });
  }

  const displayColunas = () => {
    const col = [];
    for (let i = 0; i < visualizacoes.length; i++) {

      {/* TO-DO: display options when button checked*/ }

      col.push(
        <div className={styles.containerColuna}>

          <div className={styles.coluna}>
            <p>{visualizacoes[i]}</p>
            <Toggle id={visualizacoes[i]} chosen={ {chosen, setChosen} }/>
          </div>

          {/* <p>ver exemplo ?</p> */}

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