import {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx/xlsx.mjs';
import './style.scss'

function Forms() {

  const [fileData, setFileData] = useState()

  const [fileDetails, setFileDetails] = useState({
    sheetName: "",
    fileName: "",
    fileData: {}
  });
  
  const fileRef = useRef();
  const navigate = useNavigate();

  const parseExcelFile = (e) => {

    e.preventDefault();
    
    console.log(fileDetails.sheetName);

    var wb = XLSX.read(fileDetails.fileData, {type: 'binary'});
    let sheetNameExists = false;

    for(let i=0; i<wb.SheetNames.length; i++){
      if(wb.SheetNames[i] === fileDetails.sheetName) sheetNameExists = true;
    }

    if(!sheetNameExists){
      alert("Invalid Sheet Name");
      return;
    }

    const ws = wb.Sheets[fileDetails.sheetName];
    const dataParse = XLSX.utils.sheet_to_json(ws);

    setFileDetails(previousState => {
      return { ...previousState, fileData: dataParse }
    });
    
  }


  const handleFile = (e) => {
    const myFile = e.target.files[0];


    console.log(myFile.name);

    setFileDetails(previousState => {
      return { ...previousState, fileName: myFile.name }
    });
    
    const reader = new FileReader();
    reader.readAsBinaryString(myFile);
    reader.onload = function (e) { 

      setFileDetails(previousState => {
        return { ...previousState, fileData: e.target.result }
      });
                     
    };

  }

  const updateSheetName = (name) => {
    setFileDetails(previousState => {
      return { ...previousState, sheetName: name }
    });
  }

  const goToVisualizations = () => {
    navigate('/visualizations', {state:fileDetails})
  }

  console.log(fileDetails)

  return(
      <div className='file-forms'>
        <h3>Selecione um arquivo xlsx:</h3>
        <form>
          <label htmlFor='fileXlsx'>
            Enviar arquivo
            <input 
              type='file' 
              id='fileXlsx'
              accept='xlsx, xls' 
              multiple={false} 
              ref={fileRef}
              
              onChange={(e) => handleFile(e)}>
            </input>
          </label>

          {fileDetails.fileName && <p>{fileDetails.fileName}</p>}

          <label> 
            Digite o nome da planilha:
            <input 
              type='text' 
              autoFocus={true}
              value={fileDetails.sheetName}
              onChange={(e) => updateSheetName(e.target.value)}>
            </input>
          </label>

          <button onClick={parseExcelFile}>Submit</button>
          <button onClick={goToVisualizations}>See Visualizations</button>
        </form> 
      </div>

  )

}

export default Forms;