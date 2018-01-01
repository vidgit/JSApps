var arr=[1,"1",true,NaN];
arr[10]=0;
console.log(arr);
for (var i in arr) {
  console.log(i+"\n");
}

function truthValue(){
  for(var i=0;i<arr.length;i++){
    if(arr[i])
      console.log(true);
    else {
      console.log(false);
    }
  }
}

function forIn(){
  console.log('For In');
  for(var v in arr){
    console.log(v);
  }
}

function forOf(){
  console.log('For of');
  for (var v of arr) {
    console.log(v);
  }
}

//MAP

var srr=['one','two','three','four','five'];
var len=srr.map(function(s){
  return s.length;
},0);
console.log("Length:",len);
len=srr.map(s=>s.length);
console.log("Length:",len);


//FILTER

arr=[1,2,3,4,5];
var greaterThan3=arr.filter(function(i){
  return i>3;
},0);
console.log("Is greater than 3:",greaterThan3);
greaterThan3=arr.filter(i=>i>3);
console.log("Is greater than 3:",greaterThan3);


var evenOdd = arr.map(i=>i%2==0?i*2:i*3);


console.log('Even Odd:',evenOdd);
