let arr=[12,24,36,48,65]
let sum=0;

for(let i of arr){
    sum+=i
}
console.log("Sum:",sum)

let max=arr[0]
for (let i of arr){
    if(i >max){
        max=i
    }
}
console.log("Max:",max)