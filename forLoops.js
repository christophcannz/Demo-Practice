//print ALL numbers between 10 and 19//

for (var i = -10; i < 20; i++) {
    console.log(i);
}

//print all EVEN numbers between 10 and 40//

for (var i = 10; i <= 40; i+=1) {
    if (i % 2 === 0) { //if the number IS even//
        console.log(i);
    }
}

//print all ODD numbers between 300 and 333//
for (var i = 300; i <= 333; i ++) {
    if (i % 2 !== 0) { //if the number is NOT even//
        console.log(i);
    }
}

//print all numbers divisible by 5//
for(var i = 5; i <= 50; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(i)
    }
}