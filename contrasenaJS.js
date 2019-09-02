// JavaScript Document


var unidad = 5;
var decena = 6;
var centena = 7;
var mensajeAlerta = '';

function adivinar() {

  var centenaF = document.getElementById('centenaF').value;
  var decenaF = document.getElementById('decenaF').value;
  var unidadF = document.getElementById('unidadF').value;

  if ((centenaF == '') || (decenaF == '') || (unidadF == '')) {
    alert('ningun valor puede estar vacio o no ser numero');
  } else if ((centenaF == decenaF) || (centenaF == unidadF) || (decenaF == unidadF)) {
    alert('ningun valor puede estar repetido');
  } else {
    if ((unidad == unidadF) && (decena == decenaF) && (centena == centenaF)) {

      document.getElementById('alerta').innerHTML = '<p style="color: green; font-size: 40px;">' + centena + decena + unidad + ' contraseña correcta  </p>';

    } else {

      if (centena == centenaF) {
        mensajeAlerta += centenaF + ' en centena es correcto <br>';
      } else {
        mensajeAlerta += centenaF + ' en centena es incorrecto <br>';
      }

      if (decena == decenaF) {
        mensajeAlerta += decenaF + ' en decena es correcto <br>';
      } else {
        mensajeAlerta += decenaF + ' en decena es incorrecto <br>';
      }


      if (unidad == unidadF) {
        mensajeAlerta += unidadF + ' en unidad es correcto <br>';
      } else  {
        mensajeAlerta += unidadF + ' en unidad es incorrecto <br>';
      }
      document.getElementById('alerta').innerHTML = mensajeAlerta;
      mensajeAlerta = '';
    }
  }

}

function borrar(){
		
		document.getElementById('alerta').innerHTML = '';
		
	}
