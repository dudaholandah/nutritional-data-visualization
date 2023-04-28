import './style.scss'
import { useRef, useState } from 'react';

function Toggle(props) {

  const checkbox = useRef();

  const handleClick = (event) => {
    if (checkbox.current.checked) {
      props.handleChecked(event);
    }
    else{
      props.handleUnchecked(event);
    }
  }

  return (
    <><input className="tgl tgl-ios" id={props.id} type="checkbox" onClick={handleClick} ref={checkbox}/>
      <label className="tgl-btn" htmlFor={props.id}></label></>
  )
}

export default Toggle;