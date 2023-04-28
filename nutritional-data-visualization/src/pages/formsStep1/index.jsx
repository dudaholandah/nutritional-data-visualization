import styles from './style.module.scss'
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx/xlsx.mjs';

function Forms1() {

  const [fileDetails, setFileDetails] = useState({
    sheetName: "",
    fileName: "",
    fileData: {}
  });

  const fileRef = useRef();
  const navigate = useNavigate();

  const parseExcelFile = (e) => {

    e.preventDefault();

    try {

      console.log(fileDetails.sheetName);

      var wb = XLSX.read(fileDetails.fileData, { type: 'binary' });
      let sheetNameExists = false;

      for (let i = 0; i < wb.SheetNames.length; i++) {
        if (wb.SheetNames[i] === fileDetails.sheetName) sheetNameExists = true;
      }

      if (!sheetNameExists) {
        alert("O nome da planilha é inválido.");
        return;
      }
      else{
        alert("O nome da planilha foi salvo com sucesso.");
      }

      const ws = wb.Sheets[fileDetails.sheetName];
      const dataParse = XLSX.utils.sheet_to_json(ws);

      setFileDetails(previousState => {
        return { ...previousState, fileData: dataParse }
      });

    } catch (error) {
      alert("Operação inválida.");
    }

    

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



  const nextStep = () => {
    navigate('/step2', { state: fileDetails });
  }

  console.log(fileDetails)

  return (
    <div className={styles.forms}>
      <div className={styles.steps}>
        <p className={styles.stepCurr}>1</p>
        <p className={styles.stepOther}>2</p>
        <p className={styles.stepOther}>3</p>
      </div>
      <div className={styles.frame}>
        <div className={styles.upload}>

          <h2>Faça o upload do arquivo</h2>
          <h4>o arquivo deve ser do tipo 'xlsx'</h4>

          <div className={styles.file}>
            <input
              type="file" id="actual-btn" hidden
              accept='xlsx, xls' multiple={false} ref={fileRef}
              onChange={(e) => handleFile(e)} />
            <label htmlFor="actual-btn">escolha o arquivo</label>
            <span id="file-chosen">
              {
                fileDetails.fileName ?
                  <p>{fileDetails.fileName}</p> :
                  <p>nenhum escolhido</p>
              }
            </span>
          </div>


        </div>

        <form>
          <div className={styles.planilha}>
            <input
              type='text'
              autoFocus={true}
              value={fileDetails.sheetName}
              placeholder="Digite o nome da planilha..."
              onChange={(e) => updateSheetName(e.target.value)}>
            </input>
            <button type="submit" onClick={parseExcelFile}>Send</button>
          </div>
        </form>

        <div className={styles.bottom}>
          <button onClick={nextStep}>proximo</button>
        </div>
      </div>

    </div>

  )
}

export default Forms1;