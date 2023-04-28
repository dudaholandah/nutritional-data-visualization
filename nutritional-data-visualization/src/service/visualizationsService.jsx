const VisualizationsService = {

  unpack: function(rows, key) {
    return rows.map(function(row) { return row[key]; });
  },
  
  dimensions: function(fileData, columns)  {
    let dim = [];
  
    for(let key of columns.atributo){
      dim.push({label: key, values:VisualizationsService.unpack(fileData, key)});
    }
  
    return dim;
  },

  // description: function(fileData, columns){
  //   let desc = [];

  //   let i = 0;
  //   for(let key of columns.descricao){

  //     if (i == 0) desc.push(VisualizationsService.unpack(fileData, key));
  //     else de
  //   }
  
  //   return desc;
  // },
  
  colors: function(fileData, columns) {
    const classif = new Set(VisualizationsService.unpack(fileData, columns.label));
    let colors = []
    for (let i=0; i < VisualizationsService.unpack(fileData, columns.label).length; i++) {
      let j = 0
      classif.forEach( value => { 
        if (VisualizationsService.unpack(fileData, columns.label)[i] === value)
          colors.push(0 + j*(1/classif.size));
        j++;
      })
    }
    return colors;
  },

  axis: function(){
    return {
      showline:false,
      zeroline:false,
      gridcolor:'#ffff',
      ticklen:2,
      tickfont:{size:10},
      titlefont:{size:12}
    }
  }

}

export default VisualizationsService;