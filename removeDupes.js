//given an array, remove duplicate values from it. Do it in place (do not create a new array to do this with). If you're having difficulty, its okay to try an baby step it first by using a new array and making it work that way.

//using an object
function removeDupes(arr){
    let values = {};
    for (let i=0;i<arr.length;i++) {
        values[arr[i]]?null:values[arr[i]]=1;
    }
    return Object.keys(values);
}
console.log(removeDupes([3,6,7,3,2,7,7,9,0,1])) //output-> [3,6,7,2,9,0,1]






//using Set
let removeDupes = arr => newArr = [...new Set(arr)];
console.log(removeDupes([3,6,7,3,2,7,7,9,0,1])) //output-> [3,6,7,2,9,0,1]

