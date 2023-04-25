// const fileData = {
    
// }

// const fileService = {

//     parseExcelFile: function(e) {

//         e.preventDefault();
        
//         console.log(fileDetails.sheetName);
    
//         var wb = XLSX.read(fileDetails.fileData, {type: 'binary'});
//         let sheetNameExists = false;
    
//         for(let i=0; i<wb.SheetNames.length; i++){
//           if(wb.SheetNames[i] === fileDetails.sheetName) sheetNameExists = true;
//         }
    
//         if(!sheetNameExists){
//           alert("Invalid Sheet Name");
//           return;
//         }
    
//         const ws = wb.Sheets[fileDetails.sheetName];
//         const dataParse = XLSX.utils.sheet_to_json(ws);
    
//         setFileDetails(previousState => {
//           return { ...previousState, fileData: dataParse }
//         });
        
//     },
    
    
//     handleFile: function(e) {
//         const myFile = e.target.files[0];
    
    
//         console.log(myFile.name);
    
//         setFileDetails(previousState => {
//           return { ...previousState, fileName: myFile.name }
//         });
        
//         const reader = new FileReader();
//         reader.readAsBinaryString(myFile);
//         reader.onload = function (e) { 
    
//           setFileDetails(previousState => {
//             return { ...previousState, fileData: e.target.result }
//           });
                         
//         };
    
//     },
    
//     updateSheetName: function(name) {
//         setFileDetails(previousState => {
//             return { ...previousState, sheetName: name }
//         });
//     }
    
      
// };

// export default fileService;