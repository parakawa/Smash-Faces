var imagenes = [
  "Alma Patricia Jimenez.JPG",  "Ana Maria Barbosa.JPG",
  "Analy Miranda.JPG",          "Areli Rodriguez.JPG",
  "Beatriz Quesadas.JPG",       "Claudia Hernández.JPG",
  "Daniela Belem García.JPG",   "Elisa Guadalupe Martínez.JPG",
  "Evelyn Vázquez.JPG",         "Gabriela Peñaloza.JPG",
  "Johana Alexa Vargas.JPG",    "Joyce Zeltzin Hernández.JPG",
  "Juana Ofelia García.JPG",    "Karen A. Sha ron De Diego.JPG",
  "Karen Cruz Heredia.JPG",     "Karen Quiroz.JPG",
  "Karla Monica Llerenas.JPG",  "Karla Vargas.JPG",
  "Leslie Anigail Vazquez.JPG", "Lilian Mishel Martínez.JPG",
  "Milca Sarai Del Angel.JPG",  "Naibit Leonel.JPG",
  "Nayeli Carbajal.JPG",        "Nelly Montserrat Saavedra.JPG",
  "Reyna Hernández.JPG",        "Rubí Adriana Santiago.JPG",
  "Ruth López.JPG",             "Ruth Zacnicte Vega.JPG",
  "Sandra Bollo.JPG",           "Sandra Díaz.JPG",
  "Vianey Tavatha Moreno.JPG",  "Zazil Aurora Martinez.JPG"
];

var nombres = [ "Alma", "Ana", "Analy", "Areli", "Beatriz", "Claudia", 
"Daniela", "Elisa", "Evelyn", "Gabriela", "Grissel", "Guadalupe", "Johana", 
"Joyce", "Juana", "Karen", "Karen", "Karen", "Karla", "Karla", "Leslie", 
"Lilian", "Milca", "Naibit", "Nayeli", "Nelly", "Reyna", "Rubi", "Ruth",
 "Ruth", "Sandra", "Sandra", "Vianey", "Zazil"];

//$("#coder").attr("src","fotos/Ana Maria Barbosa.JPG")


 $(function(){

  $(".comprobar").on("click",comprobar)
  
 })

function comprobar(){
  var foto=$("#coder").attr("src")
  var nombre=$(".nombre").val()
 
  var tamImg=imagenes.length
  var tamNom=nombres.length
  var imagen;

  var puntaje=

  for(i=0; i<tamImg;i++)
    imagen="fotos/"+imagenes[i]
    if(foto==imagen)
      if(nombre==nombres[i])
        {
          $(".mensaje").text("Hey, conoces bien a la chica!")
        }
      else{
        alert(tamImg+""+tamNom)
        $(".mensaje").text("Tienes otro intento"+" Un secreto: su nombre es "+nombres[i])
      }
}


