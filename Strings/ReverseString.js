function Reverse(name) {
    let s = name.split('');
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];    
    start++;
    end--;
  };
  return s;
};
let ans  = Reverse("harsh");
console.log(ans);

