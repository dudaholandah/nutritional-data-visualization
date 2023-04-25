import './style.scss'

function Collapsible(props) {

  return(

    <div className="container">
      <div className='item'>
        <input type='checkbox' id={props.id}/>
        <label htmlFor={props.id}>ver exemplo ?</label>
        <div>
          <img src={'src/data/' + props.img + ".png"} />
        </div>
      </div>
    </div>
      
    
  )
  
}

export default Collapsible;