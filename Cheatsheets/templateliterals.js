console.log(`first line
second line`);

const x = 2;
const y = 3;

console.log(`The sum of x and y is ${x + y}.
The product of x and y is ${x * y}.`);


var a = 5;
var b = 10;

function foo(strings, ...values) {
    console.log("." + strings[0] + ".");
    console.log("." + strings[1] + ".");
    console.log("." + strings[2] + ".");
    console.log("." + strings[3] + ".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
}

foo`Sum ${a + b}
Product ${a * b}
Division ${b / a}`;

function foo2(strings, ...values) {
    let a = values[0];
    let b = values[1];

    return `Sum ${a + b}
Product ${a * b}
Division ${b / a}`;
}

console.log(foo2`Num1 ${a + 10}
Num2 ${b * 2}
Num3 ${b / a}`);
