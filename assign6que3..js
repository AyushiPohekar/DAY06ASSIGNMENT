// Part 3: Find the culprits and nail them — debugging javascript
// Fix the code to get the largest of three.
// Code:
// aa = (f,s,t) => {
//  let f,s,t;
//  console.log(f,s,t);
//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// }
// aa(1,2,3);
//ANS:
var aa = (f,s,t) => {
    f,s,t;
   //console.log(f,s,t);
   if(f>s &&f>t){
   console.log(f)}
   else if(s>f && s>t){
   console.log(s)}
   else{
   console.log(t)}
  }
  aa(1,2,3);

  //Fix the code to Sum of the digits present in the number
// Code:
// let n = 123;
// console.log(add(n));
// function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }
//ANS:

  let n = 123;
let num=n.toString().split('');
console.log(add(num));
function add(num)
{
let sum = 0;
for(var i=0;i<num.length;i++)
{
  num[i]=parseInt(num[i]);
 sum=sum+num[i];
}
 return sum;
}


// //Fix the code to Sum of all numbers using IIFE function
// Code:
// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i <= arr.length; i++);{
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();
//ANS:

const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i<arr.length; i++)
 {
 sum += arr[i];
 }
 //return sum;
 console.log(sum);
})(arr);

// Fix the code to return the Prime numbers
// Code:
// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//  for(let i=2;i<=num;i++){
//  if(num%i===0)
//  {
//  return true;
//  }
//  }
//  return num===1;
// });
// console.log(myPrime);
//ANS:

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num/2;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return true;
});
console.log(myPrime);


// Fix the code to sum the number in that array
// Code:
// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sum = (a, b) =>
//  a + b
// const sum = num.reduce(sum)
// console.log(sum);
//ANS:

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
var sum = (a, b) =>
 a + b
 sum = num.reduce(sum)
console.log(sum);