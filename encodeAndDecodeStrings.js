class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedStr = "";
    for (let word of strs) {
      let wordOne = "";
      encodedStr += "w"; //String.charCodeAt(w);
      for (let i = 0; i < word.length; i++) {
        wordOne += "c"; // String.charCodeAt(c);
        wordOne += word.charCodeAt(i);
        wordOne += "c"; // String.charCodeAt(c);
      }
      encodedStr += wordOne;
      encodedStr += "w"; //String.charCodeAt(w);
    }
    return encodedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  

	decode(str) {
  const parts = str.split("w");
  const res = [];
	// console.log(parts)

  for (let i = 1; i < parts.length; i += 2) {
    let word = "";
    for (const c of parts[i].split("c")) {
			
      if (c.length > 0) word += String.fromCharCode(Number(c));
    }
    res.push(word);
  }
  return res;
}
}

const Sol = new Solution();
let encodedString = Sol.encode(["Hello","World"]);
// let encodedString = Sol.encode(["Hi", ""]);
// let encodedString = Sol.encode(["", ""]);

console.log("encodedString :", encodedString);
let decodeedString = Sol.decode(encodedString);
console.log(" decodedString :", decodeedString);

// decode(str) {
  //   let arr = [];

  //   // let word = str.split("w");
	// 	let word = str.slice(1, -1).split("w");
  //   for (let one of word) {
  //     let fullword = "";
  //     if (one.length > 0) {
  //       let chars = one.split("c");
  //       if (chars.length) {
  //         for (let c of chars) {
  //           // console.log("chars : ", String.fromCharCode(c));

  //           if (c.length > 0) {
  //             fullword += String.fromCharCode(c);
  //           }
  //         }
  //       }
  //     }
	// 		arr.push(fullword);
  //   }
  //   return arr;
	// }

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
