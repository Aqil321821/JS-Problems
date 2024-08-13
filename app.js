//Question # 1 .Reverse A given String

//solution 1



/* function reverseString(str) {

    return str.split('').reverse().join('');
}

const reverse = reverseString('Siddique');
console.log(reverse); */




//solution #2 

/* function reverseString2(str) {
    let reversed = '';
    for (let letter of str) {
        reversed = letter + reversed;
    }
    return reversed;

}
const reverse2 = reverseString2('Siddique');
console.log(reverse2); */



//solution# 3


/* function reverseString3(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

const reverse3 = reverseString3('Siddique');
console.log(reverse3); */



/*********************************************************/


//Q2. Palendrom Test 


//Solution #1 

/* function palindrome(str) {

    const reversed = str.split('').reverse().join('');
    if (reversed === str) {
        return 'The given word is palindrome';
    } else {
        return 'The given word is NOT palindrome';

    }

}

console.log(palindrome('maham')); 
console.log(palindrome('aqil'));  */



//solution#2

/* function isPalindrome(str){
    return str.split('').every((char,index)=>{
        return char===str[str.length-index-1];
    })
}

console.log(isPalindrome('maham'));
console.log(isPalindrome('maha')); */


/*********************************************************/


//Q#3. Array Chunk

/* function chunk(array, size) {
    const result = [];
    
    for (let i = 0; i < array.length; i = i+size) {
        result.push(array.slice(i, i + size));
    }
    
    return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 3;

const chunkedArray = chunk(array, size);
console.log(chunkedArray); */


/* slice method ek naya array return karta hai.
 Yeh method ek array ke ek hissa ko nikal kar ek naya array banaata hai, bina original array ko modify kiye. */




/**********************************************************/

//Q#4.

/* function anagram(str1, str2) {
    //=> STEPS

    // Normalize the strings: convert to lowercase and remove spaces
    // Sort the characters of each normalized string
    // Compare the sorted versions of both strings

    const normalize = str => str.replace(/\s+/g, '').toLowerCase();
    
    const sortString = str => normalize(str).split('').sort().join('');
    
    return sortString(str1) === sortString(str2);
}

// Example usage:
console.log(anagram('listen', 'silent')); 
console.log(anagram('hello', 'world'));  */

/* NOTES=>

                replace() method string ke andar specified pattern ya substring ko replace karne ke liye use hota hai.
                string.replace(pattern, replacement);
                pattern:=>Yeh wo value ya regular expression hai jo aap replace karna chahte hain. 
                    Ye single character, substring, ya regular expression ho sakta hai.
                replacement:=> Yeh wo value hai jo pattern ke jagah par replace hogi.

                note => we would do it without eliminating white spaces bcz no need it for single words


*/

//solution #2 

/* function anagram(str1, str2) {
    //steps
    // Normalize the strings: convert to lowercase and remove spaces
    // Sort the characters of each normalized string
    // Compare the sorted versions of both strings

    // const normalize = str => str.replace(/\s+/g, '').toLowerCase();
    
    const sortString = str => str.split('').sort().join('');
    
    return sortString(str1) === sortString(str2);
}

// Example usage:
console.log(anagram('listen', 'silent')); 
console.log(anagram('hello', 'world'));
 */


//SORT A STRING => CONVERT IT INTO ARRAY THEN USE SORT THEN JOIN

/* const str = 'ABCDEFG';
const str2 ='gfedcba';
const sort= string => string.split('').sort().join('');
const sorted= sort(str2);
console.log(sorted); */





/****************************************************************************** */





