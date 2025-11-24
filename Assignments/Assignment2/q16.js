function placeorder(callback){
    setTimeout(() => {
        console.log("🛒 order placed");
        callback();
    }, 1000);
}

function cookfood(callback){
    setTimeout(() => {
        console.log("🍽️ food cooking");
        callback();
    }, 2000);
}

function deliverFood() {
  setTimeout(() => {
    console.log("🍔 Food delivered");
  }, 1500);
}

placeorder(() => {
  cookfood(() => {
    deliverFood();
  });
});