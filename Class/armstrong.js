let sum = 0;
let num = prompt("enter any number"); //ahithi Number kadhel che
let temp = num;
while (num > 0) {
   var rem = (num % 10);
    sum = sum + (rem * rem * rem);
    num =parseInt(num / 10);
}
if (sum == temp) {
    // console.log("number is armstrong");
    alert("number is armstrong");
}
else {
    // console.log("number is not armstrong");
    alert("number is not armstrong");
}