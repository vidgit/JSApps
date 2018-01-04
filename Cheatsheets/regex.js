var re=/^[aeiou](.*\1)$/;
var words=["aeiou","aeioua"];
for(word in words){
  console.log(re.test(word));
  console.log(word.match(re));
}
