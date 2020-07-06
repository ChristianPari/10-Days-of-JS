# 10 Days of JavaScript @HackerRank
Within each day folder contains files that HackerRank assigned for that day. Files ending with 'HR' are HackerRanks' setup files that are submitted on the site, the others ending in 'RM' are the remaastered ones that I create myself with the same assignment but convert it into a readline program that does the same thing but in a slightly different way.
## Timeline
### Day 9
- Binary Calculator
    - an exersice using HTML, CSS, and JS to create a working Binary Calculator

### Day 8
- Create a Button
    - an exersice using HTML, CSS and JS to create a BUTTON with specific demensions and when clicked, the innerHTML increments by 1 each time
- Buttons Container
    - an exersice to create a 3x3 grid of buttons with innerHTMLs of 1 thru 9 and have the nummber 5 button via onclick make the numbers move counterclockwise and cylce continously without the div ids changing, only the innerHTML will be changed

### Day 7
- Regular Expressions I
    - an exersice where I created a Regular Expression to check if a string input had the first index a vowel and if that last index was the same vowel
- Regular Expressions II
    - an exersice where I created a Regular Expression that is used to match a string input that inlcudes either Mr. Mrs. Ms. Dr. or Er. and is followed by any amount of characters
- Regular Expressions III
    - an exersice where I created a Regular Expression that was used to match either a single or a consecutive amount of numbers within a string

### Day 6
- Bitwise Operators:
    - this exersice consisted of creating a nested loop to test a value from a bitwise operation of two numbers (a,b) aganist another predetermined number (k) being passed in as an argument. The answer is the greatest bitwise value gathered that is less than the value of the predetermined number (k)
- Javascript Dates:
    - an exersice in which I needed to create a variable that would get its' value from the Date constructor where the parameter is passed into the parameter of the Date Object. Then. using the getDay method of the Date constructor I retrived the index of the actual day (sun through sat / 0 - 6) and then created an array of the days of the week and return the array with the number retrieved from getDay as the index number that I wanted returned 

### Day 5
- Inheritance:
    - an exercise that had me learn how to create a custom method and add it to an exisiting class, along with then creating a sub class that inherits the method from that exisiting (super) class so that the sub class can then have the method ran for it's output
- Template Literals:
    - an exercise to evaluate data from an experssions array that is recieved via readline from HackerRank and then passed into a function which evaluates and returns the side lengths of the rectangle propeties (area and perimeter) that were found by excuting a opertaion using the indexes of the expressions array
- Arrow Functions:
    - an exercise to take in an array of numbers and return the array with odd numbers tripled and even numbers doubled

### Day 4
- Create Rectangle Object:
    - an exersice that has a function which takes in side lengths as arguments and returns an object with length, width, area, and perimeter properties
- Count Objects:
    - an exersice that loops through an array of objects and compares the properties within each object and returns how many times (in number form) the objects had that we're equal to one another
- Classes:
    - this exersice was to create a custom class named Polygon which has a constructor that takes in an array and then has a function that is ran to evaluate the perimeter

### Day 3
- Arrays:
    - an exersice that used a function that takes in an array of numbers as an argument and returns the second largest number in the array
- Try, Catch, Finally:
    - an exersice that uses a function to takes in an argument and if it is a string then it reverses and logs it, otherwise it logs an error
- Throw:
    - this exersice checks a number that is passed as an argument in a function to be positive, negative, or zero and returns 'YES' for positive or a specific throw error for the other possibilites

### Day 2
- If Else Statements:
    - an exersice that takes a numerical value between 0 and 30 and returns an A-F depending on the previous value
- Switch Statements:
    - this exercise takes in a string and depending on the first letter of that string will return a letter A-D
- Loops:
    - this exersice takes in a alphabet only string and logs the destructered vowels and then the consonants

### Day 1
- Arithmitic Operators:
    - an exercise to take readline input for a rectangles length and width, and then display back in the console the area and perimeter of the rectangle
- Functions:
    - an exercise to factorialize a readline input and display back the factorialized number
- Let and Const:
    - an exercise to find the area and perimeter of a circle via it's radius which was provided via readline input

### Day 0
Simple challenge to take preassigned variables and readline standard input value and add numbers or concatenate strings and display it to the console. [data_typesHR.js](https://github.com/ChristianPari/10-Days-of-JS/blob/master/day0/data_typesHR.js) includes code fromHackerRanks website so won't run properly, [data.typesRM.js](https://github.com/ChristianPari/10-Days-of-JS/blob/master/day0/data_typesRM.js) will run with readline so the user can input data manually to have added to the preassigned variables and then console logged back to them.