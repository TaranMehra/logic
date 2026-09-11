// const numbers = [533, 22, 8, 97, 43, 1];

// function findBigNumFn(arr){

//     let biggestNumber = 0;

//     for(let i=0; i<= arr.length; i++){
//         if(biggestNumber<arr[i]){
//          biggestNumber =  arr[i];
//         }
//         console.log(i)
//     }
//     return biggestNumber;
// }
// const num = findBigNumFn(numbers);

// console.log("The biggest number is : " , num); // Output: 97







const arr = [533, 22, 8, 97, 43, 1];


    let biggestNumber = arr[0];

    for(let i=0; i<= arr.length; i++){
        if(biggestNumber<arr[i]){
         biggestNumber =  arr[i];
        }
        console.log(i);
    }

console.log("The biggest number is : " , biggestNumber); // Output: 97
