let ab;
let bc;
let ac;
ab = 5;
bc = 0;
ac = 5;
if ((ab !== 0) && (bc !== 0) && (ac !== 0)) {
if (((ab + bc) > ac) && ((bc + ac) > ab) && ((ab + ac) > bc)) 
{
  if (ab == bc || ab == ac || bc == ac) 
  {
    console.log ("Трeугольник существует. Равносторонний");
  }
else if(ab == bc && bc == ac) 
{
  console.log ("Треугольник существует. Равнобедренный");
}
 else if(ab > bc && ab > ac) 
 {
 if ((ab ** 2) == ((bc ** 2) + (ac ** 2)))
 {
 console.log ("Треугольник существует. Прямоугольный");
 }
   else if ((ab ** 2) > ((bc ** 2) + (ac ** 2)))
 {
   console.log ("Треугольник существует. Тупоугольный");
 }
   else 
   {
    console.log ("Треугольник существует. Остроугольный"); 
   }
 }
 else if(bc > ab && bc > ac) 
 {
 if ((bc**2) == ((ab**2) + (ac**2)))
 {
 console.log ("Треугольник существует. Прямоугольный");
 }
 else if ((bc ** 2) > ((ab ** 2) + (ac ** 2)))
 {
   console.log ("Треугольник существует. Тупоугольный");
 }
   else 
   {
    console.log ("Треугольник существует. Остроугольный"); 
   }
 }
 else if(ac > ab && ac > bc) 
 {
 if ((ac**2) == ((ab**2) + (bc**2))) 
     {
 console.log ("Треугольник существует. Прямоугольный");
 }
else if ((ab ** 2) > ((bc ** 2) + (ac ** 2)))
 {
   console.log ("Треугольник существует. Тупоугольный");
 }
   else 
   {
    console.log ("Треугольник существует. Остроугольный"); 
   }
 }
}
}
else {
  console.log ("Тругольник не существует");
}