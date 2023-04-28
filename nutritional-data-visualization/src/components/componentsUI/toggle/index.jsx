import './style.scss'
import { useRef, useState } from 'react';

function Toggle(props) {

  const checkbox = useRef();
  // const {chosen, setChosen} = props.state;

  const handleClick = (event) => {
    if (checkbox.current.checked) {

      props.handleChecked(event);

      // let aux = chosen;
      // aux.add(props.id);
      // setChosen(aux);

      // console.log(chosen);

      // if(typeof(chosen) == Set()){
      //   aux.add(props.id);
      // }
      // else if(typeof(chosen) == "string")

      // aux.columns.add(props.id);
      // aux.atributo.add(props.id);

      // aux.columns[props.id] = 1;
      // aux.atributo[props.id] = 1;

      // console.log(aux);

      // checkbox.current.checked = false;

      // let auxChosen = {...props.chosen.chosen};
      // auxChosen[props.id] = 1;

      // props.chosen.setChosen(curr => ({
      //   ...auxChosen
      // })) 
    }
    else{

      props.handleUnchecked(event);

      // let aux = chosen;
      // aux.delete(props.id);
      // setChosen(aux);



      // console.log(chosen);

      // aux.columns.delete(props.id);

      // if(aux.atributo.has(props.id)) aux.atributo.delete(props.id);
      // if(aux.descricao.has(props.id)) aux.descricao.delete(props.id);
      // if(aux.label == props.id) aux.label = "";

      // aux.columns[props.id] = 0;
      // aux.atributo[props.id] = 0;



      // let auxChosen = {...props.chosen.chosen};
      // delete auxChosen[props.id];
      // props.chosen.setChosen(curr => ({
      //   ...auxChosen
      // })) 
    }
  }

  return (
    <><input className="tgl tgl-ios" id={props.id} type="checkbox" onClick={handleClick} ref={checkbox}/>
      <label className="tgl-btn" htmlFor={props.id}></label></>
  )
}

export default Toggle;