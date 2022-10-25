let a;
let b;
let c;
a=5;
b=30;
c=40;
if (a>b && b>c) {
  console.log (`${a}` + " больше "+ `${b}`+ " и " + `${c}`);
}
else if (a<b && b<c) {
 console.log (`${c}` + " больше "+ `${a}`+ " и " + `${b}`); 
}
 else if (a<b && b>c) {
 console.log (`${b}` + " больше "+ `${a}`+ " и " + `${c}`);
 }
else {
  console.log ("Числа равны"); 
}