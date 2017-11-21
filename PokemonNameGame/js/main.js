var pokemonList={"bulbasaur":{
                      "hidden":true,
                      "type":"grass",
                      "name":"Bulbasaur"
                    },
                  "ivysaur":{
                    "hidden":true,
                    "type":"grass",
                    "name":"Ivysaur"
                  },
                  "venusaur":{
                    "hidden":true,
                    "type":"grass",
                    "name":"Venusaur"
                  },
                  "charmander":{
                    "hidden":true,
                    "type":"fire",
                    "name":"Charmander"
                  },
                  "charmeleon":{
                    "hidden":true,
                    "type":"fire",
                    "name":"Charmeleon"
                  },
                  "charizard":{
                    "hidden":true,
                    "type":"fire",
                    "name":"Charizard"
                  },
                  "squirtle":{
                    "hidden":true,
                    "type":"water",
                    "name":"Squirtle"
                  },
                  "wartortle":{
                    "hidden":true,
                    "type":"water",
                    "name":"Wartortle"
                  },
                  "blastoise":{
                    "hidden":true,
                    "type":"water",
                    "name":"Blastoise"
                  },
                  "caterpie":{
                    "hidden":true,
                    "type":"bug",
                    "name":"caterpie"
                  },
                  "metapod":{
                    "hidden":true,
                    "type":"bug",
                    "name":"Metapod"
                  },
                  "butterfree":{
                    "hidden":true,
                    "type":"bug flying",
                    "name":"Butterfree"
                  },
                  "weedle":{
                    "hidden":true,
                    "type":"bug",
                    "name":"Weedle"
                },
                  "kakuna":{
                    "hidden":true,
                    "type":"bug",
                    "name":"Kakuna"
                  },
                  "beedrill":{
                    "hidden":true,
                    "type":"bug flying",
                    "name":"Beedrill"
                  },
                  "pidgey":{
                    "hidden":true,
                    "type":"flying",
                    "name":"Pidgey"
                  },
                  "pidgeotto":{
                    "hidden":true,
                    "type":"flying",
                    "name":"Pidgeotto"
                  },
                  "pidgeot":{"hidden":true},
                  "rattata":{"hidden":true},
                  "raticate":{"hidden":true},
                  "spearow":{"hidden":true},
                  "fearow":{"hidden":true},
                  "ekans":{"hidden":true},
                  "arbok":{"hidden":true},
                  "pikachu":{"hidden":true},
                  "raichu":{"hidden":true},
                  "sandshrew":{"hidden":true},
                  "sandslash":{"hidden":true},
                  "nidoran f":{"hidden":true},
                  "nidorina":{"hidden":true},
                  "nidoqueen":{"hidden":true},
                  "nidoran m":{"hidden":true,
                "type":"poison",
                "name":"Nidoran M"
              },
                  "":{"hidden":true}
                };

function checkInput(){
  //console.log("buttonworks");
  name=document.getElementById('pokemonName').value;
  for(var key in pokemonList){
    if(key==name && pokemonList[key].hidden){
      pokemon=document.getElementById(key);
      pokemon.classList.toggle("hide");
      document.getElementById('pokemonName').value="";
    }
  }

}
function showAll(){
        for(var key in pokemonList){
          if(pokemonList[key].hidden){
            pokemon=document.getElementById(key);
            pokemon.classList.toggle("hide");
          }
        }
}

function addPokemon(){
  row=document.getElementById('testRow');
  for(var key in pokemonList){
  var td=document.createElement("td");
  td.setAttribute('class',pokemonList[key].type);
  td.setAttribute('id',pokemonList[key].name);
  td.innerHTML="Nidoran M";
  row.appendChild(td);
}
}
