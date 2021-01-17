//1.
var obj = { name: 'RajiniKanth', age: 33, hasPets: false };

function printAllValues(obj) {
    // your code here
    var myArray = Object.values(obj);
    console.log(myArray)
}
printAllValues(obj)

//2.
var obj = { name: 'RajiniKanth', age: 33, hasPets: false };

function printAllKeys(obj) {
    // your code here
    var myArray = Object.keys(obj);
    console.log(myArray)
}
printAllKeys(obj)

//3.
var object = { name: 'ISRO', age: 35, role: 'Scientist' };

function convertListToObject(obj) {
    return Object.entries(obj);
}
console.log(convertListToObject(object));

//5.
var array = [
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
];

function fromListToObject(arr) {
    var newObject = {};
    for (var i = 0; i < arr.length; i++) {
        let key = arr[i][0];
        let value = arr[i][1];
        newObject[key] = value;
    }
    return newObject;
}
console.log(fromListToObject(array));

//9.
var students = [{
        name: 'Siddharth Abhimanyu',
        age: 21
    },
    {
        name: 'Malar',
        age: 25
    },
    {
        name: 'Maari',
        age: 18
    },
    {
        name: 'Bhallala Deva',
        age: 17
    },
    {
        name: 'Baahubali',
        age: 16
    },
    {
        name: 'AAK chandran',
        age: 23
    },
    {
        name: 'Gabbar Singh',
        age: 33
    },
    {
        name: 'Mogambo',
        age: 53
    },
    {
        name: 'Munnabhai',
        age: 40
    },
    {
        name: 'Sher Khan',
        age: 20
    },
    {
        name: 'Chulbul Pandey',
        age: 19
    },
    {
        name: 'Anthony',
        age: 28
    },
    {
        name: 'Devdas',
        age: 56
    }
];

function returnMinors(arr) {
    var newObj = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age < 20) {
            newObj.push(arr[i]);
        }
    }
    return newObj;
}
console.log(returnMinors(students));