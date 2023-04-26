import './style.scss'
import { useRef, useState } from 'react';

function Toggle(props) {

  const checkbox = useRef();

  const handleClick = () => {
    if (checkbox.current.checked) {
      let auxChosen = {...props.chosen.chosen};
      auxChosen[props.id] = 1;

      props.chosen.setChosen(curr => ({
        ...auxChosen
      })) 
    }
    else{
      let auxChosen = {...props.chosen.chosen};
      delete auxChosen[props.id];
      props.chosen.setChosen(curr => ({
        ...auxChosen
      })) 
    }
  }

  return (
    <><input className="tgl tgl-ios" id={props.id} type="checkbox" onClick={handleClick} ref={checkbox}/>
      <label className="tgl-btn" htmlFor={props.id}></label></>
  )
}

export default Toggle;