// let str="sun rise in east";
// for (let i = str.length-1; i >= 0; i--) {
//     console.log(str[i]);
// }


let str = "sun rise in east";
for (var i = 0; i <= str.length; i++) {
    if (str[i] == " ") {
        for (var i = str[i]; i >= 0; i--) {
            console.log(str[i]);
        }
    }
    else {
        console.log(str[i]);
    }
}