
campoNombre = document.getElementById("nombre");
campoApellido = document.getElementById("apellido");
datosNombre= document.getElementById("nombreDelCliente");
datosApellido=document.getElementById("apellidoDelCliente");


function showAlert(mensaje){
    document.getElementById("alertas").innerHTML = mensaje;
    


    if(datosNombre.value == "" && datosApellido.value == "" ){
        campoNombre.style.color = "red";
        campoApellido.style.color = "red";
    
    }else if (datosApellido.value == ""  && datosNombre.value !== "" ){
        campoNombre.style.color = "black";
        campoApellido.style.color = "red";

    }else if (datosApellido.value != ""  && datosNombre.value == "" ){

        campoNombre.style.color = "red";
        campoApellido.style.color = "black";

    }
      
    

}


document.getElementById("formulario01").addEventListener("submit",
 function(event){

        if(datosNombre.value == "" &&  datosApellido.value == ""){
            showAlert("Los campos nombre y apellidos están vacíos");
            event.preventDefault();
        }else if(datosApellido.value == "" && datosNombre.value != ""){
            showAlert("El campo apellido del cliente está vacío");
            event.preventDefault();
        }else if (datosApellido.value != "" && datosNombre.value == "") {
            showAlert("El campo nombre del cliente está vacío");
            event.preventDefault();
        }
    }
);

