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
                    "name":"Caterpie"
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
                  "pidgeot":{
                    "hidden":true,
                    "type":"flying",
                    "name":"Pidgeot"
                  },
                  "rattata":{
                    "hidden":true,
                    "type":"normal",
                    "name":"Rattata"
                  },
                  "raticate":{
                    "hidden":true,
                    "type":"normal",
                    "name":"Raticate"
                  },
                  "spearow":{
                    "hidden":true,
                    "type":"flying",
                    "name":"Spearow"
                  },
                  "fearow":{
                    "hidden":true,
                    "type":"flying",
                    "name":"Fearow"
                  },
                  "ekans":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Ekans"
                  },
                  "arbok":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Arbok"
                  },
                  "pikachu":{
                    "hidden":true,
                    "type":"electric",
                    "name":"Pikachu"
                  },
                  "raichu":{
                    "hidden":true,
                    "type":"electric",
                    "name":"Raichu"
                  },
                  "sandshrew":{
                    "hidden":true,
                    "type":"ground",
                    "name":"Sandshrew"
                  },
                  "sandslash":{
                    "hidden":true,
                    "type":"ground",
                    "name":"Sandslash"
                  },
                  "nidoran f":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Nidoran F"
                  },
                  "nidorina":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Nidorina"
                  },
                  "nidoqueen":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Nidoqueen"
                  },
                  "nidoran m":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Nidoran M"
                  },
                  /**"":{
                    "hidden":true,
                    "type":"",
                    "name":""
                  }
                  */
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
  var index=0;
  for(var key in pokemonList){
    index=index%16;
    row=document.getElementById('row'+index);
    var td=document.createElement("td");
    td.setAttribute('class',"hide "+pokemonList[key].type);
    td.setAttribute('id',key);
    td.innerHTML=pokemonList[key].name;
    row.appendChild(td);
    index++;
  }
}
