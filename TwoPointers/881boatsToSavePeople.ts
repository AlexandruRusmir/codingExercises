/**
suboptimal can be to so that when you are at an element,
you search for the max element that can still be added
so O(n**2)

mark the visited elements as visited either through another array or by removing the seen elements
 */

const numRescueBoats = (people: number[], limit: number): number => {
  people.sort((a, b) => a - b);
  let numberOfBoats = 0,
    l = 0,
    r = people.length - 1;
  while (l <= r) {
    if (l !== r && people[l] + people[r] <= limit) {
      l++;
    }
    r--;
    numberOfBoats++;
  }

  return numberOfBoats;
};
