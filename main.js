// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
  function getUSA(){
     let spans = document.getElementsByTagName("span")[2].innerText
     console.log(spans)
  }
  getUSA()
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
  function getPeopleInSales(){
    let row = document.querySelectorAll(['tr > td'])
    for (i = 0; i < row.length; i++) {
        if(row[i].innerHTML === 'Sales'){
          console.log(row[i - 1].innerText)
        }
    }
  }
  getPeopleInSales()
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
  function getAnchorChildren(){
    let list = document.querySelectorAll('a > span')
    for (i = 0; i < list.length; i++){
      console.log(list[i].innerText)
    }
  }
  getAnchorChildren()
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
  function getHobbies(){
    let hobbies = document.querySelectorAll('select[name=skills] > option')
    for (i = 0; i < hobbies.length; i++) {
      if (hobbies[i].selected){
        console.log(hobbies[i].value)
        console.log(hobbies[i].innerText)
      }
    }
  }
  getHobbies()
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
 function getCustomAttribute(){
   let list = document.querySelectorAll('[data-customAttr]')
   for (i = 0; i < list.length; i++){
     console.log(list[i].getAttribute('data-customAttr'))
     console.log(list[i].tagName)
   }
 }
 getCustomAttribute()
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
document.getElementById("num1").onchange = function() {addInput()}
document.getElementById("num2").onchange = function() {addInput()}
document.getElementById("sum").onchange = function() {addInput()}
function addInput(){
  a = parseInt(document.getElementById('num1').value)
  b = parseInt(document.getElementById('num2').value)
  c = a + b
  document.getElementById('sum').innerText = c
}
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
let skill = document.getElementsByName('skills').onchange = function () {skillChange(skill)}
function skillChange(skill){
  // let skill = document.querySelectorAll('select[name=skills] > option:checked')
  // for (i = 0; i < skill.length; i++) {
  //   if (skill[i].value === 'java') {
  //     alert ("Are you sure that Java is one of your skills?")
  //   }
  //   if (skill[i].value === 'net') {
  //     alert ("Are you sure that .NET is one of your skills?")
  //   }
  //   if (skill[i].value === 'dom') {
  //     alert ("Are you sure that DOM is one of your skills?")
  //   }
  //   if (skill[i].value === 'html') {
  //     alert ("Are you sure that HTML is one of your skills?")
  //   }
  //   if (skill[i].value === 'css') {
  //     alert ("Are you sure that CSS is one of your skills?")
  //   }
  //   if (skill[i].value === 'javascript') {
  //     alert ("Are you sure that Javascript is one of your skills?")
  //   }
  // }
  alert("Are you sure that " + skill.options[skill.selectedIndex].value + " is one of your skills?")
}
// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
function backgroundColor(){
  alert("So you like " +  +" more than "+ oldValue)

}
// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
document.getElementsByClassName("empName").onmouseover = function() {hideName()}
document.getElementsByClassName("empName").onmouseout = function() {showName()}
function hideName() {
  let names = document.getElementsByClassName("empName")
  for (let i in names) {
    if (names[i].style.display === 'block') {
      names[i].style.display = 'none'
    }
  }
}
function showName() {
  let names = document.getElementsByClassName("empName")
  for (let i in names) {
    if (names[i].style.display === 'none') {
      names[i].style.display = 'block'
    }
  }
}
// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function currentTime() {
  let now = new Date();
  let hours = now.getHours();
  if (hours > 12) {
    h = hours - 12
  }
  if (hours === 0) {
    h = 12;
  }
  let m = now.getMinutes();
  if (m < 10) {
    m = '0'+ m
  }
  let s = now.getSeconds();
  if (s < 10){
    s = '0' + s
  }
  if (hours >= 12) {
    document.getElementById('currentTime').innerHTML =
    h + ":" + m + ":" + s + ' PM';
  }
  else if (hours < 12) {
    document.getElementById('currentTime').innerHTML =
    h + ":" + m + ":" + s + ' AM';
  }
  t = setTimeout(currentTime, 1000);
}
currentTime()
// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
document.getElementById("helloWorld").addEventListener('click', changeColor)
function changeColor(evt) {
  setTimeout(function(){
    document.getElementById("helloWorld").style.color = 'red'}, 3000)
}
// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func) {

}