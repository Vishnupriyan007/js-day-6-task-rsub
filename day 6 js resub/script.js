// Find the culprit
alert("I'm JavaScript!"); // The double quotes around the message should be regular quotes

// Find the culprit and invoke the alert
alert("I'm invoked!"); // The alert is missing proper quotes

// Explain the below how it works
alert("I'm JavaScript!");
alert('Hello'); // Added a missing semicolon
alert(`Wor
ld`);
alert(3 + 1 + 2);

// Fix the below to alert "Guvi geek"
let admin = 9, fname = 10.5; 
fname = "Guvi";
let lname = "geek"; // Declare lname separately
admin = fname + " " + lname; // Concatenate the strings with a space
alert(admin); // "Guvi geek"

// Fix the below to alert "hello Guvi geek"
fname = 10.5; 
fname = "Guvi";
lname = "geek";
let name = fname + " " + lname; // Concatenate the strings with a space
alert(`hello ${name}`); // Use backticks for template literals

// Fix the below to alert the sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b); // Convert the input strings to numbers before addition

// If you run the below script, you will get "Code is Blasted"
a = "2" > "12";
// Don't touch below this
if (a) {
  console.log("Code is Blasted"); // The string comparison "2" > "12" is true because '2' comes after '1' in Unicode
}
else
{
  console.log("Diffused"); 
}

// How to get success in console
let num = prompt("Enter a number?");
// Don't modify any code below this
if (num) {
  console.log('OMG it works for any number inc 0');
}
else
{
  console.log("Success");
}

// How to get the correct score in console
let value = prompt('How many runs you scored in this ball');
if (value === '4') {
  console.log("You hit a Four");
} else if (value === '6') {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}

// Fix the code to welcome the Employee
let login = 'Employee';
message = (login === 'Employee') ? 'Greetings' :
  (login === 'Director') ? 'Hello' :
  (login === '') ? 'No login' :
  '';
console.log(message);

// Fix the code to welcome the boss
let lock = 2;
// Don't change any code below this
if (lock && " " || undefined) {
  message = "Go away"; // The condition will be true since " " (a non-empty string) and undefined are both truthy
}
else {
  message = "welcome";
}
console.log(message);

// Change the code to print 3 2 1
let i = 3;
while (i) {
  console.log(i--);
}

// Change the code to print 1 to 10 in 4 lines
let count = 1;
while (count <= 10) {
  console.log(count);
  count += 1;
}

// Change the code to print even numbers
for (let evenNum = 2; evenNum <= 20; evenNum += 2) {
  console.log(evenNum);
}

// Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let j = 0; j < gifts.length; j++) {
  console.log(`Wrapped ${gifts[j]} and added a bow!`);
}

// Fix the code to disarm the bomb
let timer = 100;
while (timer > 0) {
  timer--;
  if (timer === 0) {
    console.log("bomb triggered");
  }
}
