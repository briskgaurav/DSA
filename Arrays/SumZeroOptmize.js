// [-4,-3,-2,-1,0,1,2,3,4]
//Linear complexity o(n);

const SumZero = (array) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let sum = array[start] + array[end];
    if (sum === 0) {
      return [array[start], array[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
};

const ans = SumZero([-3, -2, -1, 0, 1, 2, 3, 4]);
console.log(ans);
