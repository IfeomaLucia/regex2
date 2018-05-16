var color="#AACCFF"
function hexdem(color){
    var pattern1= new RegExp('[#][a-fA-F0-9]{3,8}', 'g');//matches for HTML hexadecimal colors
var newstring2=pattern1.test(color)//check if the pattern exist 
console.log(newstring2)//return true if it exist and flase if it don't
}
hexdem(color)


let text = `During today's presentation "Valentine Oragbakosi" presented first followed by
 "Nwosu Ifeoma Lucia" and then "Ibe Agwu" after which "Chinonso Williams Junior", "Ndife Uchenna",
  "Ehiogu Chika Josephine" and finally "Chidera Jennifer".
 "Ebuka " will be presenting tomorrow.`
function names(text){
    var pattern2= /["][a-zA-Z.]+\s?\w+\s?\w*["]/gi//check for the name match between the double quote
 var newstring3=text.match(pattern2).toString();//serch for the pattern and convert the array to a string
 var newstring3=newstring3.replace("\"","")//replaces double quotes with an empty string
 console.log([newstring3])//convert to an array and print out.
}
names(text)
 
var genesys="http://genesystechhub.com"
function url(genesys){
   var pattern3= new RegExp('(^(https?|ftps?)?://(www)?([a-zA-Z1-9-_.*]+\.[A-Za-z]+))', 'gi')//searches for the url pattern
var newstr =genesys.replace(pattern3, "visit <a href='$1'>$4</a>")//replaces the url with a href link
console.log(newstr)//outputs the link
}
url(genesys)

