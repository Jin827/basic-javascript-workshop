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
    var capString = "";
    
    for(var i=0; i<string.length; i++){
        
        string[i] = string[i].split('')
        string[i][0] =string[i][0].toUpperCase();
        string[i] = string[i].join('')
    }
    
    capString = string.join(' ')
    
    return capString;
    }
    
}




function sumOfNumbers(arrayOfNumbers) {
    var total = 0;
    for(var i=0; i<arrayOfNumbers.length; i++){
        
        if (typeof arrayOfNumbers[i] !== 'number'){
            return undefined;
        }
        
        else if (arrayOfNumbers.length === 0) {
            return total ;
        }
        
        else {
            
            total += arrayOfNumbers[i];
            
        } 
        
    }
    return total
}



function uniqueElements(array1, array2) {
    var match= [];
    var array3 = [];
    
    if (typeof (array1) !== "object" && typeof (array2) !== "object"){
        return undefined;
    }
    else {
        for(var a=0; a<array1.length; a++){
            for(var b=0; b<array2.length; b++){
                if(array1[a] === array2[b]){
                    match.push(array1[a])
                }
            }
        }
        
        // console.log(match,"match") 
        for(var i=0; i<match.length; i++){
            var index1= array1.indexOf(match[i])
            var index2= array2.indexOf(match[i])
            // console.log(index1,"index1")  // 1,2,2 
            // console.log(index2,"index2")  // 1,2,2
            
            array1.splice(index1,1)
            array2.splice(index2,1)
        }
        
        for(var c=0; c<array1.length; c++){
            array3.push(array1[c])
        }
        for(var d=0; d<array1.length; d++){
            array3.push(array2[d])
        }
        
        console.log(array1, array2,"array 1&2")
        // console.log(array3,"array3")
    }
    
    var sorted=array3.sort(function(a,b){return a-b})
    console.log(sorted,"using variable,sorted")         // [ 1, 2, 3, 3, 5, 4 ] 
    return sorted
}
uniqueElements([1,3,5,6,8],[2,3,4,6,8]);




function isPalindrome(inputString) {
    //lookup RegExp /\W/ on W3, metacharacter
    
    var regExp = /[^A-Za-z0-9]/g
    var string = inputString.toLowerCase().replace(regExp,'')
    
    console.log(string)
    
    var reverseWord = string.split('').reverse().join('')
    if (string === reverseWord){
        return true;
    }
    else {
        return false;
    }
}



function wrapCharacter(inputString) {
   
}
wrapCharacter("Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam");


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