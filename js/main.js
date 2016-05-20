var puntos=0;
var k=0;

 $(function(){
  $("#sedes").on("change",cargarImagen)
  $(".comprobar").on("click",comprobar)
  cargarPuntos()

 })

function cargarImagen(){
var sede=$("#sedes").val()
var arraySede;
  switch(sede){
    case "mexico":
          arraySede=mexico        
          break;
    case "arequipa":
          arraySede=arequipa      
          break;
    default: 
          alert("Selecciona una sede")
           }
  var i=Math.floor((Math.random() * arraySede.length) + 0)

  $("#coder").attr("src","fotos/"+sede+"/"+arraySede[i].image)
  $("#coder").attr("alt",arraySede[i].name)
}

function comprobar(){
  var nombre=$(".nombre").val()
  var name=$("#coder").attr("alt")
  if(nombre==name){ 
    $(".mensaje").html("Conoces bien a "+name+"!"+" Sumas +5 a tu puntaje.")
    puntos=puntos+5
    cargarPuntos()
    cargarImagen()
    clean()
    }
  else{
    $(".mensaje").html("No es correcto. Puedes intentarlo de nuevo")
    k++
    clean()
      if(k==5){
      puntos=puntos-1
      k=0
      $(".mensaje").html("Excediste los intentos permitidos. Tienes un punto menos")
      cargarPuntos()
      cargarImagen()
      }
  }
}

function cargarPuntos(){
  $("#puntos").html(puntos)
}

function clean(){
  $(".nombre").val("")
  $(".nombre").focus()
}

/*function main(arraySede,sede){
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
}*/

/*function comprobar(){
  var sedes=$("#sedes").val()
  switch(sedes){
    case "mexico":
          main(mexico,sedes)         
          break;
    default: 
          main(arequipa,sedes) 
           }
}

//$("#coder").attr("src","fotos/Ana Maria Barbosa.JPG")

  var puntaje=0;
  var foto=$("#coder").attr("src")
  var img;

  $(".comprobar").on("click",comprobar)
  $("#puntos").html(puntaje)*/


/*if(k==5){
      puntos=puntos-1
      k=0
      cargarImagen()
      $(".mensaje").html("Superaste los 5 intentos. Su nombre era "+name+". 
        Tienes 1 punto menos")
      cargarPuntos()
    }
*/