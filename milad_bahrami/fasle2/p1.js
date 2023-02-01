// 24 ***************************************
// if (true || true){
//     console.log('true');
// };


// var age = 20;
// if (age>18){
//     console.log('true')
// }
// 25 ***************************************
// var gender = 'male';
// if (gender == 'male'){
    //     console.log('تو پسری')
// }
// if (gender == 'famle'){
//     console.log('تو دختری')
// }


// var age = 20;
// var gender = 'male';
// if (gender == 'male' && age >= 20){
//     console.log('تو پسری')
// };


// var age = 25;
// var gender = 'male';
// if (age >= 20){
//     console.log(age + '> 20')
// };
// if (age >= 25){
//     console.log(age + '> 25')
// };
// if (age >= 30){
//     console.log(age + '> 30')
// };
// 26 ***************************************
// var name = 'meiad';
// if (name=='ali'){
//     console.log(name + ' = meiad')
// }else{
//     console.log(name + ' = meiad')
// };


// var num = 20;
// if (num%2==0){
//     console.log('even')
// }else{
//     console.log('odd')
// }
// 27 ***************************************
// var age = 25;
// if (age>18){
//     console.log('+18')
// }else{
//     console.log('-18')
// };


// var num = -10;
// if (num > 0 ){
//     console.log(num)
// }else{
//     console.log(-num)
// };

// var num = 11;
// if (num %2==0){
//     console.log('even')
// }else{
//     console.log('odd')
// };
// 28,29 ***************************************
// var age = 25;
// if (0>=age || age<10){
//     console.log('0 : 10')
// }else if (10>=age || age<20){
//     console.log('10 : 20')
// }else if (20>=age || age<30){
//     console.log('20 : 30')
// }else{
//     console.log('out of range')
// };
// 30 ***************************************
// var gender = 'male';
// var age = 19;

// if(gender=='male'){
//     if(age>18){
//         console.log('male +18')
//     }else{
//         console.log('male -18')
//     }
// }else{
//     if(age>18){
//         console.log('female +18')
//     }else{
//         console.log('female -18')
//     }
// }

// 31,32 ***************************************
var number = 20;
switch(number){
    case 1:
        console.log('number is '+number);
        break;
    case 2:
        console.log('number is '+number);
        break;
    default:
        console.log('number not valid')
};


var day = 8;
switch(day){
    case 0:
        console.log('sat');
        break;
    case 1:
        console.log('sun');
        break;
    case 2:
        console.log('mon');
        break;
    case 3:
        console.log('tus');
        break;
    case 4:
        console.log('wid');
        break;
    case 5:
        console.log('ter');
        break;
    case 6:
        console.log('fri');
        break;
    default:
        console.log('number days out of range')
};