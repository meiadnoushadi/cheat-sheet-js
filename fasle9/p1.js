// var x = 10;
// let y = 11;
// console.log(x)
// console.log(y)
// if(true){
//     var x = 100
//     let y = 111
//     console.log(x)
//     console.log(y)
// }
// console.log(x)
// console.log(y)


// x : dar block main sabet nist 
// y : dar har block meghdare moshakhas dare

// const obj1={
//     name:'meiad',
//     family:'noushadi',
//     propertiy:['music','coding'],
//     function1:function(){
//         return 'ali'
//     },
//     grade:{
//         math:10,
//         sport:20,
//         geometry:18
//     }
// }
// console.log(obj1)     
// console.log(obj1.family)           
// console.log(obj1.name)
// console.log(obj1['propertiy'])
// console.log(obj1.grade.geometry)     



// let array1=[1,2,3];
// let array2=array1;

// console.log(array1);

// array2[0]='meiad';

// console.log(array1);

// const meiad={
//     1:2,
//     2:5,
//     5:13
// }


// const meiad={
//     code:1,
//     lastf:'noushadi',
//     age:30
// };

// const ali={...meiad};

// meiad['code']=43;

// console.log(meiad)
// console.log(ali)


// const meiad={
//     code:1,
//     lastf:'noushadi',
//     age:30,
//     fun1:function(){
//         return this.code+" : "+this.lastf;
//     }
// };
// console.log(meiad.fun1())


// let array1=[1,2,3,4,5,43,3,2,2,1];
// for(let i=0;i<array1.length;i++){
//     console.log(array1[i]);
// };
// for(let i of array1){
//     // console.log(array1[i]);
//     console.log('meiad')
// };

// let name1='meiadnoushadi';
// console.log(name1.length)
// for(let i=0;i<name1.length;i++){
//     console.log('meiad')
// }

// let a1='meiadnoushadi';
// for(let i of a1){
//     console.log(i);
// };


// const b1={
//     name:'ali',
//     family:'rezaiei'
// };

// // for(let i in b1){
// //     console.log(this['i'])
// // }


// console.log('name' in b1)


let num1=10;
let num2=10;
console.log(num1==num2)


const obj1={
    name:'meiad',
    family:'noushadi'
};
const obj2={
    name:'meiad',
    family:'noushadi'
};
console.log(obj1==obj2)
