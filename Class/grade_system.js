
let mark = Number(prompt("enter mark of student"));

if (mark >= 80 && mark <= 100) {
    // console.log("pass with A grade");
    alert("pass with A grade");
}
else if (mark >= 60 && mark < 80) {
    // console.log("pass with B grade");
    alert("pass with B grade");
}
else if (mark >= 45 && mark < 60) {
    // console.log("pass with C grade");
    alert("pass with C grade");
}
else if (mark >= 33 && mark < 45) {
    // console.log("pass with D grade");
    alert("pass with D grade");
}
else if (mark < 33) {
    // console.log("Sorry,You are Fail");
    alert("Sorry,You are Fail");
}
else {
    // console.log("Please,Enter valid marks");
    alert("Please,Enter valid marks");
}