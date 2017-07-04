function firstLetter(inputString) {
    if (inputString === undefined){
        return undefined;
    }
    else {
        return inputString[0];
    }
}




    

function lastLetter(inputString) {
    if (inputString === undefined){
        return undefined;
    }
    else {
        return inputString[inputString.length-1]
    }
}
    
function letterAtPosition(inputString, position) {
    if (inputString === undefined){
        return undefined;
    }
    else {
        return inputString[position]
    }

}

function addTwoNumbers(num1, num2) {
    if (isNaN(num1,num2)){
        return undefined;
    }
    
    else{
        return num1 + num2;
    }

}

function multiplyTwoNumbers(num1, num2) {
    if (isNaN(num1,num2)){
        return undefined;
    }
    else{
        return num1 * num2
    }
}


function calculator(operation, num1, num2) {
    if (operation === "add"){
        return num1 + num2
    }
    else if (operation === "sub"){
        return num1 - num2
    } 
    else if (operation === "mult"){
        return num1 * num2
    }
    else if (operation === "div"){
        return num1 / num2
    }
    
    else {
        return undefined;
    }
}




function repeatString(inputString, numRepetitions) {
    if (inputString <= 0){
        return "";
    }
   
    
    else if (typeof(inputString) !== "string" || typeof(numRepetitions) !== "number"){
        return undefined;
    }
    
    else {
        var temp = "";
        for(var i=1; i<=numRepetitions; i++){
            temp += inputString;
        }
        console.log(temp);
        return temp;
    }
}



function reverseString(inputString) {
    var temp = "";
    for(var i=inputString.length-1; i>=0; i--){
        temp += inputString[i]
    }
    return temp;
}




function longestWord(inputString) {
    var longestWord = "";
    var words = inputString.split(' ')
    
    for(var i=0; i < words.length; i++){
        //compare words[i] to longestWord
        
        if(words[i].length > longestWord.length){
            longestWord = words[i];
            //console.log(longestWord)
        }
        else if( words[i].length === longestWord.length){
            longestWord = longestWord;
        }
        
        else {
            //do nothing
        }
    }
    return longestWord;
    

}

function capitalize(inputString) {
    if (inputString === ""){
        return ""
    }
    else {
    var string = inputString.toLowerCase().split(' ');
    
    for(var i=0; i< string.length; i++){
        string[i] = string[i].split('')
        string[i][0] = string[i][0].toUpperCase()
        string[i] = string [i].join('')
    }
    
    return string.join(' ');
    }
    
}




function sumOfNumbers(arrayOfNumbers) {
    
}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};