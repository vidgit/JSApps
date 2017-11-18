var pokemonList={"bulbasaur":{"hidden":true},
                  "ivysaur":{"hidden":true},
                  "venusaur":{"hidden":true},
                  "charmander":{"hidden":true},
                  "charmeleon":{"hidden":true},
                  "charizard":{"hidden":true},
                  "squirtle":{"hidden":true},
                  "wartortle":{"hidden":true},
                  "blastoise":{"hidden":true},
                  "caterpie":{"hidden":true},
                  "metapod":{"hidden":true},
                  "butterfree":{"hidden":true},
                  "weedle":{"hidden":true},
                  "kakuna":{"hidden":true},
                  "beedrill":{"hidden":true},
                  "pidgey":{"hidden":true},
                  "pidgeotto":{"hidden":true},
                  "pidgeot":{"hidden":true},
                  "rattata":{"hidden":true},
                  "raticate":{"hidden":true},
                  "":{"hidden":true},
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
