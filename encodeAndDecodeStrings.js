class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        for(let c of strs){
        console.log(c.charCodeAt(0));
        // console.log(String.fromCharCode(this.encode('t')))

    }

    }

    /**
     * @param {string} str
     * @returns {string[]}
    */
    decode(str) {
    }
}


let Sol = new Solution();
let strs = ["&", "taran"]
let input = Sol.encode(strs);
// let output = Sol.decode(strs)