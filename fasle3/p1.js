// 33,34,35,36 ****************************************
// var age =23;
// while(age >20){
//     console.log('hollow world')
// };


// var i=1;
// while(i<=10){
//     console.log('meiadnoushadi');
//     i++
// }


// var i = 1;
// while(i<=5){
//     console.log('meiad');
//     i++;
// }


// var num = 5;
// while(num<=10){
//     console.log(num);
//     num++
// };


// var num = 10;

// while(num <= 100 ){
//     if(num%7==0){
//         console.log(num);
//     }
//     num++;
// }


// var num = 100;
// while(num <= 2000){
//     if(num%4==0 && num %7==0 && num %3==0){
//         console.log(num);
//     }
//     num++
// }


// var sum =0,i=1;

// while(i<=50){
//     sum+=i;
//     i++;
// }
// console.log('sum is : '+sum)
// console.log(typeof('sum is : '+sum))

// 37,38 ****************************************
// var i=1;
// do{
//     console.log(i);
//     i++
// }while(i<=15);


// var j =5;
// while(j>=1){
//     console.log(j);
//     i--;
// };

// var k=5;
// do{
//     console.log(k);
//     k--;
// }while(k>=1)

// 39,40,41,42 ****************************************
// var i = 1;
// for (i;i<=5;i++){
//     console.log(i);
// };


// var sum =0;
// for(var num=0;num<=9;num++){
//     console.log(num);
//     sum+=num;
// };
// console.log(sum);


// // addade aval
// var conuter=0,num=598;
// for(var i=0;i<=num;i++){
//     if(num%i==0){
//         conuter++;
//     }
// }
// if(conuter==2){
//     console.log('aval');
// }else{
//     console.log('morakab')
// }

// 43,47 ****************************************

// var num = 4;
// var g = 4;
// var r = 4;
// while(num>=1){
//     console.log(num);
//     num--
// };

// do{
//     console.log(g);
//     g--
// }while(g>=1);

// for(r;r>=1;r--){
//     console.log(r)
// }

// // true:
// console.log(Boolean('text'))
// console.log(Boolean(109))
// console.log(Boolean(-109))
// //false:
// console.log(Boolean(0))
// console.log(Boolean(-0))
// console.log(Boolean(''))

// if(''){
//     console.log('***')
// }

// if(' '){
//     console.log('***')
// }

// 48 ****************************************
// console.log('-------------------')
// var a = '100';
// console.log(typeof(a));
// console.log(a);
// console.log(Number(a));
// console.log(Number(''));
// console.log(Number(' '));
// console.log(Number('meiad'));
// console.log(Number('12 12'));
// console.log('-------------------')
// var b = 100;
// console.log(typeof(b));
// console.log(b);
// console.log(String(b));
// console.log(12.3);
// console.log('-------------------')
// var c = true;
// console.log(c);
// console.log(Number(c));
// console.log(String(c));

// var d = false;
// console.log(d);
// console.log(Number(c));

// var a=' ';
// console.log(a)
// console.log(typeof(a))
// if (a){
//     console.log(a)
// }
// console.log('-------------------')
// b=Boolean(' ')
// console.log(b)
// console.log(b)
// if (b){
//     console.log(b)
// }
// console.log('-------------------')
// c=Number(' ');
// console.log(c)
// console.log(typeof(c))
// if(c){
//     console.log(c)
// }

// 49,50 ****************************************

// for(var i=1;i<=10;i++){
//     console.log(i)
//     if(i>=6){
//         break
//     }
// }


// for(var i=1;i<=10;i++){
//     console.log(i)
//     if(i==5){
//         break
//     }
// }

for (var i=1;i<=10;i++){
    if(i%2==0){
        continue
    }
    console.log(i)
}
