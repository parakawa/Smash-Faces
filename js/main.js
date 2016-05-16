
//$("#coder").attr("src","fotos/Ana Maria Barbosa.JPG")

  var puntaje=0;
  var tamAre=arequipa.length
 $(function(){
  
  $(".comprobar").on("click",comprobar)
  $("#puntos").html(puntaje)
  
 })

function comprobar(){
  var foto=$("#coder").attr("src")
  var nombre=$(".nombre").val()
  var sedes=$("#sedes").val()
  
  var img;
  var intento=6 ;
  

  for(i=0; i<tamAre;i++){ 
    img="fotos/arequipa/"+arequipa[i].image
    if(foto==img)
      if(nombre==arequipa[i].name){ 
          $(".mensaje").text("Hey, conoces bien a "+arequipa[i].name+sedes) 
          puntaje=puntaje+5
          $("#puntos").html(puntaje)
          clean()
          cargarImagen()
          }   
      else{
          if(intento<=5){ 
          
          $(".mensaje").text("Tienes otro intento"+" Un secreto: su nombre es "+arequipa[i].name)
          intento=intento+1
          }
          else{
            puntaje=puntaje-1
            $(".mensaje").text("Lo sentimos, ya gastaste todos los intentos posibles")
            $("#puntos").html(puntaje)
            cargarImagen()
        }

      }
    }
}

function cargarImagen(){
  $("#coder").attr("src","fotos/arequipa/"+arequipa[Math.floor((Math.random() * tamAre) + 0)].image)
}

function clean(){
  $(".nombre").val("")
  $(".nombre").focus()
}



