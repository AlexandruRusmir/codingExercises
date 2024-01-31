/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
      return temperatures.map((temperature, index) => {
        let j = index + 1;
        while (j < temperatures.length) {
            if (temperatures[j] > temperature) {
                return j - index;
            }
            j++;
        }

        return 0;
      });
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));