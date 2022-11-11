function ver(n)
{
    document.getElementById("subseccion"+n).style.display="block"
}

function ocultar(n)
{
    document.getElementById("subseccion"+n).style.display="none"
}

function calculovelocidad()
{
    console.log("fumncion velocidad");

    var distancia=parseFloat(document.getElementById("km").value);
    var tiempo=parseFloat(document.getElementById("hr").value);
    var velocidad=distancia/tiempo;

    alert ("la velocidad a la que usted recorrio en km/h es" +velocidad)
}

function nummayor(){

var num1=parseFloat(document.getElementById("f1").value);
var num2=parseFloat(document.getElementById("f2").value);

if(num1>num2){
    alert("el numero 1 es el mayor=" +num1)
}

else{
    alert("el numero 2 es el mayor=" +num2)
}

}

function año(){
    var año1=parseFloat(document.getElementById("edad").value);
    var edad=2022-año1;

    alert("su edad es=" +edad)
}

