function isPalindrome(word) {
  const wordArray = [...word];
  const newArray = [];
  wordArray.forEach(letter => {
    newArray.unshift(letter);
  });
  const reversedWord = newArray.join('');
  return word === reversedWord;
}

/*
  Add your pseudocode here

  create wordArray using spread operator on string
  create new emptyArray

  for each loop : loop through wordArray
    for each letter, unshift (add first letter) to newArray

  join newArray

  ternary operator: does word == reversedword? true : false;

*/


/*
  This function takes a string as an argument and returns true if the string is a palindrome and false if it is not a palindrome. It does so by spreading the word into an array, creating a new empty array, and using a forEach loop to unshift each letter from the original array into the new array, thus reversing the order of the elements. Then, a string is created using the join method on the new array. Finally, the original string input is checked against the reversed string to verify if they are equal. If they are equal, the function returns true. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome('testing'))

  console.log('Expecting: true');
  console.log('=>', isPalindrome('rotator'))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
}

module.exports = isPalindrome;
