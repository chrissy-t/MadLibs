/*The game has six types of word classes defined including those for 'noun', 'adjective', 'verb', 
'adverb', 'plural-noun' and 'body-part'.
Part 1: Create arrays of 10 words each for the six classes outlined. 
Use a DOM query to return a list of elements based on the class names provided.
 For each of the NodeLists returned, loop through the list and replace the text content
  with the matching type from the arrays you created*/

   /*PART TWO:Write a function which allows the substitution of words based on a random selection from an array.
    The function should be called 'getWord' and its parameter should be 'type'. 
    Based on the type passed (that matches one of the six word classes), a random word should be returned
     from the appropriate array of words. Use this function to update the NodeLists looped through in Part 1*/

  var noun = document.getElementsByClassName('noun');
  var nounList =['devil', 'thief', 'eye-patch', 'sea', 'booty', 'seadog','knife', 'beer', 'mermaid', 'deck'];
  for (var b =0; b < noun.length; b++){
    var random = Math.floor(Math.random() * nounList.length);
    noun[b].textContent = nounList[random];
  }
  
var adjective = document.getElementsByClassName('adjective');
var adjectiveList = ['mean','dusty','old', 'foolish','pretty', 'scrawny','exciting', 'blood', 'bloodthirsty', 'black'];
for (var b = 0; b < adjective.length; b++) {
var random = Math.floor(Math.random() * adjectiveList.length);
  adjective[b].textContent = adjectiveList[random];
}

var verb= document.getElementsByClassName('verb');
var verbList = ['flee','sink','spit', 'mop', 'cook', 'steal', 'capture', 'whistle', 'drink', 'smell'];
for (var b = 0; b < verb.length; b++) {
var random = Math.floor(Math.random() * verbList.length);
  verb[b].textContent = verbList[random];
 }

var adverb = document.getElementsByClassName('adverb');
var adverbList = ['viciously', 'bravely','wildly','badly','wonderfully','joyfully', 'greedily', 'wetly', 'fast', 'foolishly'];
for (var b = 0; b < adverb.length; b++) {
var random = Math.floor(Math.random() * adverbList.length);
  adverb[b].textContent = adverbList[random];
 }

var pluralNouns = document.getElementsByClassName('plural-noun');
var pluralNounsList = ['devils', 'spoons', 'apples', 'ships','knives', 'thieves', 'mermaids', 'socks', 'seas', 'beers'];
for (var b = 0; b < pluralNouns.length; b++) {
var random = Math.floor(Math.random() * pluralNounsList.length);
  pluralNouns[b].textContent = pluralNounsList[random];
 }

var bodyParts = document.getElementsByClassName('body-part');
var bodyPartsList = ['head', 'knee','elbow','tongue', 'nose','lip', 'bottom', 'neck', 'finger', 'eyeball'];
for (var b = 0; b < bodyParts.length; b++) {
var random = Math.floor(Math.random() * bodyPartsList.length);
  bodyParts[b].textContent = bodyPartsList[random];
 }

 var arrays = ['noun', 'adjective', 'verb', 'adverb', 'pluralNouns', 'bodyParts'];


var getWord = function(type) {
  random = Math.floor(Math.random() * noun.length);
  if (type == "noun") {
    return nounList[random];
  } else if (type == "adjective") {
    return adjectiveList[random];
  } else if (type == "verb") {
    return verbList[random];
  } else if (type == "adverb") {
    return adverbList[random];
  } else if (type == "pluralnoun") {
    return pluralNounsList[random];
  } else if (type == "bodyparts") {
    return bodyPartsList[random];
  }
}