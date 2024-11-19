// //Question 1. Declare an Empty Array Using Literal Notation
// var studentNames = [];

// //Question 2. Declare an Empty Array Using Object Notationvar
// var studentNames = new Array();

// //Question 3. Declare and Initialize a Strings Array
// let stringsArray = ["Korea", "japan", "china"];

// //Question 4. Declare and Initialize a Numbers Array
// let numbersArray = [10, 9, 2003];

// //Question 5. Declare and Initialize a Boolean Array
// let booleanArray = [true, false];

// //Question 6. Declare and Initialize a Mixed Array
// let mixedArray = ["text", 123, true];

// //Question 7. Store Educational Qualifications and Display in Browser
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// var ul = document.createElement('ul');
// var li = document.createElement('li');
// li.textContent = qualifications;
// ul.appendChild(li);



// //Question 8. Scores and Percentages of Students
// var studentsName = ["Areesha", "Anusha", "Malaika"];
// var studentScores = [450, 390, 420];
// var totalMarks = 500;
// studentsName.forEach((studentsName, index) => {
//     var percentage = (studentScores[index] / totalMarks) * 100;
//     document.write(`Score of ${studentsName} is: Score = ${studentScores[index]}. Percentage:  ${percentage.toFixed(2)}%<br>`);
// });



// //Question 9. Color Names Manipulation
// var colors = ["Red", "Green", "Blue, Pink, Yellow"];
// alert(colors)
// function displayArray(arr) {
//     console.log("Current colors:", arr);
// }

// // a. Add color at the beginning
// var colorStart = prompt("Enter a color to add at the beginning:");
// if (colorStart) {
//     colors.unshift(colorStart);
//     displayArray(`Colors`);
// }


// // b. Add color at the end
// let colorEnd = prompt("Enter a color to add at the end:");
// if (colorEnd) {
//     colors.push(colorEnd);
//     displayArray(colors);
// }


// // c. Add two more colors at the beginning
// colors.unshift("Pink", "Yellow");
// displayArray(colors);


// // d. Delete the first color
// colors.shift(); {
//     displayArray(colors);
// }


// // e. Delete the last color
// colors.pop();
// displayArray(colors);

// // f. Add at a specific index
// var indexToAdd = parseInt(prompt("Enter index to add a color:"));
// var colorToAdd = prompt("Enter the color name:");
// colors.splice(2, 0, 3);
// displayArray(colors);

// // g. Delete specific colors
// var indexToDelete = parseInt(prompt("Enter index to start deleting:"));
// var deleteCount = parseInt(prompt("Enter number of colors to delete:"));
// colors.splice(1, 4);
// displayArray(colors);




// //Question 11. City Names
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(0, 3);
// console.log("Selected Cities array:", selectedCities);



// //Question 12. Single String 
// var arr = ["This", "is", "my", "cat"];
// var result = arr.join(" ");
// console.log(result);


// //Question 13. FIFO
// let fifoArray = [];
// fifoArray.push("first");
// fifoArray.push("second");
// fifoArray.push("third");

// while (fifoArray.length) {
//     console.log(fifoArray.shift());
// }

// //Question 14. LIFO 
// let lifoArray = [];
// lifoArray.push("first1");
// lifoArray.push("second2");
// lifoArray.push("third");

// while (lifoArray.length) {
//     console.log(lifoArray.pop());
// }


// //Question 15. Phone Manufacturers Dropdown
// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }
