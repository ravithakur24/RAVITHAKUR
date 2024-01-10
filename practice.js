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


function forloop(){
    let a=9;

    let month=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

    for( let x=0;x<month.length;x++){
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
