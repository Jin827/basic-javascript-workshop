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
    var total = 0;
    for(var i=0; i<arrayOfNumbers.length; i++){
        
        if (typeof arrayOfNumbers[i] !== 'number'){
            total = undefined;
        }
        
        else if (arrayOfNumbers.length === 0) {
            total = undefined;
        }
        
        else {
            
            total += arrayOfNumbers[i];
            
        } 
        
    }//end of for loop
    return total
}

function uniqueElements(array1, array2) {
    if (typeof (array1) !== "object" && typeof (array2) !== "object"){
        return undefined;
    }
    //find what matches, then see where the match is in the array, replace the match with a string, do this for both arrays, concat arrays whose matches are replaced with strings, then remove all strings
    else {
        var uniqueArray = [ ];
        for(var i=0; i<array1.length; i++){
            for(var j=0; j<array2.length; i++){
                if (array1[i] !== array2[j]){
                    uniqueArray.push();
                }
            }
        }
            
        
    }
    
}

function isPalindrome(inputString) {
    //lookup RegExp /\W/ on W3, metacharacter
    var string = inputString.split('').join('')
    var reverseWord = inputString.split('').reverse().join('')
    if (string === reverseWord){
        return true;
    }
    else {
        return false;
    }
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