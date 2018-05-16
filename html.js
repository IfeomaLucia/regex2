var color="#AACCFF"
function hexdem(color){
    var pattern1= new RegExp('[#][a-zA-Z1-9]{6}', 'g');
var newstring2=pattern1.test(color)
console.log(newstring2)
}
hexdem(color)


let text = `During today's presentation "Valentine Oragbakosi" presented first followed by
 "Nwosu Ifeoma Lucia" and then "Ibe Agwu" after which "Chinonso Williams Junior", "Ndife Uchenna",
  "Ehiogu Chika Josephine" and finally "Chidera Jennifer".
 "Ebuka " will be presenting tomorrow.`
function names(text){
    var pattern2= /["][a-zA-Z.]+\s?\w+\s?\w*["]/gi
 var newstring3=text.match(pattern2).toString();
 var newstring3=newstring3.replace("\"","")
 console.log([newstring3])
}
names(text)
 
var genesys="http://genesystechhub.com"
function url(genesys){
    var pattern3= new RegExp('(^(http)?://([a-zA-Z1-9-_.*]+\.[A-Za-z]+))', 'gi')
var newstr =genesys.replace(pattern3, "visit <a href='$1'>$3</a>")
console.log(newstr)
}
url(genesys)

