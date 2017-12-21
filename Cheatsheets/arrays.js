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
