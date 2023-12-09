
      $(function() {
      $('.error').hide();
      $('.errorNombre').hide();
      $('.errorApellido').hide();
      $("#formulario01").submit(function(evento){
         
        var nombre = $("#nombreDelCliente").val().trim();
        var apellido = $("#apellidoDelCliente").val().trim();
        
        if (nombre.length == 0 && apellido.length == 0) {
              $('#nombre').css("color", "red");
              $('#apellido').css("color", "red");
              $('.error').show().css("color", "red");
               evento.preventDefault();
        } else if(nombre.length != 0 && apellido.length == 0){
              $('#apellido').css("color", "red");
              $('#nombre').css("color", "black");
              $('.error').hide();
              $('.errorApellido').show().css("color", "red");
              evento.preventDefault();
        }else if(nombre.length == 0 && apellido.length != 0){
              $('#nombre').css("color", "red");
              $('#apellido').css("color", "black");
              $('.error').hide();
              $('.errorNombre').show().css("color", "red");
              evento.preventDefault();
        } 
        $('#alertas').hide();

      });



    });

    
