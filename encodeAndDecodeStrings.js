class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for(let word of strs){   
                let wordOne = "";
           encodedStr += 'w'; //String.charCodeAt(w); 
            for(let i=0; i< word.length; i++){ 
               wordOne += 'c'; // String.charCodeAt(c);  
                wordOne += word.charCodeAt(i);  
                wordOne += 'c';// String.charCodeAt(c); 
            }
           encodedStr += wordOne;
           encodedStr += 'w';//String.charCodeAt(w);
        }
        return encodedStr;
    }
    

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [""];

        let word = str.split('w', str.length);
        for(let one of word){
            let  fullword = "";
            if(one.length){
                let chars = one.split('c', one.length);
                // if(chars.length){
                    // }
                    for(let c of chars){
                        if(c.length > 0){
                            // console.log("chars : ", String.fromCharCode(c));
                            fullword += String.fromCharCode(c);

                        }
                        // else{
                            
                        // }
                        

                }


            }
            // console.log("word end", fullword.length)
            if(fullword.length > 0){
                arr.push(fullword)
            }
        }
        
        

        
            // console.log("Inside J :",  word);
                                
        //     // do{

        //     // console.log("Inside B :",  str[j]);
                                
            
        //     //     i=j+1;
        //     // }while(str[i] !== 'c' && i < j + 3)
        //     //         word += sChar;
        //         j=j+1;
        //         // console.log(j)
        //     }while(str[j] !== 'w' && j < str.length)
        //     // while(j<10)//
        //     // i = word.length;
        //     // i = j;
        //     arr.push(word);
        // // }
        return arr;
    }
}


const Sol = new Solution();
// let encodedString = Sol.encode(["Hello","World"]);
// let encodedString = Sol.encode(["Hi","l0"]);
let encodedString = Sol.encode([""]);

console.log("encodedString :", encodedString);
let decodeedString = Sol.decode(encodedString)
console.log(" decodedString :",decodeedString);









// class Solution {
//     /**
//      * @param {string[]} strs
//      * @returns {string}
//      */
//     encode(strs) {
//         let encodedStr = "";
//         for(let word of strs){   
//                 let wordOne = "";
//            encodedStr += 'w'; //String.charCodeAt(w); 
//             for(let i=0; i< word.length; i++){ 
//                wordOne += 'c'; // String.charCodeAt(c);  
//                 wordOne += word.charCodeAt(i);  
//                 wordOne += 'c';// String.charCodeAt(c); 
//             }
//            encodedStr += wordOne;
//            encodedStr += 'w';//String.charCodeAt(w);
//         }
//         return encodedStr;
//     }
    

//     /**
//      * @param {string} str
//      * @returns {string[]}
//      */
//     decode(str) {
//         let arr = [];
//         for(let i=0; i<str.length; i++){
//                 let word = "";
//             if(str[i]== 'w'){ //word started
//                 let sChar = true;
//                 if(str[i+1] == 'c' ){ //singlechar
//                     let wordCondition = true;
//                     let j= i+2;
//                     do{
//                         sChar += String.fromCharCode(Number(str[j]));
//                         if(str[j+1] === 'c'){
//                             sChar = false;
//                         }
//                     }while(wordCondition);
//                     word += sChar;                

//                 }
//             }
//             arr.push(word);
//         }
//         return arr;
//     }
// }
