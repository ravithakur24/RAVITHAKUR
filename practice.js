function printvalue(){
    let fname="";
    let lname="thakur";

    let concatenatedstring = coll(fname,lname);

    document.getElementById('yru').innerText=concatenatedstring;
}

function coll(fname,lname){

    if (fname==''|| fname=='null'){
        return "enter the fname";
    }
    if(lname==''||fname=='null'){
        return "enter the lname";
    }

    let fullstring= fname+''+lname;
    return fullstring;
}

function aa(){
    let mm=document.getElementById("bb").value;
    document.getElementById("abc").innerText=mm;
}

function forloop(){
   

    let month=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

    for( let x=3;x<month.length;x++){
        console.log(month[x]);
    }
}
function whileloop(){
x=0;
while(x<=10){
    var mul =10*x;
    console.log("10*"+x+"="+null);
    x++
}
}


function create(labelprint){
    let label=document.createElement('label');
    label.innerText=labelprint +'\n';
    document.body.appendChild(label);
}
 function forof(){
    let day=['sun','mon','tue','wed','thru','fri','sat'];

    for(let x of day){
        console.log(x);
    }

    let str='ravithakur';

    for(let z of str){
        console.log(z);
        create(z);
    }
 }