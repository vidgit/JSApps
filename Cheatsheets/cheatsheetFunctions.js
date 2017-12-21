var kebabToSnake= function(){
  var mystring=document.getElementById('kts').value;
  console.log(mystring.replace(/-/g,"_"));
};


var x = setInterval(function(){
  console.log("No Button used.");
},2000);

var touched = function(){
  console.log("Touched")
  clearInterval(x);
};
