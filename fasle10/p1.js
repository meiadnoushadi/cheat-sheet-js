// let element=document;
// console.log(element);

// let element=document.getElementById('myid');
// console.log(element);
// console.log(typeof(element));


// let elements = document.getElementsByTagName('h1');
// console.log(elements);
// console.log(elements[1]);


// let elements = document.getElementsByClassName('class1');
// console.log(elements);
// console.log(elements[1]);


// let element=document.querySelector('p');
// console.log(element);


// let element=document.querySelectorAll('p');
// console.log(element);


// let element=document.querySelector('.container');
// console.log(element.nodeName);
// console.log(typeof(element.nodeName));

// console.log(element.nodeType);
// console.log(typeof(element.nodeType));

// console.log(element.parentNode);
// console.log(typeof(element.parentNode));

// console.log(element.firstChild);
// console.log(typeof(element.firstChild));

// console.log(element.lastChild);
// console.log(typeof(element.lastChild));

// console.log(element.innerHTML);
// console.log(typeof(element.innerHTML));

// console.log(document.body)
// console.log(typeof(document.body));

// console.log(document.documentElement);
// console.log(typeof(document.documentElement));

// let element=document.querySelector('.container');
// console.log(element.innerHTML);

// let element1=document.querySelector('.child')

// start video 112


// document.getElementById('id').className='box2'

// let div = document.getElementById('box');

// console.log(div.title);
// console.log(typeof(div.getAttribute('id')));
// console.log(div.setAttribute('title','meiad'));
// console.log(div.removeAttribute('title'));

// let div = document.getElementById('style');

function randNum(){
    return Math.floor(Math.random()*256);
};
function randColor(){
    return `rgb(${randNum()},${randNum()},${randNum()})`
};
function changeColor(){
    document.body.style.backgroundColor=randColor();
}

console.log(randNum())
console.log(randColor())











