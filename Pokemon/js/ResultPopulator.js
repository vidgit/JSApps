var pokemon={
  "1":{
    "name":"Bulbasaur",
    "id":"001",
    "type1":"Grass",
    "type2":"Poison",
    "img":"img/001.jpg",
    "about":"Bulbasaur (フシギダネ Fushigidane) is a Grass/Poison-type Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16. It is one of the three Starter Pokémon that can be chosen in the Kanto region.",
  },
  "2":{
    "name":"Ivysaur",
    "id":"002",
    "type1":"Grass",
    "type2":"Poison",
    "img":"img/002.png",
    "about":""
  },
  "4":{
    "name":"Charmander",
    "id":"004",
    "type1":"Fire",
    "type2":"None",
    "img":"img/004.png",
    "about":""
  },
  "7":{
    "name":"Squirtle",
    "id":"007",
    "type1":"Water",
    "type2":"None",
    "img":"img/007.png",
    "about":""
  }
};
var pT=document.getElementById('pokemon');
var tr1=pT.insertRow(0);
var td1=tr1.insertCell(0);
var td2=tr1.insertCell(1);
var td3=tr1.insertCell(2);
td1.innerHTML="<img src="+pokemon["1"].img+">";
td2.innerHTML="<img src="+pokemon["1"].img+">";
td3.innerHTML="<img src="+pokemon["1"].img+">";
