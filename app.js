// Chapter 1
// Q:1 part(i)
alert("My First Name is Iqra");
// Q:1 part(ii)
alert("My last name is Tahir");
// Q:1 part(iii)
alert("My email is iqrathr@gmail.com");
// Q:1 part(iv)
alert("My phone no is 03201401764");
// Q:1 part(v)
alert("My password is 123abc");
// Q:2 2. Correct this statement: alert"You're learning JavaScript!";
alert("You are learning JavaScript!");
// Q:3 3. Code an alert statement displaying any message you like.
alert("Hurrah! 1st chapter is done!");

// Chapter 2
// Q:1 Declare any variable in the camelCase format.
 document.getElementById("c1q1").innerHTML="Ans: var firstName = 'Iqra';";
// Q:2 Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
var lastName;
lastName ="Tahir";
//Q:3 Declare the variable teamName and Alert your Team name.
var teamName = "Future Deveolpers";
alert("My team name is "+teamName);
// Q:4 This statement has already been coded. var bestMan = "Charlie";Assign the variable a new string.
var bestMan = "Charlie";
bestMan = "David";

// Chapter3
//Q1. Declare a variable “caseQty”
var caseQty;
//Q2. Assign to the variable caseQty, which has already been declared, the value 144.
caseQty = 144;
//Q3. Rewrite this statement so the variable can be used in a math operation. var num = "9";
var num = 9;
//Q4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
var sum;
sum = 2 + 5;
//Q5. What is the value of orderTotal? var merchTotal = 100; var shippingCharge = 10;var orderTotal = merchTotal + shippingCharge; Try it yourself
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
document.getElementById("c3q5").innerHTML = "The value of the order total is "+ orderTotal;
//Q6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.
var add = 4;
add = 4 + 8;

//Chapter 4
//Q1. Correct this statement.var product cost = 3.45;
var productCost = 3.45;
//Q2. Rewrite this using camelCase.var Nameofband;
var nameOfBand;
//Q3. In a single statement declare a legally-named variable and assign a number to it.
var numOne = 3;
//Q4. Declare a variable that is a combination of your first and last names. Use camelCase.
var firstName = "Iqra";
var lastName = "Tahir";
var fullName = firstName+lastName;
//Q5. List the legal and Illegal Variables.
//done in html

//Chapter 5
//Q1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
document.getElementById("c5q1").innerHTML="% is the symbol it is called percent in maths.";
//Q2. What is the value of num? var num = 20 % 6;
var num = 20 % 6;
document.getElementById("c5q2").innerHTML="num = "+num;
//Q3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
var largeNum = 1000 * 2000;
//Q4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable
var a = 8;
var b = 5;
var c = a-b;
//Q5. Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.
var remainder = 10 % 5;
//Q6. Code an alert that displays the result of a multiplication on 2 numbers.
var mul = 4 * 5;

//Chapter 6
//Q1. Code a short form of x = x + 1; Use either of the two legal expressions.
var x = ++x;
//Q2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
var x = 100;
x = --x;
//Q3. var x = 50;var y = x++;What is the value of y?
var y = 50;
//Q4. var y = 50;var z = --y;What is the value of z
var z = 49;
//Q5. In a single statement, decrement num and assign its original value to newNum.
var x = 5;
x= --x + ++x;
//Q6. In a single statement add 1 to a variable and assign its original value to another variabl
var x = 1;
y =x;
//Q7. Assign a number value to a variable.Increment the variable.Display the new value in an alert
var a = 1;
a++;
alert(a);

//Chapter 7
//Q1. var calculatedNum = 2 + (2 * 6);What is the value of calculatedNum?
var calculatedNum = 2 + (2 * 6);
calculatedNum = 8;
//Q2. var calculatedNum = (2 + 2) * 6;What is the value of calculatedNum?
var calculatedNum = (2 +2)*6;
calculatedNum = 24;
//Q3. var calculatedNum = (2 + 2) * (4 + 2);What is the value of calculatedNum?
var calculatedNum =(2 + 2) * (4 + 2);
calculatedNum = 24;
//Q.4 var calculatedNum = ((2 + 2) * 4) + 2;What is the value of calculatedNum?
var calculatedNum =  ((2 + 2) * 4) + 2;
calculatedNum = 18;
//Q5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
var cost = 2(2*(4+10));
//Q6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20
var cost = 2+2*4+10;
//Q7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
var pressure = 4/(2*4);

//Chapter 8
//Q1. var num = "2" + "2";What is the value of num? Include quotation mark
var num = "2"+"2";
num="22";
//Q2. message = ("Hello," + "Dolly");What is the value of message? (Include the quotation marks.)Alert the statement
alert("Hello"+"Kitty");
//Q3. alert("33" + 3);What message displays in the alert box?
alert("33"+3);
//ans is 333
//Q4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
alert("Pakistan"+"Zindabad");
//Q5. Write a statement that assigns to a variable the concatenation of a string with a number
alert("33"+3);
//Q6. Assign strings to two variables. Then concatenate them and assign the result to a third variable
var a = "Iq";
var b = "ra";
var c = a + b;

