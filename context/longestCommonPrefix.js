// class Solution {
//     /**
//      * @param {number[]} arr1
//      * @param {number[]} arr2
//      * @return {number}
//      */
//     longestCommonPrefix(arr1, arr2) {
//         let Obj = {};
//         for(let i=0; i < arr1.length; i++){
//             let restArray = String(arr1[i])
//             // Obj[Number(restArray[0])] = (   (Obj[restArray[0] ||= []]).push(restArray)    ||   [restArray]  );

//             if(Obj[Number(restArray[0])]){
//                 Obj[restArray[0]].push([restArray]);
//             }
//             else{
//                 Obj[restArray[0]] = [[restArray]]
//             }
//         }
//             console.log(Obj);



            
//             let FinalPairs = 0;
//         for(let i=0; i<arr2.length; i++){
//             let Currentvalue = String(arr2[i]);
//             // console.log(Currentvalue)
//             if(Obj[Currentvalue[0]]){       //arr2 of 4599 , Obj[4]
//                 // console.log("asdf",'FinalPairs');
                
//                 let Objvalue = Obj[Currentvalue[0]].flat();
//                 console.log("objvalue", Objvalue)   
//                 for(let Objj=0; Objj < Objvalue.length; Objj++){
//                     let pairs = 0;
                
//                     let isGettingPairs = true;
//                     let j=0;
//                     while(j < Currentvalue.length){
//                         if(Objvalue[Objj][j] !== Currentvalue[j]){
//                             isGettingPairs = false;
//                             // console.log("Pair is reset : ", pairs);
//                             break;
//                         }
//                         pairs ++;
//                         j++;
//                     }
//                     FinalPairs = FinalPairs < pairs ?  pairs : FinalPairs;
                    
//                 }

                
//             }
            
//         }
//         return FinalPairs;
//     }
// }






class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number}
     */
    longestCommonPrefix(arr1, arr2) {
        const prefixes = new Set();
        for (let value of arr1){
            // console.log("every value of arr1", value)

            while (value) {
                prefixes.add(value);
                value = Math.floor(value / 10);
            }
        }
        console.log(prefixes);
        let answer = 0;
        for (let value of arr2) {
            while (value && !prefixes.has(value)){   //we will break the values if we don't get any match
                console.log("every letter",  value && !prefixes.has(value), value)
                value = Math.floor(value / 10);
            }
            
            if (value) answer = Math.max(answer, String(value).length);
        }
        return answer;
    }
}


let Sol = new Solution();
// arr1=[456,12, 45944, 88888, 4599, 4444]
// arr2=[4599,8]
arr1=[7,89]
arr2=[10,66,]
// arr1=[3334]
// arr2=[498,2341,4370,188,7209,2740,266,7187,4557,7200,7534,3799]
// arr1=[1984,4916,6346,5750]
// arr2=[1654,7593,7121,3766,7980,4824,1995,2293,2133,7898,8056]
let result = Sol.longestCommonPrefix(arr1, arr2)
console.log("result",result);

// let ans = 289146234;
// while (ans){
//     // console.log("ans", ans)
//     ans = Math.floor(ans/10);
// }