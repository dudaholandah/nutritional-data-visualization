import './style.scss'
import { useEffect, useRef, useState } from 'react';

function Checkbox(props) {

  const checkbox = useRef();
  const {chosen, setChosen} = props.state;

  const handleClick = () => {
    if (checkbox.current.checked) {
      console.log('checked')

      console.log(chosen);

      let aux = chosen;

      if(props.content == "atributo"){
        aux.add(props.column);
      }
      else if(props.content == "descricao"){
        aux.add(props.column);
      }
      else{
        if(aux !== ""){
          checkbox.current.checked = false;
          alert("Apenas uma coluna pode ser label. Desmarque a última opção.")
          return;
        }
        else aux = props.column;
      }    
      
      setChosen(aux);

      console.log(chosen);

      // checkbox.current.checked = false;

      // let auxChosen = {...props.chosen.chosen};
      // auxChosen[props.id] = 1;

      // props.chosen.setChosen(curr => ({
      //   ...auxChosen
      // })) 
    }
    else{
      checkbox.checked = false;
      console.log('unchecked')

      let aux = chosen;

      if(props.content === "atributo"){
        aux.delete(props.column);
      }
      else if(props.content === "descricao"){
        aux.delete(props.column);
      }
      else{
        aux = "";
      }  

      setChosen(aux);

      console.log(chosen);
      
      // let auxChosen = {...props.chosen.chosen};
      // delete auxChosen[props.id];
      // props.chosen.setChosen(curr => ({
      //   ...auxChosen
      // })) 
    }
  }

  return (
    <div className="box">
      <input id={props.id} type="checkbox" onClick={handleClick} ref={checkbox} defaultChecked={props.checked}/>
      <span className="check"></span>
      <label htmlFor={props.id}>{props.content}</label>
    </div>
  )
}

export default Checkbox;