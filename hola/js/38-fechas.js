

//obtener la fecha
var fecha = new Date();

var year = fecha.getFullYear();
var  mes = fecha.getMonth();
var date = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var textoHora=  ` 
el años es: ${year}
el mes es: ${mes}
el día es: ${date}
la hora es: ${hora}
los minutos son: ${minutos}
los segundos son: ${segundos}

`;

console.log(textoHora);