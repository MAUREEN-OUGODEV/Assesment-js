// 1. Write a function that takes in a string and returns it when reversed
//  let food = "eating"
function stringreverse(food){

}




// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
let num = [2,8,0,23,5,45,76]
Target = 23

function dividing(num){
if(num.length <=1){
    return num
}
let middle =Math.floor(num.length/2)
let left = num.slice(0,middle)
let right = num.slice(middle)

return sortArray(dividing(left),dividing(right))
}

function sortArray(left,right){
let empty =[]
while(left.length && right.length){
    if(left[0]< right[0]){
        empty.push(left.shift())
    }
    else{ 
        empty.push(right.shift())
    }
}
return [...empty,...right,...left]

}
console.log(dividing(num))
function 


// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for(let i=0;i<=100;i++){
    if(i%3==i%5){
        console.log("fizzBuzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}


// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
 let numArray = [12,87,45,75,23,64,73];

function multiplied(numArray){
    let multipliy =4
    for(let i=0;i<numArray.length-1; i++){
       
        multipliy *= numArray

        
    }
    return multipliy
}
console.log(multiplied(numArray))



// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
 let nums = ["10","24","45","56","67"]
function ArrayString(nums){
   for (i=0;i<nums.length;i++){
console.log(parseInt(nums[i]))
   }
}
ArrayString(nums)