//Chapter 9
//Q1. Code a prompt with the message "Enter first name". The user's response is assigned to firstNam
var firstName = prompt("Enter First Name:");
//Q2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
var country = "China";
country = prompt("Country?");
//Q3. Correct this statementvar yourName = prompt(Enter Your Name");
var yourName = prompt("Enter your name:");
//Q4. Code a prompt that specifies a string as the message Include a default input
var input = prompt("Your grade in this semester","A+");
//Q5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.
var message = prompt("Have you done your assignment?");
var response = prompt("Ok, Best of luck!");
var chat = response;

//Chapter 10
//Q1. var city = "Karachi"if (city = "Karachi") {console.log("The City OF Lights")Correct the above statement:Also try this statement by yourself
if (city == "Karachi") {
    console.log("The City OF Lights") };
//Q2. This is the first line of an if statement:if (x === y) {Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.
    if (x == y){
        var box = prompt("Write value of z:");
        var bigBox = box;
    }
//Q3. Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")
if (zipcode=="10010"){
    alert("Karachi")
}
else{
    alert("Please write correct city.")
}
//Q4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;
if(x==4){
    x = 1;
}

//Chapter 11
//Q1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !
if(x != y){
    alert("x is not equal to y")
}
//Q2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable
var x=8;
var y=6;
if (x > y | x==y){
    alert("oh")
}
//Q3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.
if(x != y){
    var z =x;
}
//Q4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.
if(x != y){
    alert("Congratulations!");
}
//Q5. Code a prompt asking for your first name.Code an if statement that tests whether the name you entered is unequal to another name.If the condition is true (it will be), display an alert that says "No match
var name = prompt("Enter name:");
if(name != "Sara"){
    alert("Name not matched!");
}
//Q1. Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.
if(x > y | x == y){
    alert("Great")
}
else{
    alert("better")
}
//Q2. Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and give you grade A/C to Your percentage. (MARKSHEET
function percentage(){
    var grade;
    var marks = prompt("Enter your marks:");
    var percentAge = (marks/100)*100;
    if (percentAge >= 90){
grade = "A+";
    }
    else if(percentAge <90 && percentAge>= 80){
        grade= "A";
    }
    else if(percentAge< 80 && percentAge>= 70){
        grade= "B";
    }  
}

//Chapter 15 (Array I)
 //Q1. Declare an empty array
 var names = [];
 //Q2. Code an array with 1 string element
var array1 = ["ali"];
//Q3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index
var alphabet = ["h","i","j","k"].
document.getElementById("c15q3").innerHTML = "Element at index 3 is "+ alphabet[3];
//Q4 var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
var alphabets = ["h","i","j","k","l","m","n","o"];
document.getElementById("c15q3").innerHTML =  "length of array is "+ alphabets.length;
//5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element
var arr = ["a"];
arr.unshift("b");
alert("Element"+arr[1]+" is added to array.");

//Chapter 16 (Array II)
//Q1. Code an array with 1 string element.Add an additional element to the array using push.Create an alert whose message is the last element
var arr1 = ["me"];
arr1.push("you");
alert("Element "+arr1[1]+" is added by push method");
//Q2. var Alphabet=["h","i","j","k"] Remove the last element from the array Alphabet.
var Alphabet=["h","i","j","k"];
Alphabet.pop();
//Q3. var Alphabet=["h","i","j","k"]Add a new element, a number, to the end of an array.
Alphabet.push("p");

//Chapter 16 (Array III)
//Q1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Remove the first element of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
//2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Add three number elements to the beginning of an array.
sizes.unshift("1","2","3");
//Q3. Declare an array with one element.Add a second element to the beginning of the array.Create an alert whose message is the new first element.
var arr2 = ["ab"];
arr2.unshift("bc");
alert("alement entered is "+arr2[1]);
//4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Insert "L" into the array between "M" and "XL".
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizez.splice(2,0,"L");
//Q5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Copy the first 3 sizes of the array and put them into a new array, regSizes
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var reSizes= sizes.slice(0,3);
//Q6. var pets = ["dog", "cat", "ox", "duck", "frog"].Add 2 elements after "dog" and remove "cat", "ox", and "duck".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,4,"owl","dove");
//Q7. var pets = ["dog", "cat", "ox", "duck", "frog"];Remove "cat" and "ox".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,3);
//Q8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];Reduce it to "duck" and "frog" using slice.
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
pets.slice(3,5);

//Chapter 17 - 20 (for Loops)
//Q1. Write a statement in which loop is to run 10 times.
for(var i=0;i<=10;i++);
//Q2. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops
for(var i=0;i<=12;i++);
//Q3. What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.for var i = 0 i <= 4 i++
for(var i=0; i<=4; i++);
//Q4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.
for(var a=0;a<100;a++);
