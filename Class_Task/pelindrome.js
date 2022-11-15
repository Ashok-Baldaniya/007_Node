let sum = 0;
let num = prompt("enter any number");
let temp = num;
while (num > 0) {
    let rem = num % 10;
    sum = sum * 10 + rem;
    num = parseInt(num / 10);
}
if (sum == temp) {
    // console.log("number is pelindrome");
    alert("number is pelindrome");
}
else {
    // console.log("number is not pelindrome");
    alert("number is not pelidrome");
}

