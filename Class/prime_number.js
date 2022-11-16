let num = Number(prompt("enter any number"));
let flag = 0;
if (num == 1 || num == 2) {
    // console.log("Number is prime");
    alert("Number is prime");
}
else {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        // console.log("number is not prime");
        alert("number is not prime");
    }
    else {
        // console.log("number is not prime");
        alert("number is prime");
    }
}