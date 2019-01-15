
//opens a prompt to input a sentence
var sentence = prompt("enter a sentence");
//splits the sentence into an array
var sentenceSplit = sentence.split("");
//makes the first letter of the sentence into a variable
var firstLetters = sentenceSplit[0];
//makes the last letter of the sentence into a variable
var lastLetters = sentenceSplit[sentenceSplit.length -1];
//removes the first letter of the sentence
var sentenceBeginning = sentence.slice(0, -1);
//removes the last letter of the sentence
var sentenceEnd =  sentenceBeginning.slice(1);
var halfSentence = Math.floor(sentenceSplit.length / 2);
var halfLetter = sentenceSplit[halfSentence];
//capitalizes the first and second letters and adds them back to the sentence as well as the string "el"
var result = halfLetter + firstLetters.toUpperCase() + sentenceEnd + lastLetters.toUpperCase() + "El";
//splits the former sentence
var splitResult = result.split("");
//reverse the split result
var reverseResult = splitResult.reverse();
//rejoins the reversed sentence array
var finalResult = reverseResult.join("");
//delivers the result
alert(finalResult);
