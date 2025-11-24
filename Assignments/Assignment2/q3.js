let name="Kalai";
let msg=`Hello, ${name}! Welcome to Javascript`;
console.log(msg);

let upper=name.toUpperCase();
console.log("Uppercase",upper);

if(msg.length>10){
    console.log("Message has more than 10 characters.")
}
else{
    console.log("Message has less than 10 characters.")
}

if(msg.includes("Javascript")){
    console.log("Message contains the word Javascript.")
}
else{
    console.log("Message does not contain the word Javascript.")
}