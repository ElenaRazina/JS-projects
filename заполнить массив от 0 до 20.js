// Заполнить массив числами от 0 до 20 включительно, за исключением чисел, кратных 5.
let arr=[];
let x=0;
for (let i=0; i<=20; i++)
{
    if (i % 5 != 0){
      arr[x] = i;
       x++;
    }
}
console.log(arr);