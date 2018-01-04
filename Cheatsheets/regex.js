var re=/^([aeiou])(.*\1)$/;
var words=["aeiou","aeioua","Mr.A","Dr.X","Mrs.l","kr.a","pms.l","Dr.Er.","1","123.4",'102', '1948948', '1', '3', '4', '5'];
console.log("Vowel Test");
for(word of words){
  console.log(word,re.test(word),word.match(re));
}

re=/^((Mr\.)|(Dr\.)|(Mrs\.)|(Ms\.)|(Er\.))[a-zA-z]+$/g;
console.log("Mr etc Test");
for(word of words){
  console.log(word,re.test(word),word.match(re));
}

re=/\d+/g;
console.log("Numbers");
for(word of words){
  console.log(word,re.test(word),word.match(re));
}
