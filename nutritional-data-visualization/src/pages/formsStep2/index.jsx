import { useEffect, useState } from 'react';
import Toggle from '../../components/componentsUI/toggle';
import styles from './style.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';

function Forms2() {

  const navigate = useNavigate();
  const {state} = useLocation();
  const [columns, setColumns] = useState([]);
  const [chosen, setChosen] = useState({});

  useEffect(() => {
    let auxCol = [];
    let auxChos = {};
    for(const key in state.fileData[0]){
      auxCol.push(key);
      auxChos[key] = 0;
    }
      
    setColumns(auxCol);
    setChosen(auxChos);
  }, [])


  const prevStep = () => {
    navigate('/step1', { state: state });
  }

  const nextStep = () => {

    let aux = [];
    let newState = state
    for(const key in chosen){
      if (chosen[key] == 1) aux.push(key);
    } 

    newState = {...newState, chosen:aux}

    navigate('/step3', { state: newState });
  }

  const displayColunas = () => {
    const col = [];
    for (let i = 0; i < columns.length; i++) {

      {/* TO-DO: display options when button checked*/ }

      col.push(
        <div className={styles.coluna}>
          <p>{columns[i]}</p>
          <Toggle id={columns[i]} chosen={ {chosen, setChosen} }/>
        </div>);
    }
    return col;
  }

  return (
    <div className={styles.forms}>
      <div className={styles.steps}>
        <p className={styles.stepOther}>1</p>
        <p className={styles.stepCurr}>2</p>
        <p className={styles.stepOther}>3</p>
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

export default Forms2;