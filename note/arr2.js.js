// ====================================================
// 1) Ikkita sendvichni ifodalovchi ikkita massiv berilgan bo'lsa, ikkala sendvich bir xil non 
//    ishlatadimi-yo'qmi qaytaring. Non har doim massivning boshida va oxirida topiladi.

// Example: 
//   hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
//   ) ➞ true

//   hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
//   ) ➞ false

//   hasSameBread(
//     ["toast", "cheese", "toast"],
//     ["brown bread", "cheese", "toast"]
//   ) ➞ false

// Eslatmalar: 
// 	1) Massivlar har doim uchta elementdan iborat bo'ladi.
//         2) Bir sendvichdagi birinchi non ikkinchi sendvichdagi birinchi bo'lak bilan bir xil bo'lishi kerak. Xuddi shu narsa oxirgi nonga tegishli.



const hasSameBread = (arrOne,arrTwo) => {

   if (arrOne[0] === arrTwo[0] && arrOne[arrOne.length - 1] == arrTwo[arrTwo.length - 1])  return true;
   return false;
}

hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
  );	


// ====================End================================


// ====================================================
// 2) 50-30-20 strategiyasi - bu byudjetni shakllantirishning oddiy usuli bo'lib, unda soliqdan keyingi daromadning 50% ehtiyojlar uchun, soliq daromadlaridan 
//    keyin 30% ehtiyojlar uchun va soliqdan keyingi daromadlarning 20% tejash yoki qarzni to'lash uchun sarflash kiradi.

//    Soliqdan keyingi daromadni ati sifatida hisobga olgan holda, nima qilishingiz kerak, funktsiyani amalga oshirishingiz kerak, bu odam ehtiyojlar, ehtiyojlar 
//    va jamg'armalarga qancha mablag 'sarflashi kerakligini ko'rsatadigan ob'ektni qaytaradi.

// Example: 

//  2.1) fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

//  2.2) fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

//  2.3) fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// Eslatmalar: 
// 	1) N/A

const fiftyThirtyTwenty = sum => {
   return `Needs:${sum * 0.5},  Wants:${sum * 0.3},  Savings:${sum * 0.2}`;
}

fiftyThirtyTwenty(10000);
// =======================End=============================


// 3) Ikki sonli massivni oladigan va birinchi sonning kvadrat ildizi ikkinchi sonning kub ildiziga tengligini tekshiradigan funktsiya yarating.
 
// Example: 

//  3.1) checkSquareAndCube([4, 8]) ➞ true

//  3.2) checkSquareAndCube([16, 48]) ➞ false

//  3.3) checkSquareAndCube([9, 27]) ➞ true

// Eslatmalar: 
// 	1) Yo'q, to'g'ri yoki yolg'onni qaytarishni unutmang.
// 	2) Barcha massivlarda ikkita musbat son mavjud.
// 	3) Agar siz tiqilib qolsangiz, maslahat olish uchun Resurslarni tekshiring.

const checkSquareAndCube = arr => {
    return Math.pow(arr[0], 1/2) === Math.pow(arr[1], 1/3);
  
   return false;
}

checkSquareAndCube([10, 27]);
// =======================End=============================
