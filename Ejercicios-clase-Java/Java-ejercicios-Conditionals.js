const edadEspectador = prompt("Escriba su edad usando numeros: ")
if(edadEspectador <= 5)
{console.log("Por tener hasta 5 años no tienes que pagar");}

else if(edadEspectador > 5 && edadEspectador < 15)
{console.log("Tu tienes un 20% de descuento");}

else if(edadEspectador >= 15 && edadEspectador >= 60)
{console.log("Tu pagas full price");}

else if(edadEspectador > 60)
{console.log("Buena noticia! Tu no tienes que pagar");}