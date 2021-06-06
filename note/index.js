const nums = arr => {
   let num = [];
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
   if (num.includes(arr[i])) {
         sum++;
      } else {
         num.push(arr[i]);
         }
      return num;
   }
};

nums([1, 2, 3, 4, 5, 6]);
