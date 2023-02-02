// alert('سلام');

// log to console

// console.log('hello console')

// console.table({1:'m',2:'r',3:'q',4:'c'})

// console.table([1,2,3,4])

// console.time('a')
// console.log('meiad')
// console.timeEnd('a');

// let name
// console.log(name)

// const name
// console.log(name)

// const nameA='lia'
// console.log(nameA)

// const person={
//     name:'ali',
//     age:25
// };
// person.name='meiad';
// console.log(person)


// const age=null
// console.log(age)

// const sym=Symbol()
// console.log(sym)


// val=444;
// console.log(val);
// console.log(typeof val);
// console.log(val.length)

// console.log(new Date())
// console.log(typeof new Date())

// console.log(Number('ali'))

// cars=['m','cars.map(i=>{
//     console.log(i)
// })
// cars=['n','r','k']
// cars.forEach(i => {
//     console.log(i)
// });

let person = new Map();
person.set('person1',{
    firstName:'meiad',
    lastName:'noushadi'
});
//
// console.log(person)

person.set('person2',{
    firstName:'ali',
    lastName:'reazaei'
})

person.set('string','just a text')
console.log(person)

console.log(person.get('person1'))
console.log(person.get('string'))
console.log(person.get('person1').firstName)