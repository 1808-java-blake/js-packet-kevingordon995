// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(input){
	if (input === 1){
		return 1
	}
	if (input === 2){
		return 1
	}
	else{ 
		return fib(input - 1) + fib(input - 2)
	}
}
console.log(fib(15))
// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray){
	let len = numArray.length
	do{
		swap = false
		for (i = 0; i < len; i++){
			if (numArray[i] < numArray[i + 1]){
				temp = numArray[i + 1]
				numArray[i + 1] = numArray[i]
				numArray[i] = temp
				swap = true
			}
		}
		len--
	}while(swap)
	return numArray
}
console.log(bubbleSort([21,5,2,8,98,109,41]))
// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
let string = "diary"
function reverseStr(someStr){
	let reversedStr = ""
	for (i = someStr.length - 1; i >= 0; i--){
		reversedStr += someStr[i]
	}
	return reversedStr
}
console.log(reverseStr(string))
// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
	if(someNum === 0){
		return 1
	}
	return factorial(someNum - 1) * someNum
}
console.log(factorial(5))
// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset){
	let string = someStr.substr(offset, someStr.length)
	if (offset >= someStr.length){
		alert('Invalid offset index')
	}
	else if (offset < 0){
		alert('Invalid offset index')
	}
	else if (length !== someStr.length){
		alert('Invalid length passed')
	}
	else {
		return string
	}
}
console.log(substring("queenie", "queenie".length, 2))
// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
	if (someNum === 1){
		return false
	}
	else if (someNum === 0){
		return true
	}
	else{
		return isEven(someNum - 2)
	}
}
console.log(isEven(6))
// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
	min = 0
	max = someStr.length - 1
	while(min < max){
		if (someStr[min] !== someStr[max]){
				return false
		}
		min++
		max--
	}
	return true
}
console.log(isPalindrome("racecar"))
// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
  // *
 // ***
// *****
 // ***
  // *
function printShape(shape, height, character){
	switch(shape){
			case 'Square':
				let design = ''
				for (i = 0; i < height; i++){
					for (j = 0; j < height; j++){
						design += character
					}
					design += '\n'
				}
				console.log(design)
				break
			case 'Triangle':
				let design1 = ''
				for (i = 1; i <= height; i++){
					for (j = 1; j <= i; j++){
						design1 += character
					}
					design1 += '\n'
				}					
				console.log(design1)
				break
			case 'Diamond':
				let design2 = ''
				for (i = 0; i < height; i++){
					for (j = 0; j < height - 1; j++){
						design2 += ' '
					}
					for (j = 0; j <= i; j++){
						design2 += character
					}
					design2 += '\n'
				}
				console.log(design2)
				break
	}
}
printShape('Diamond', 4, '#')
// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
	console.log(someObj)
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
	console.log(someArr.length)
	someArr[2]= ' '
	console.log(someArr.length)
}
deleteElement([4, 4, 2, 1, 6])
// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr){
	console.log(someArr.length)
	someArr.splice(3, 1)
	console.log(someArr.length)
}
spliceElement([4, 4, 2, 1, 6])
// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
	// var john = new Person("John", 30);
function Person(name, age){
	
	this.name =  name
	this.age = age
}
let kevin = new Person("Kevin", 22)
traverseObject(kevin)
// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
	// var john = getPerson("John", 30)
function getPerson(name, age){
	let person = {
		firstName: name,
		currentAge: age
	}
	return person
}
console.log(getPerson("Kevin", 22))