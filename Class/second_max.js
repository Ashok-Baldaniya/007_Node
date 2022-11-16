var a=[10,34,54,48,34,75,79,100,200]
let max=a[0],smax;
for (let i = 0; i < a.length; i++) {
    if (a[i]>max) {
        smax=max;
        max=a[i];
    }
}
console.log(smax);
// alert(max);