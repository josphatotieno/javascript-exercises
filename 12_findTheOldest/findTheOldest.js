const findTheOldest = function(arr) {
    const newArr = [];

    arr.forEach((obj) => {
        if(!obj.hasOwnProperty('yearOfDeath')) {
            newArr.push({name: obj.name,age: new Date().getFullYear() - obj.yearOfBirth});
            
        } else {
            newArr.push({name: obj.name,age: obj.yearOfDeath - obj.yearOfBirth})
        }
    })

    return newArr.sort((a,b) => b.age - a.age)[0];
   
};

// Do not edit below this line
module.exports = findTheOldest;
