let marks = parseInt(prompt("Enter the mark scored: "))
let age = parseInt(prompt("Enter the age : "))

if(marks<=100 && marks<85){
    console.log("Grade A");
}
else if(marks<=85 && marks<65){
    console.log("Grade B");
}
else if(marks<=65 && marks<55){
    console.log("Grade C");
}
else if(marks<=55 && marks<40){
    console.log("Grade D");
}
else{
    console.log("Fail");
}

if(age<18){
    console.log("Minor");
}
else{
    console.log("Adult");
}