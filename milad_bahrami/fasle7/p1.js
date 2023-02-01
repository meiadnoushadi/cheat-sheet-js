// 68 ... ************************************
// console.log('first name = meiad')
// console.log('last name = noushadi')
// console.log('age = 30')

function showBio(){
    console.log('first name = meiad');
    console.log('last name = noushadi');
    console.log('age = 30');
};

showBio();

var showBio1=function(){
    console.log('first name = meiad');
    console.log('last name = noushadi');
    console.log('age = 30');
};

showBio1();

function addNumber(num1,num2){
    console.log(num1+num2);
}

addNumber(2,3);

function sum(){
    var total=0;
    for (var i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}
console.log(sum());
console.log(sum(2,3));
console.log(sum(6,55,6));


function sum1(...numbers){
    var total=0;
    for (var i=0;i<numbers.length;i++){
        total+=numbers[i];
    }
    return total;
}
console.log(sum1(6,55,6));

function a(a,b=0){
    var sum=0;
    sum=a+b;
    return sum;
};
console.log(a(1));
console.log(a(1,0));

function isPrime(number){
    for (var i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));

function rangePrime(firstNum,lastNum){
    var result=[];
    for (var i=firstNum;i<lastNum;i++){
        if(isPrime(i)==true){
            result.push(i);
        }
    }
    return result;
}
console.log(rangePrime(10,232));

// Arrow functions
var message=() => console.log('Arrow Functions');
message();

var add = (a,b) => a+b;
console.log(add(3,4));

var power=(num) => num*num;
console.log(power(10));



// call back

// function firstFun(){
//     console.log('f f');
//     secendFun();
// };

// firstFun();

// function secendFun(){
//     console.log('s f')
// };

function firstFun(callBack){
    console.log('f f');
    callBack();
};

firstFun(secendFun);

function secendFun(){
    console.log('s f')
};
