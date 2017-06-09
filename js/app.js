$.getJSON( "http://pokeapi.co/api/v2/pokemon/", function(response) {
  var pokemones =response.results;
  crearPokemones(pokemones);

});



// var xhr = new XMLHttpRequest();
//
// //tiene tres parámetros por defecto pero con que le pongamos dos es más que suficiente
// xhr.onreadystatechange = function (e) {
//   if(this.readyState ===4){
//     if(this.status===200){
//
//     var reponse = (JSON.parse(this.response));
//     var pokemones = response.results;
//       // var pokemones = JSON.parse(this.response);
// 			 crearPokemones(pokemones);
//     }
//   }
// };
//
// xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");
// xhr.send();

function crearPokemones(pokemones) {
	var ul = document.getElementById("pokemones");

	pokemones.forEach(function (pokemon) {
		var li = document.createElement("li");
		li.textContent = pokemon.nombre;

		ul.appendChild(li);
	});
}
