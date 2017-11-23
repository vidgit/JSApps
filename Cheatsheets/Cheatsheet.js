//Object Syntax
var obj={
  property1:"1",
  property2:"2",
  property3:"3",
  function1: function(){}
};

//Constructor Syntax
function Function(p1,p2,p3){
  this.property1=p1;
  this.property2=p2;
  this.property3=p3;
}
//HTTP request Syntax
function httprequest(){
var xhr= new XMLHttpRequest();
xhr.open("GET","https://www.somesite.com",false);
xhr.send();
}

console.log(xhr.status);

//Basic JS
function basicJS(){
  var anInt="12";
  var aFloat="12.5";

  console.log(anInt+aFloat);
  console.log(parseInt(anInt)+parseInt(aFloat));
  console.log(parseFloat(anInt)+parseFloat(aFloat));
  console.log(parseInt(anInt)+parseFloat(aFloat));
}
