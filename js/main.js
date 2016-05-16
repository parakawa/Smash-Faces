
//$("#coder").attr("src","fotos/Ana Maria Barbosa.JPG")

  var puntaje=0;
  var tamAre=arequipa.length
  var foto=$("#coder").attr("src")
  var img;
 $(function(){
  
  $(".comprobar").on("click",comprobar)
  $("#puntos").html(puntaje)
  
 })

function comprobar(){
  
  
  var sedes=$("#sedes").val()
  
  
  
  switch(sedes){
    case "mexico":
          main(mexico,sedes) 
          
          break;
    default: 
          main(arequipa,sedes) 
           }


}

function cargarImagen(){
  
}

function clean(){
  $(".nombre").val("")
  $(".nombre").focus()
}

function main(arraySede,sede){
      var nombre=$(".nombre").val()
      var intento=0 ;
       for(i=0; i<arraySede.length;i++){ 
              img="fotos/"+sede+"/"+arraySede[i].image
              if(foto==img)
                if(nombre==arraySede[i].name){ 
                    $(".mensaje").text("Hey, conoces bien a "+arraySede[i].name+sede) 
                    puntaje=puntaje+5
                    $("#puntos").html(puntaje)
                    clean()
                    $("#coder").attr("src","fotos/"+sede+"/"+arraySede[Math.floor((Math.random() * arraySede.length) + 0)].image)
                    }   
                else{
                    if(intento<=5){ 
                    
                    $(".mensaje").text("Tienes otro intento"+" Un secreto: su nombre es "+arraySede[i].name)
                    intento=intento+1
                    }
                    else{
                      puntaje=puntaje-1
                      $(".mensaje").text("Lo sentimos, ya gastaste todos los intentos posibles")
                      $("#puntos").html(puntaje)
                      $("#coder").attr("src","fotos/"+sede+"/"+arraySede[Math.floor((Math.random() * arraySede.length) + 0)].image)
                  }

                }
              
             }
}



