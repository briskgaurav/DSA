function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    if (index !== i) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  return arr;
}

const ans = SelectionSort([5, 4, 3, 2, 1]);
console.log(ans);
