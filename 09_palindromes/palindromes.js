const palindromes = function (str) {
    // console.log(str.split('').reverse().join('') === str);
    const newStr = str.toLowerCase().match(/[a-z]/g).reverse().join('');
    // console.log(newStr);

    return newStr === str.toLowerCase().match(/[a-z]/g).join('');
};
// console.log(palindromes('racecar!'));


// Do not edit below this line
module.exports = palindromes;
