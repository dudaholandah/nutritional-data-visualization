import { useEffect, useState } from 'react';
import Toggle from '../../components/componentsUI/toggle';
import styles from './style.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import Checkbox from '../../components/componentsUI/checkbox';

function Forms2() {

  const navigate = useNavigate();
  const {state} = useLocation();
  const [columns, setColumns] = useState([]);

  const [chosen, setChosen] = useState({
    label: "",
    descricao: new Set(),
    atributo: new Set(),
    columns: new Set()
  })

  useEffect(() => {
    let auxCol = [];
    for(const key in state.fileData[0]){
      auxCol.push(key);
    } 
    setColumns(auxCol);
  }, [])

  const toggleService = {

    handleChecked: function(event, val){

      let aux = chosen;

      aux.atributo.add(val);
      aux.columns.add(val);

      setChosen(prev => ({...prev, 
        atributo: aux.atributo.add(val),
        columns: aux.columns.add(val)}))

      console.log(chosen);
    },

    handleUnchecked: function(event, val){
      let aux = chosen;
      aux.columns.delete(val);

      if(aux.atributo.has(val)) aux.atributo.delete(val);
      if(aux.descricao.has(val)) aux.descricao.delete(val);
      if(aux.label == val) aux.label = "";

      setChosen(prev => ({...prev, 
        atributo: aux.atributo,
        columns: aux.columns,
        descricao: aux.descricao,
        label: aux.label}))

      console.log(chosen);
    },

  }

  const prevStep = () => {
    navigate('/step1', { state: state });
  }

  const nextStep = () => {

    let aux = {label:chosen.label, descricao:chosen.descricao, atributo:chosen.atributo};
    let newState = state

    console.log("xxxxx")
    console.log(state)

    newState = {...newState, columns: aux};

    console.log(newState);

    navigate('/step3', { state: newState });
  }

  const displayColunas = () => {
    const col = [];
    for (let i = 0; i < columns.length; i++) {

      col.push(
        <div key={i}>
          <div className={styles.coluna} >
            <p>{columns[i]}</p>
            <Toggle 
              id={columns[i]} 
              handleChecked = {event => toggleService.handleChecked(event,columns[i])}
              handleUnchecked = {event => toggleService.handleUnchecked(event,columns[i])}
              />
          </div>

          {
            chosen.columns.has(columns[i]) &&
            <div className={styles.options} >
              <Checkbox id={"label" + i} column={columns[i]} content="label" state={ {chosen: chosen, setChosen: setChosen} }/>
              <Checkbox id={"descricao" + i} column={columns[i]} content="descricao" state={ {chosen: chosen, setChosen: setChosen} }/>
              <Checkbox id={"atributo" + i} column={columns[i]} content="atributo" state={ {chosen:chosen, setChosen: setChosen} } checked={true} />
            </div> 
          }
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
          <div className={styles.inner} >
            {displayColunas()}  
          </div>
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