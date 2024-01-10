
// //   for in 
// // function forin() {
// //     let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];

// //     let name = { fname: 'ravi', lname: 'thakur', age: 23 };

// //     for (let x in day) {
// //         console.log(x);
// //         console.log(day[x]);
// //     }

// //     for (let y in name) {
// //         console.log(y);
// //         console.log(name[y]);
// //     }
// // }

// // // for of

// // function forof() {
// //     let month = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
// //     // let a = { name: 'ravi', lname: 'tahkur', age: 23 };

// //     for (let x in month) {
// //         console.log(x);
// //         // console.log(a[x]);
// //     }

// //     let self = 'ravithakur';

// //     for (let y in self) {
// //         console.log(y);
// //     }


// // }

// function sum() {
//     let label = document.createElement('label');

//     label.innerText = self + '\n' + '\n';

//     document.body.appendChild(label);
// }


// function array() {
//     let arr = ['HAPPY', 'NEW', 'YEAR', '2024'];
//     for (self of arr) {
//         sum(arr);

//     }
// }

// function create() {
//     const label = document.createElement('label');
//     label.innertext = null;

//     document.body.appendChild(label);
// }

// function key() {

//     for (let a = 1; a <= 5; a++)
//     {
//         let b = 5 * a;
//         let r = "5 *" + a + "=" + b
//         console.log(r);
//     }

//     // for (null of r) {
//     //     create(r)
//     // }

// }

// function create() {
//     const label = document.createElement('label');
//     label.innertext = null;

//     document.body.appendChild(label);
// }

// function tt() {
//     let array = ['a', 'b', 'c', '7', 'd'];

//     for (null of array) {
//         create(array);
//     }
// }

function keyonlabel(valuestore) {
    let label = document.createElement('label');

    label.innerText = valuestore + '\n' + '\n';

    document.body.appendChild(label);
}

let a = [];

function insert() {
    let message = document.getElementById('message').value;

    a.push(message);

    keyonlabel("value of array");

    for (let x of a) {
        keyonlabel(x);
    }
}

function Remove() {
    a.pop();

    keyonlabel("Value of Array");

    for (let y of a) {
        keyonlabel(y);
    }
}