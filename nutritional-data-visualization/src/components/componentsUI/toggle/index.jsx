import './style.scss'
import { useRef, useState } from 'react';

function Toggle(props) {

  const checkbox = useRef();
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (checkbox.current.checked) {
      console.log("checked: " + props.id)
      setIsChecked(true);
    }
    else{
      console.log("not checked: " + props.id)
      setIsChecked(false);
    }
  }

  return (

    // <><input class="tgl tgl-light" id="cb1" type="checkbox"/>
    // <label class="tgl-btn" for="cb1"></label></>
    <><input className="tgl tgl-ios" key={props.id} type="checkbox" onClick={handleClick} ref={checkbox}/>
      <label className="tgl-btn" htmlFor={props.id}></label></>
  )
}

export default Toggle;