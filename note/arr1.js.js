// ====================================================
// 1) Uzunligi noma'lum, ammo elementlarning (sonlarning) teng miqdori bilan berilgan 
//    qatorni sonlarning eng yuqori yig'indisi bo'lgan yarmini massivning ikkinchi yarmiga 
//    nusxalash. Agar birinchi yarmning yig'indisi ikkinchi yarmning yig'indisiga teng bo'lsa, 
//    asl qatorni qaytaring.

// Example: 
//  1.1) balanced([1, 2, 4, 6, 3, 1]) ➞ [6, 3, 1, 6, 3, 1]

//  1.2) balanced([88, 3, 27, 5, 9, 0, 13, 10]) ➞ [88, 3, 27, 5, 88, 3, 27, 5]

//  1.3) balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]) ➞ [7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]

// Eslatmalar: 
// 	Har bir massivda bir xil miqdordagi elementlar mavjud.

const balanced = arr =>{
    
   let arr1 = [];
   let arr2 = [];

   //  arrayning yarim elementini boshqa bir o'zaruvchiga qo'shish
   
    for(let i=0; i < arr.length/2; i++){
       arr1.push(arr[i]);
    } 
   //  arrayning ikkinchi yarim elementini boshqa bir o'zaruvchiga qo'shish
   
    for(let i = (arr.length / 2); i < (arr.length); i++){
       arr2.push(arr[i]);
}

    
   const sum1 = arr1.reduce((a, b) => a + b);
   const sum2 = arr2.reduce((a, b) => a + b);

   if (sum1 > sum2) {
       
      return arr1.concat(arr1)
   }else
      if (sum1 < sum2) {
         return arr2.concat(arr2)
   }

   return arr

}

console.log(balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]));





// ====================================================
// 2) Massivda ma'lum bir raqam mavjudligini tekshirish uchun funktsiyani yozing.

// Example: 

//  2.1) check([1, 2, 3, 4, 5], 3) ➞ true

//  2.2) check([1, 1, 2, 1, 1], 3) ➞ false

//  2.3) check([5, 5, 5, 6], 5) ➞ true

//  2.4) check([], 5) ➞ false

// Eslatmalar: 
// 	1) Natijani qaytarishni unutmang.
// 	2) Agar siz muammoga duch kelsangiz, Resurslar yorlig'ida yordam qidiring.
// 	3) Agar chindan ham tiqilib qolsangiz, echimlar yorlig'ida echimlarni oching.

// ====================================================


const check = (arr, number) => {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === number) {
         return true;
      }
   
   } return false;

};


check([1, 2, 3, 4, 5], 11);



// 3) Bir qator berilgan holda, qiymatlarni soat yo'nalishi bo'yicha bitta aylantiradi 
//    (oxirgi qiymat birinchi pozitsiyaga yuboriladi). Yaxshi tushunish uchun misollarni tekshiring.
 
// Example: 

//  3.1) rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

//  3.2) rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

//  3.3) rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]

// Eslatmalar: 
// 	1) N/A
// ====================================================


const rotateByOne = arr => {
   let arr1 = arr.pop();
  arr.unshift(arr1);
  return arr;
  
}


rotateByOne([20, 15, 26, 8, 4]);