// let arr = [1,2,3,4,5];

// let result = arr
//     .filter((num) => num % 2!== 0)
//     .map((num) => num ** 2)
//     .reduce((sum, num) => sum + num, 0);

// console.log(result);

let X = 10;

function outer () {
    console.log(X);
    if (false) {
        var X = 20; // if we use let to declare variavle those answer is 10.
    }
}
outer();