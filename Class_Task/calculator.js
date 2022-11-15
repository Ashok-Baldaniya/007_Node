let a = Number(prompt("enter first numbber"));
let b = Number(prompt("enter second number"));
let choose = Number(prompt("1-> + ,2-> - ,3-> * ,4-> /"));

switch (choose) {
    case 1:
        // console.log(a+b);
        alert(a + b);
        break;
    case 2:
        // console.log(a-b);
        alert(a - b);
        break;
    case 3:
        // console.log(a*b);
        alert(a * b);
        break;
    case 4:
        // console.log(a/b);
        alert(a / b);
        break;

    default:
        // console.log("enter valid option");
        alert("enter valid option");
        break;
}