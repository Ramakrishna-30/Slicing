 "use strict";

/* Please do not modify anything above this line */

function getSliceFromArray(myArray, startIndex, endIndex) {
  // Use the slice method to return the sliced array
  return myArray.slice(startIndex, endIndex);
}

/* Please do not modify anything below this line */

function main() {
  // Define test inputs here
  let myArray = [1, 2, 3, 4, 5]; // Example array
  let startIndex = 1;            // Start index (inclusive)
  let endIndex = 4;              // End index (exclusive)
  
  // Call the function and get the sliced array
  let slicedArray = getSliceFromArray(myArray, startIndex, endIndex);
  
  // Output the result
  console.log(slicedArray);
}

// Run the main function
main();
