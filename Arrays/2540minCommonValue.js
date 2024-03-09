/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = (nums1, nums2) => {
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      return nums1[i];
    }
    if (nums1[i] < nums2[j]) {
      if (i === nums1.length - 1) {
        return -1;
      }
      i++;
      continue;
    }
    if (nums2[j] < nums1[i]) {
      if (j === nums2.length - 1) {
        return -1;
      }
      j++;
      continue;
    }
  }

  return -1;
};
