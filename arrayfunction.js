const arr=[1,2,3,4,5]
function sumofarray(a){
    var sum=0
for (var i=0;i<a.length;i++){
    sum = sum + a[i]
}
return sum
}
const result = sumofarray(arr)
console.log(result)
console.log(arr)
