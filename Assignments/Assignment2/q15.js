let expense=[2000, 1500, 3500, 4000]

function spent(arr){
    let sum=0;
    for (let i=0;i<expense.length;i++){
        sum+=arr[i];
    }
    console.log("Total money: ₹" + sum);
}

spent(expense);