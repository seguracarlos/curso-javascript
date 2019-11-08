'use strict'

// fetch (ajax), peticiones asincronas a un servidor y peticiones a servicios api rest

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
//var usuarios= [];

getUsuarios()
.then(data => data.json())
.then(users => {
 	//usuarios = users.data;
 	listadoUsuarios(users.data);
 	return getJanet();
})
.then(data => data.json())
.then(user=>{
	mostrarJanet(user.data);
	return getInfo();
})
.then(data =>{
console.log(data);
})
//para atrapar el error en una promesa lo hacemos con catch
.catch(error =>{
alert("error en la peticion");
});

function getUsuarios(){
 return fetch('https://reqres.in/api/users');
}

function getJanet(){
 return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
	var profesor={
		nombre: "carlos",
		apellidos:"segura",
		url:"carlos.com"
	};
	return new Promise((resolve,reject) => {
		var profesor_string = JSON.stringify(profesor);
		if(typeof profesor_string != 'string') return reject("error");

		return resolve(profesor_string);
	});
	
	
}
function listadoUsuarios(usuarios){
	usuarios.map((user, i) => {
 	   let nombre = document.createElement('h3');
 	   nombre.innerHTML = i+". " +user.first_name+" "+user.last_name; 	

 	   div_usuarios.append(nombre);
 	   document.querySelector(".loading").style.display='none';

 	});
}

function mostrarJanet(user){
	
 	   let nombre = document.createElement('h4');
 	   let avatar = document.createElement('img');
 	   nombre.innerHTML =user.first_name+" "+user.last_name; 

 	   avatar.src = user.avatar;
 	   avatar.width = '100';
 	   avatar.height = '100';

 	   div_janet.appendChild(nombre);
 	   div_janet.appendChild(avatar);

 	   document.querySelector("#janet .loading").style.display='none';

 
}