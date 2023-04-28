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
    // descricao: {},
    // atributo: {},
  })

  const [labelChosen, setLabelChosen] = useState('');
  const [descricaoChosen, setDescricaoChosen] = useState(new Set());
  const [atributoChosen, setAtributoChosen] = useState(new Set());
  const [columnsChosen, setColumnsChosen] = useState(new Set());

  useEffect(() => {
    let auxCol = [];
    // let auxNotChos = {};
    // let auxChos = {}
    
    for(const key in state.fileData[0]){
      auxCol.push(key);
      // auxNotChos[key] = 0;
      // auxChos[key] = 1;
    }
      
    setColumns(auxCol);
    // setChosen(prev => ({...prev, columns:auxNotChos}))
    // setColumnsChosen(auxNotChos);
    // setChosen({ label: '', descricao: auxNotChos, atributo: auxNotChos, columns: auxNotChos });

    // console.log(chosen)
  }, [])

  // console.log(atributoChosen);
  // console.log(labelChosen);
  // console.log(descricaoChosen);

  const toggleService = {

    handleChecked: function(event, val){

      // console.log(val);

      let aux = chosen;
      aux.columns.add(val);
      // aux.columns[val] = 1;
      aux.atributo.add(val);
      setChosen(aux);

      console.log(chosen);
    },

    handleUnchecked: function(event, val){
      let aux = chosen;
      aux.columns.delete(val);
      // aux.columns[val] = 0;

      if(aux.atributo.has(val)) aux.atributo.delete(val);
      if(aux.descricao.has(val)) aux.descricao.delete(val);
      if(aux.label == val) aux.label = "";

      setChosen(aux);

      console.log(chosen);
    },

    // teste: function(val){
    //   console.log(val);
    // }

  }

  const prevStep = () => {
    navigate('/step1', { state: state });
  }

  const nextStep = () => {

    let aux = {label:labelChosen, descricao:descricaoChosen, atributo:atributoChosen};
    let newState = state

    // chosen.columns.forEach(key => aux.push(key));

    console.log("xxxxx")
    console.log(state)

    newState = {...newState, columns: aux};

    console.log(newState);

    navigate('/step3', { state: newState });
  }

  // console.log(chosen.columns);

  const displayColunas = () => {
    const col = [];
    for (let i = 0; i < columns.length; i++) {

      col.push(
        <div key={i}>
        <div className={styles.coluna} >
          <p>{columns[i]}</p>
          <Toggle 
            id={columns[i]} 
            // state={ {chosen, setChosen} } 
            handleChecked = {event => toggleService.handleChecked(event,columns[i])}
            handleUnchecked = {event => toggleService.handleUnchecked(event,columns[i])}
            />
            {/* }
            handleUnchecked = {toggleService.handleUnchecked(columns[i], chosen, setChosen) } />
               } { {chosen: columnsChosen, setChosen: setColumnsChosen} }/> */}
        </div>

        <p>{chosen.label}</p>

        {/* <p>{columnsChosen.has(columns[i])}</p>  */}
        {
          // chosen.columns.has(columns[i]) && 
          // chosen.columns[columns[i]] == 1 &&
          !columnsChosen.has(columns[i]) &&
          // chosen.columns[columns[i]] == 0 &&
          <div className={styles.options} >
            <Checkbox id={"label" + i} column={columns[i]} content="label" state={ {chosen: labelChosen, setChosen: setLabelChosen} }/>
            <Checkbox id={"descricao" + i} column={columns[i]} content="descricao" state={ {chosen: descricaoChosen, setChosen: setDescricaoChosen} }/>
            <Checkbox id={"atributo" + i} column={columns[i]} content="atributo" state={ {chosen:atributoChosen, setChosen: setAtributoChosen} } />
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