var rIndex,
tabla = document.getElementById("tabla");
function agregarFila(){//agrega la fila a la tabla
    if(!validar()){//revisa que el valor de la funcion validar sea falso(ningun valor este vacio)
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var genero = document.getElementById("gen").value;
    var fecha = document.getElementById("fecha").value;
    //trae todos los datos del formulario
    var tabla = document.getElementById("tabla");//crea la fila de la tabla y reemplaza cell# con el valor
    var row = tabla.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = nombre;
    cell2.innerHTML = apellido;
    cell3.innerHTML = dni;
    cell4.innerHTML = genero;
    cell5.innerHTML = fecha;
    cell6.innerHTML = '<button type="button" name="remove" onclick="borrar(this)" class="btn btn-danger btn_remove">Quitar</button>';
}
}
function borrar(r) { // borra la fila
    var i = r.parentNode.parentNode.rowIndex;//recorre la tabla e indica el indice de la fila
    document.getElementById("tabla").deleteRow(i);//borra el indice establecido para que la funcion borre esa fila
  }
  function validar() // valida que ningun campo este vacio
  {
      var vacio = false,
          nombre = document.getElementById("nombre").value,
          apellido = document.getElementById("apellido").value,
          dni = document.getElementById("dni").value;
          genero = document.getElementById("gen").value;
          fecha = document.getElementById("fecha").value;
  
      if(nombre === ""){
          alert("Falta Nombre");
          vacio = true;
      }
      else if(apellido === ""){
          alert("Falta Apellido");
          vacio = true;
      }
      else if(dni === ""){
          alert("Falta DNI");
          vacio = true;
      }
      else if(gen == "Nada"){
        alert("Falta Género");
        vacio = true;
    }
    else if(fecha === ""){
        alert("Falta Fecha de Nacimiento");
        vacio = true;
    }
      return vacio; //retorna un valor booleano
  }

  var tableToExcel = (function() { //funcion para pasar la tabla a un excel
    var uri = 'data:application/vnd.ms-excel;base64,',
      template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64 = function(s) {
        return window.btoa(unescape(encodeURIComponent(s)))
      },
      format = function(s, c) {
        return s.replace(/{(\w+)}/g, function(m, p) {
          return c[p];
        })
      }
    return function(table, name) {
      var size = document.getElementById(table).rows.length;

      if(size > 1){
        if (!table.nodeType) table = document.getElementById(table)
      var ctx = {
        worksheet: name || 'Worksheet',
        table: table.innerHTML
      }
      window.location.href = uri + base64(format(template, ctx))
      }else{
          document.getElementById("alerta").innerHTML ='<div class="alert alert-danger" role="alert">Debe ingresar al menos una persona</div>'  
      }
      
    }
  })()
