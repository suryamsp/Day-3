var resume={
    "Name": "Surya.M",
     "Age" : 25,
     "Date of Birth":"16.10.1997",
     "Gender":"Male",
     "Language_known" :["Tamil","English"],
     "Qualification":"B.E Mechanical Engineering"

}
console.log(resume);

// For Loop
var a = [1,2,3,4,5,6,7,8,9,10];
var b=1;
for (var i = 0; i < a.length; i++) {
  b = b + i;
}
console.log(a);
// For in Loop
var a1 = [1,2,3,4,5,6,7,8,9,10];
for (var num in a1) { 
}
console.log(num);
  
// For of Loop
var a2 = [1,2,3,4,5,6,7,8,9,10];
for (var num1 of a2) {
}
console.log(num1);

  
//For Each
var a3 = [1,2,3,4,5,6,7,8,9,10];
a3.forEach(num2);
function num2(number) {
    console.log(number);
}