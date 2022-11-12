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
read.question("Enter the word of which you want to reverse the vowels ",(word)=>{
    console.log("The length is ",picklastWord(word));
    read.close();
})