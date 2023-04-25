import './style.scss'

function Toggle(props) {

  return (

    // <><input class="tgl tgl-light" id="cb1" type="checkbox"/>
    // <label class="tgl-btn" for="cb1"></label></>

    <><input class="tgl tgl-ios" id={props.id} type="checkbox" />
      <label class="tgl-btn" for={props.id}></label></>
  )
}

export default Toggle;