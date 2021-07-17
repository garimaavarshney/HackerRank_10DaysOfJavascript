// ========================
//         Solution
// ========================

// Return the second largest number in the array.
// @param {Number[]} nums - An array of numbers.
// @return {Number} The second largest number in the array.

function getSecondLargest(nums) {
  // Complete the function
  nums.sort((a, b) => a < b); // This sorts inversely
  var largest = nums.shift();

  while (largest == nums[0]) {
    largest = nums.shift();
  }
  largest = nums.shift();

  return largest;
}

function main() {
  const n = +(readLine());
  const nums = readLine().split(' ').map(Number);

  console.log(getSecondLargest(nums));
}
