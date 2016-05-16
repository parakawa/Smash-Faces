
//$("#coder").attr("src","fotos/Ana Maria Barbosa.JPG")

  var puntaje=0;
 $(function(){
  
  $(".comprobar").on("click",comprobar)
  $("#puntos").html(puntaje)
  
 })

function comprobar(){
  var foto=$("#coder").attr("src")
  var nombre=$(".nombre").val()
 
  var tamAre=arequipa.length
  var img;
  var intento=6 ;
  

  for(i=0; i<tamAre;i++){ 
    img="fotos/arequipa/"+arequipa[i].image
    if(foto==img)
      if(nombre==arequipa[i].name){ 
          $(".mensaje").text("Hey, conoces bien a la chica!") 
          puntaje=puntaje+5
          $("#puntos").html(puntaje)
          $("#coder").attr("src","fotos/arequipa/Ana Maria Barbosa.JPG")
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
        }

      }
    }
}




