let totalSeats=120;
let bookedSeats=78;

let availSeat=totalSeats-bookedSeats
console.log("Available seats:",availSeat)

if(availSeat<20){
    console.log("Almost full");
}
else if(availSeat>20 && availSeat<60){
    console.log("Moderate Availability");
}
else if(availSeat>60){
    console.log("Plenty of Seats Available");
}