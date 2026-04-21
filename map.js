// let map = new Map();

// map.set('Name','Manoj Kumar Meena')
// console.log({}+[])

// function abc(){
//     return{
//         a:1
//     }
// }
// console.log(abc())

let arr = [10,10,20,30,4,40,30,20]

function duplicate(){
    return Math.max(...arr)
}
// console.log(duplicate())

let arr2 = arr.reduce((acc,curr)=>{
    return acc>curr?acc:curr
})
console.log(arr2)