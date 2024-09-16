// 16-9-24
// ................................................Sychronous  (Line by line show hoga)....................................................
// console.log("one");
// console.log("two");
// console.log("three");

// ......................................Asychronous  (phalay start show hoga phir end hoga then hello world last may show hoga )........................................................................
// console.log("start");
// setTimeout(()=>{
//     console.log("hello world");
// }, 5000);
// console.log("End");

// ......................................................call back...............................................................
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback) {
//     sumCallback(a,b)
// }
// calculator(3,5,sum)


//......................................................Callback hell (data 1 kay 2sec kay baath data 2 ayga)...................................................................................
// function getData(dataId,getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
    
// }
// getData(1,()=>{
//     console.log("loading for data 2");
//     getData(2,()=>{
// console.log("loading for data 3");
//     })
// })

// ......................................................Promises.............................................................................................
// let promise = new Promise((resolve, reject)=>{
//     console.log("This is a promise");
//           resolve("I am resolved")        
// })

let promise = new Promise((resolve, reject)=>{
    console.log("This is a promise");
          reject("Some error caught")        
})

