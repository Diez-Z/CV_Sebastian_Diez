var vectorglobalnombre=[];
var vectorglobaledades=[];


function ingresarvector()
{    //alert("INGREAR Y MODIFICAR");
console.log("FUNCION INGRESAR");
var vector=[];
var subindice=0;

while(subindice<3)
{
vectorglobalnombre[subindice]=prompt("INGRESE EL NOMBRE " +subindice);
vectorglobaledades[subindice]=prompt("INGRESE LA EDAD " +subindice);
console.log("el vector NOMBRE ES " +vectorglobalnombre);
console.log("el vector EDADES ES " +vectorglobaledades);

subindice++;

}

console.log(vector);
document.getElementById("F1C1").innerHTML=vectorglobalnombre.join("<br>");
document.getElementById("F1C2").innerHTML=vectorglobaledades.join("<br>");     
vectorglobal=vector;
}

function modificar()
{
var subindice=0;
console.log("funcion modificar")
console.log(vectorglobalnombre);
subindice=prompt("INGRESE EL SUB INDICE A MODIFICAR del vector nombres ");
vectorglobalnombre[subindice]=prompt("INGRESE EL DATO " +subindice);

console.log(vectorglobaledades);
subindice=prompt("INGRESE EL SUB INDICE A MODIFICAR del vector edades ");
vectorglobaledades[subindice]=prompt("INGRESE EL DATO " +subindice);

console.log(vectorglobal);
document.getElementById("F1C1").innerHTML=vectorglobalnombre.join("<br>");
document.getElementById("F1C2").innerHTML=vectorglobaledades.join("<br>");    
}


function ver(n)
{
    document.getElementById("subseccion"+n).style.display="block"
}

function ocultar(n)
{
    document.getElementById("subseccion"+n).style.display="none"
}
