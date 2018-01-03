var re=/^[aeiou](.*\1)$/;
var words=["aeiou","aeioua"];
for(word in words){
re.test(word);
}
