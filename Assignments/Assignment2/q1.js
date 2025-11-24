let num = parseInt(prompt("Enter a number:"));

if(num%2==0){
    console.log(num ,"is Even");
}
else{
     console.log(num ,"is Odd"); 
}

if(num>0){
    console.log(num ,"is Positive");
}
else if(num<0){
    console.log(num ,"is Negative");
}
else{
    console.log(num ,"is Zero");
}

if(num % 3 == 0 && num % 5== 0){
    console.log(num ,"is divisible by 3 and 5");
}
else if(num % 3 == 0){
    console.log(num ,"is divisible by 3");
}
else{
    console.log(num ,"is divisible by 5");
}