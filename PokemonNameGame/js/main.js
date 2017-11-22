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
                  "nidorino":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Nidorino"
                  },
                  "nidoking":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Nidoking"
                  },
                  "clefairy":{
                    "hidden":true,
                    "type":"normal",
                    "name":"Clefairy"
                  },
                  "clefable":{
                    "hidden":true,
                    "type":"normal",
                    "name":"Clefable"
                  },
                  "vulpix":{
                    "hidden":true,
                    "type":"fire",
                    "name":"Vulpix"
                  },
                  "ninetails":{
                    "hidden":true,
                    "type":"fire",
                    "name":"Ninetails"
                  },
                  "jigglypuff":{
                    "hidden":true,
                    "type":"normal",
                    "name":"Jiggypuff"
                  },
                  "wigglytuff":{
                    "hidden":true,
                    "type":"normal",
                    "name":"Wigglytuff"
                  },
                  "zubat":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Zubat"
                  },
                  "golbat":{
                    "hidden":true,
                    "type":"poison",
                    "name":"Golbat"
                  },
                  "oddish":{
                    "hidden":true,
                    "type":"grass",
                    "name":"Oddish"
                  },
                  "gloom":{
                    "hidden":true,
                    "type":"grass",
                    "name":"Gloom"
                  },
                  "vileplume":{
                    "hidden":true,
                    "type":"grass",
                    "name":"Vileplume"
                  }

                  /**"":{
                    "hidden":true,
                    "type":"",
                    "name":""
                  }
                  */
                };

var correctNo=0;
var unknownNo=Object.keys(pokemonList).length;
function checkInput(){
  //console.log("buttonworks");
  name=document.getElementById('pokemonName').value;
  for(var key in pokemonList){
    if(key==name && pokemonList[key].hidden){
      pokemonList[key].hidden=false;
      pokemon=document.getElementById(key);
      pokemon.classList.toggle("hide");
      document.getElementById('pokemonName').value="";
      correctNo++;
      unknownNo--;
      showResult();
    }
  }

}
function showAll(){
        for(var key in pokemonList){
          if(pokemonList[key].hidden){
            pokemon=document.getElementById(key);
            pokemonList[key].hidden=false;
            pokemon.classList.toggle("hide");
            pokemon.classList.add("missed");
          }
          else{

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

function startClock(){
  var seconds=1000000;
  var updateTime=setInterval(function(){
    //console.log(seconds);
  document.getElementById('clock').innerHTML=seconds+" seconds left";
  seconds--;
  if(seconds==0){
    document.getElementById('clock').innerHTML="TIME UP!";
    showResult();
  clearInterval(updateTime);
}
},1000);
}

function showResult(){
  var results=document.getElementById("results");
  results.innerHTML="Found: " +correctNo+"\n Unknown: "+unknownNo;
}
