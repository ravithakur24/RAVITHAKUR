 
//   for in 
 function forin(){
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];

    let name = { fname: 'ravi' , lname:'thakur', age: 23 };

    for (let x in day) {
        console.log(x);
        console.log(day[x]);
    }

    for (let y in name) {
        console.log(y);
        console.log(name[y]);
    }
}

// for of

function forof(){
        
    let a={name:'ravi', lname:'tahkur',age:23};

    for(let x in a){
        console.log(x);
        console.log(a[x]);
    }

    let self='ravi thakur';

    for(let y in self){
        console.log(y);
    }

    
}