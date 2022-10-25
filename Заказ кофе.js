let cup = "small white cup"
let coffee = "black coffee";
let water = "hot water";
let spoon = "teaspoon";
let shugar = "white shugar";
let vanilla = "aromat vanilla";
let penka = "tasty penka";
let milk = "white milk";
let topping;
let cocktail;
let coffeeshugar = "Coffee with shugar";
let coffeevanilla = "Coffee with vanilla";
let coffeepenka = "Coffee with penka";
let coffeemilk = "Coffee with milk";
topping = penka;
if (topping == shugar) {
  cocktail = coffeeshugar}
else if (topping == vanilla) {
  cocktail = coffeevanilla}
else if (topping == penka) {
  cocktail = coffeepenka}
else {
  cocktail = coffeemilk}
let step1 = `1. Take a ${cup}`;
let step2 = `2. Take a ${coffee}`;
let step3 = `3. Take a ${spoon}`;
let step4 = `4. Take a one ${spoon} of ${coffee} and put in a ${cup}`;
let step5 = `5. Nalit 300ml of ${water} in a ${cup}`;
let step6 = `6. Take ${topping}`
let step7 = `7. Take a ${spoon} and shake`;
let result = "\n" + `Your ${cocktail} is ready`;
console.log(`Pecept of ${cocktail}` + "\n" + "\n" + step1 + "\n" + step2 + "\n" + step3 + "\n" + step4 + "\n" + step5 + "\n" + step6 + "\n" + step7 + "\n" + result);
let price = 100;
if (topping == shugar)
{console.log(`The cost of ${cocktail} is: ` + price*1.2)}
else if (topping == vanilla)
  {console.log(`The cost of ${cocktail} is: ` + price*1.3)}
else if (topping == penka)
  {console.log(`The cost of ${cocktail} is: ` + price*1.1)}
else
   {console.log(`The cost of ${cocktail} is: ` + price*1.4)}
