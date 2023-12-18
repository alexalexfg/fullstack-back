$("#tamano").on('change', function() {

    alert(this.value);
    $.ajax({
        type: "POST",
        url: 'http://localhost:5000/checksize',
        success: function(respuesta){
            var valorSeleccionado = $(this).children(":selected").text();
            $("#resultado_tamano").val(valorSeleccionado);
            $("#resultado_tamano").change;
        }
      });
   
    
    
    
    });