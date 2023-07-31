// 1. Print the numbers in the array without commas
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
  new_string += numsArr[i];
}
console.log(new_string);

// 2. Print the numbers in the array with commas
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
  new_string += numsArr[i];
  if (i !== numsArr.length - 1) {
    new_string += ",";
  }
}
console.log(new_string);

// 3. Print from last to first with spaces
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = numsArr.length - 1; i >= 0; i--) {
  new_string += numsArr[i] + " ";
}
console.log(new_string.trim());

// 4. Replace even numbers with "even"
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 === 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);

// 5. Replace even index with "even"
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i < numsArr.length; i++) {
  if (i % 2 === 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);

// 6. Add all numbers in the array
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {
  sum += numsArr[i];
}
console.log(sum);

// 7. Add the even numbers only
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 === 0) {
    sum += numsArr[i];
  }
}
console.log(sum);

// 8. Add the even numbers and subtract the odd numbers
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 !== 0) {
    sum += numsArr[i];
  } else {
    sum -= numsArr[i];
  }
}
console.log(sum);

// 9. Print inner arrays
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
  console.log(numsArr[i]);
}

// 10. Print elements in the inner arrays
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = "";
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    str_all += inner_array[j];
  }
}
console.log(str_all);

// 11. Replace even index with "even" in inner arrays
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    if (j % 2 === 0) {
      inner_array[j] = "even";
    }
  }
}
console.log(numsArr);

// 12. Print elements in the inner arrays in reverse
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = "";
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = inner_array.length - 1; j >= 0; j--) {
    str_all += inner_array[j] + " ";
  }
}
console.log(str_all.trim());

// 13. Add elements in the inner arrays based on odd or even values
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    if (inner_array[j] % 2 !== 0) {
      sum_odd += inner_array[j];
    } else {
      sum_even += inner_array[j];
    }
  }
}
console.log(sum_odd);
console.log(sum_even);
