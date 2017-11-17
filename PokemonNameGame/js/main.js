var pokemonList={"bulbasaur":{"hidden":true},
                  "ivysaur":{"hidden":true},
                  "venusaur":{"hidden":true},
                  "charmander":{"hidden":true},
                  "charmeleon":{"hidden":true},
                  "charizard":{"hidden":true},
                  "squirtle":{"hidden":true},
                  "wartortle":{"hidden":true},
                  "blastoise":{"hidden":true}
                };

function checkInput(){
  console.log("buttonworks");
  name=document.getElementById('pokemonName').value;
  for(var key in pokemonList){
    if(key==name && pokemonList[key].hidden){
      pokemon=document.getElementById(key);
      pokemon.classList.toggle("hide");
    }
  }
}
