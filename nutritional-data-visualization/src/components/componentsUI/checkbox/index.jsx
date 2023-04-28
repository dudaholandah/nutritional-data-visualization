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
        aux.atributo.add(props.column);
      }
      else if(props.content == "descricao"){
        aux.descricao.add(props.column);
      }
      else{
        if(aux.label !== ""){
          checkbox.current.checked = false;
          alert("Apenas uma coluna pode ser label. Desmarque a última opção.")
          return;
        }
        else aux.label = props.column;
      }    
      
      setChosen(prev => ({...prev, 
        atributo: aux.atributo,
        descricao: aux.descricao,
        label: aux.label}))

      console.log(chosen);
    }
    else{
      checkbox.checked = false;
      console.log('unchecked')

      let aux = chosen;

      if(props.content === "atributo"){
        aux.atributo.delete(props.column);
      }
      else if(props.content === "descricao"){
        aux.descricao.delete(props.column);
      }
      else{
        aux.label = "";
      }  

      setChosen(prev => ({...prev, 
        atributo: aux.atributo,
        descricao: aux.descricao,
        label: aux.label}))

      console.log(chosen);
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