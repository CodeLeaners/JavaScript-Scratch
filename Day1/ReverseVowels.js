/* 
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 
Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
*/

// *************** CODE GOES HERE ***************

 var reverseVowels = function(s) {
    var k = 0;
    const a = [];
    //converting string to an array
    s=s.split("");
    list1 = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for(var i=0; i<s.length; i++){
        if(list1.includes(s[i])){
            a.push(s[i]);
            k++;
        }
    }
    for(var j=0; j<s.length; j++){
        if(list1.includes(s[j])){
        s[j] = a[--k];
    }
        
    }
    //returning joined string
    return(s.join(""))
}
var readline = require("readline")
var read = readline.createInterface(process.stdin, process.stdout)
read.question("Enter the word of which you want to reverse the vowels ",(word)=>{
    console.log("The word is ",reverseVowels(word));
    read.close();
})