function BinarySearch(arr, i, j, x){

    // const ()

    while(i < j){
        // return "Element no found";
    // }

    // else{

        console.log(`i : ${i}, j : ${j}`)
        const mid = Math.floor((i + (j-i))/2);
        console.log(`mid : ${mid} , arr[mid] : ${arr[mid]}`);
        
        if(arr[mid]== x){
            return arr[mid];
        }
        else if(arr[mid] > x){
            console.log(`arr[mid] > x`)
             BinarySearch(arr, i ,mid + 1,x)
        }
        else if(arr[mid] < x){
            console.log(`arr[mid] < x`)
             BinarySearch(arr, mid-1, j,  x);
        }
        else{
            return -1;
        }
    }

}
         //  0 1 2  3  4
const arr = [2,5,16,17,90];
x = 17;
const result = BinarySearch(arr, 0, arr.length, x );
console.log("The Final Result is :", result)