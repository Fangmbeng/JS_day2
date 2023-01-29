//Exercise 1: Write a function called toCelcius that takes in a number representing 
//temperature in Fahrenheit and converts the number into Celcius.

function tocelcius(x){
    return (x - 32) * 5/9
};

console.log(tocelcius(212));

//Exercise 2: Create a class for a User that sets username and password property
//on creat on. Add a method to change the user's password. The method should take in 
//the old password and new password. If the old password is wrong do not reset the password.
//Create an instance of the new user and then change their password using the method.

class user{
    constructor(name, password){
        this.name = name
        this.password = password
    }

    adduser(oldpassword, newpassword){
        if(oldpassword === this.password){
            this.password = newpassword
            console.log('This ${this.name} has changed his ${this.password}')
            console.log(this.data.push(newpassword))
        }else (console.log('Sorry ${this.password} is incorrect'))
    };
}

let brandon = new user("atonte", "Brandon123");
console.log(brandon);
brandon.adduser("Brandon123", "Atonte44")



//Exercise 3: Write a function that takes in an array of integers and returns
//an array of the negative integers squared using Array methods

//Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
//Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
//Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []

let num = [-10, -3, 4, -2, 8, 9, -3];
let y = [];

function squareNegatives(x){
    for (let i of x){
      if(i<0){
        console.log(y.push(Math.pow(i,2)))
      };
    };console.log(y)  
};

console.log(squareNegatives(num));