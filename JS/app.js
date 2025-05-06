

// Problem1
function greetUser(name) {
    return "Hello, " + name + "!";
  }
  // Function Invocation
  let greeting = greetUser("John");
  console.log(greeting); // Output: Hello, Alice!
 //  or ********
  function greetPerson(person){
    console.log("Hello:"+person)
}
greetPerson("Lisa");

// / Problem2

const calculateArea = function(length, width) {
    return length * width;
  };
   // Invoking the Function Expression
  let area = calculateArea(5, 10);
  console.log("Area:", area); // Output: Area: 50
// Problem3
function AddTwoNumbers(a,b){
    let sum=(a+b);
}
AddTwoNumbers(6,7);

// // problem4
//     let numbers=[number1, number2,number3, number4, number5];
//     
//     
function getStats(...nums){
    let count=0;
    let sum=0;
    let average=0;
    let min=Math.min(numbers);
    let max=Math.max(numbers);
    for (i=0; i<=nums.length; i++){
            count=numbers.length;
            console.log(count)
            sum+=numbers[i];
            average=sum/count;
    
    console.log(nums)
    return result
}
getStats(1,2,3,4,5);
console.log(results);
}
// // problem5 Title Case Converter

function toTitleCase(str){
    if (!str) {
    return "";   
 } else if (str) {
       return (str).charAt(0).toUpperCase().slice(0) + (str).toLowerCase().slice(1);
    };
}
    console.log(toTitleCase("javascript")); 
    console.log(toTitleCase("hELLo"));          
     

// Problem6 factorial Calculator


// LESSON 12 PROBLEM 1 Convert Kilometers to Miles

function convertKilosToMiles(kilometers){
    const miles=kilometers * .621371;
    return miles;
}
let distanceInKilometers=5;
let distanceInMiles=convertKilosToMiles(distanceInKilometers);
console.log(distanceInKilometers + " km is equal "+distanceInMiles+"miles.");
// problem2 sum of numbers in an array
function sumArray(numbers){
       total = 0
  for (let i=0; i<numbers.length; i++){
    total += numbers[i];
  }
  return total
}
numbers = [1, 2, 3, 4, 5];
result = sumArray(numbers);
console.log(`the total of the numbers is  ${total}`);

// problem3 Area of a circle
let Area=0;

function calculateAreaOfCircle(radius){
    Area=3.14159 * radius *radius;
    return(Area);
}
calculateAreaOfCircle(10);
console.log(`the area is ${Area} cm`);
// // problem4 currency converter with default parameter

let EUR=.85; 
let GBP=.75; 
let JPY=110;
let convertdAmount=0;
function convertCurrency(amountUSD, toCurrency = "EUR"){
        
    if (toCurrency === "EUR") {
        convertedAmount = amountUSD * EUR;
    } else if (toCurrency === "GBP") {
        convertedAmount = amountUSD * GBP;
    } else if (toCurrency === "JPY") {
        convertedAmount = amountUSD * JPY;
    } else {
        convertedAmount = amountUSD; // Default to USD if currency is unknown
    }
    return convertedAmount;
}
console.log(convertCurrency(100)+" dollars");           
console.log(convertCurrency(100, "GBP")+" dollars");    
console.log(convertCurrency(100, "AUD")+" dollars");    

function swap(a, b) {
    return [b, a];
}       
console.log(swap(1, 2));   
