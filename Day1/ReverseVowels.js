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
String.prototype.replaceAt = function(index,replacement){
    return this.substring(0,index)+replacement+this.substring(index+replacement.length)
}
var reverseVowelsSecondSolution = function(s){
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    //Two pointer algorithm approach
    for(let i=0,j=s.length;i<s.length/2;)
    {
        if(vowels.includes(s.charAt(i)) && vowels.includes(s.charAt(j)))
        {
            let temp = s[i];
            s=s.replaceAt(i,s[j]);
            s=s.replaceAt(j,temp);
            i++;
            j--;
        }
        else if (vowels.includes(s.charAt(i)))
        {
            j--;
        }
        else{
            i++;
        }
    }
    return s;
}
var readline = require("readline")
var read = readline.createInterface(process.stdin, process.stdout)
read.question("Enter the word of which you want to reverse the vowels ",(word)=>{
    console.log("The word is ",reverseVowels(word));
    console.log("The word is ",reverseVowelsSecondSolution(word));
    read.close();
})