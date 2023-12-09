const deepCount = a => {//В счетчик помещается длина массива, если там оказался еще один массив, то к результату добавляется + 1
  let c = a.length;
  for (const v of a) {
      if (Array.isArray(v)) {
          c += deepCount(v);
      }
  }
  return c;
};

console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));
  


