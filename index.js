/* 1. Write a JavaScript function that reverse a number. 
Example x = -32243;
Expected Output : -123456789 */
function reversedNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
console.log(reversedNum(-09876543210));

//num.toString() converts the given number into a String. We do this so we can use the split function on it next.
//num.split('') converts the String into an Array of characters. We do this so we can use the Array reverse function (which does not work on a String).
//num.reverse() reverses the order of the items in the array.
//num.join('') reassembles the reversed characters into a String.(array to string)
//parseFloat(num) converts num into a float from a String.
/* num = '0012345'
parseFloat(num)
 num = 12345 */
//Note: parseFloat runs in the end (even though it is on the first line of the function) on the reversed number and removes any leading zeroes.
//num * Math.sign(num) multiplies the number with the sign of the original number provided.
