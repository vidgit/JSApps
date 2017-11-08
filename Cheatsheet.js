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
var xhr= new XMLHttpRequest();
xhr.open("GET","https://www.somesite.com",false);
xhr.send();

console.log(xhr.status);
