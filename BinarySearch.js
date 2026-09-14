// function BinarySearch(arr, i, j, x){

//     // const ()

//     while(i <= j){
//         // return "Element no found";
//     // }

//     // else{

//         console.log(`i : ${i}, j : ${j}`)
//         // const mid = Math.floor((i + (j-i))/2);
//         const mid = i + Math.floor((i+ (j - i)) / 2);
//         console.log(`mid : ${mid} , arr[mid] : ${arr[mid]}`);
        
//         if(arr[mid]== x){
//             return arr[mid];
//         }
//         else if(arr[mid] > x){
//             console.log(`arr[mid] > x`)
//              BinarySearch(arr, i ,mid + 1,x)
//         }
//         else if(arr[mid] < x){
//             console.log(`arr[mid] < x`)
//              BinarySearch(arr, mid-1, j,  x);
//         }
//         else{
//             return -1;
//         }
//     }

// }
//          //  0 1 2  3  4
// const arr = [2,5,16,17,90];
// x = 17;
// const result = BinarySearch(arr, 0, arr.length, x );
// console.log("The Final Result is :", result)

function BinarySearch(arr, i, j, x) {
    if (i > j) return -1; // not found

    const mid = i + Math.floor((j - i) / 2);
    console.log(`i: ${i}, j: ${j}, mid: ${mid}, arr[mid]: ${arr[mid]}`);

    if (arr[mid] === x) {
        return mid; // usually you want the index, not the value
    } else if (arr[mid] > x) {
        return BinarySearch(arr, i, mid - 1, x);
    } else {
        return BinarySearch(arr, mid + 1, j, x);
    }
}

const arr = [2, 2, 2, 3, 3, 4, 5, 5, 5, 7, 16, 17, 23, 41, 42, 43, 46, 46, 54, 56, 90, 123, 324, 432, 432, 435, 674]
                                //   1          7          0
const x = 17;
const result = BinarySearch(arr, 0, arr.length - 1, x);
console.log("The Final Result is:", result); // 3