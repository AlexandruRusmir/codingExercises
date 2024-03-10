/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const appearances = {};
  for (const num of nums1) {
    appearances[num] = 1;
  }
  const intersectionOfArrays = [];
  for (const num of nums2) {
    if (appearances[num] === 1) {
      appearances[num] = 2;
      intersectionOfArrays.push(num);
    }
  }

  return intersectionOfArrays;
};
