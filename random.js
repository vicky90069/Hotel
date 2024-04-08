// const notes=require('./notes.js');
// console.log('server file is available');
// var _ = require('lodash');

const { json } = require("express");

// var age=notes.age;
// var result=notes.addNumber(age+10,10);

// const addNumber=notes.addNumber(age+10,10);
// console.log(age);
// console.log(addNumber);
// console.log("this is here");
// console.log(result);

// var data=["persion","persion",1,2,3,4,'name','age','2']
// var filter=_.uniq(data);
// console.log(filter);

// const jsonString = '{"name":"john", "age":30, "city":"delhi"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

const objectToConvert = {
    name: "vicky",
    age: 25,
    city: "delhi"
};

const jsonString = JSON.stringify(objectToConvert);
console.log(jsonString.name);




