let a = 0, b = 1;
let num = Number(prompt("enter how many term you want"));
console.log(a);
console.log(b);

// this give term exactly you enter in 'num'
for (let i = 2; i < num; i++) {
    let c = a + b;
    console.log(c);
    // alert(c);
    a = b;
    b = c;
}

// //this give term which value less than 'num'
// for (let i = 0; i < num; i++) {
//     let c = a + b;
//     if (c < num) {
//         console.log(c);
//         // alert(c);
//         a = b;
//         b = c;
//     }
// }