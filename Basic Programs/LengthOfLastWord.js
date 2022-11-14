/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
 

 Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

*/

// *************** CODE GOES HERE ***************
var picklastWord = function(s){
    var lengthofstring;
    for(i=s.length-1;i>=0;i--)
    {
        if (s[i]==' ')
        {
            lengthofstring = s.length-1 - i;
            break;
        }

    }
    return lengthofstring;
}
var readline = require("readline")
var read = readline.createInterface(process.stdin, process.stdout)
read.question("Enter the string of which you want to find the length of last word. ",(word)=>{
    console.log("The length is ",picklastWord(word));
    read.close();
})



// Way 2 (learning arrow functions) 

const lengthOfWord = (sentenceString) => {
    return(sentenceString.split(" ").pop().length);
} 


var readline = require("readline")
var read = readline.createInterface(process.stdin, process.stdout)
read.question("Enter the string of which you want to find the length of last word. ",(sentenceString)=>{
    console.log("The length is ",lengthOfWord(sentenceString));
    read.close();
})