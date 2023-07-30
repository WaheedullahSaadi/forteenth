function clearTable() {
    document.getElementById('tab').innerHTML=""
}
let number=1;
let number2=0;


function table2() {
    clearTable();
    for(let number=1; number<11;number++){

document.getElementById('tab').innerHTML+="2 X "  +number   +" "+    "=" +" "   +number  *2 +"<br>";
    }
}

function table3() {
    clearTable();
    for(let number=1; number<11;number++){

document.getElementById('tab').innerHTML+="3 X "  +number   +" "+    "=" +" "   +number  *3 +"<br>";
    }
}

function table4() {
    clearTable();
    for(let number=1; number<11;number++){

document.getElementById('tab').innerHTML+="4X "  +number   +" "+    "=" +" "   +number  *2 +"<br>";
    }
}

function table5() {
    clearTable();
    for(let number=1; number<11;number++){

document.getElementById('tab').innerHTML+="5X "  +number   +" "+    "=" +" "   +number  *5+"<br>";
    }
}


function table6() {
    clearTable();
    for(let number=1; number<11;number++){

document.getElementById('tab').innerHTML+="6X "  +number   +" "+    "=" +" "   +number  *6 +"<br>";
    }
}


function table7() {
    clearTable(); 
    for(let number=1; number<11;number++){

document.getElementById('tab').innerHTML+="7X "  +number   +" "+    "=" +" "   +number  *7 +"<br>";
    }
}


function table8() {
    clearTable(); 
    for(let number=1; number<11;number++){

document.getElementById('tab').innerHTML+="8X "  +number   +" "+    "=" +" "   +number  *8 +"<br>";
    }
}


function table9() {
    clearTable();
    for(let number=1; number<11;number++){

document.getElementById('tab').innerHTML+="9X "  +number   +" "+    "=" +" "   +number  *9 +"<br>";
    }
}


function table10() {
    clearTable();
    for(let number=1; number<11;number++){

document.getElementById('tab').innerHTML+="10X "  +number   +" "+    "=" +" "   +number  *10 +"<br>";
    }
}

function oddNumbers(){
    clearTable();
    for(number=1;number<51;number+=2){
        document.getElementById('tab').innerHTML+=number +"-"; 
    }
}

function evenNumbers(){
    clearTable();
    for(number2=0;number2<51;number2+=2){
        document.getElementById('tab').innerHTML+=number2 +"-";
    }
}

function fida(isdp){
    clearTable();
    for(number=1;number<11;number++){
        document.getElementById('tab').innerHTML+=isdp+ "x"+number+" = "+number*isdp+"<br>";
    }
    
}

function add() {
    clearTable();
    number2++;
    document.getElementById('let').innerHTML=number2
    
}
function reset() {
    clearTable();
    number2=0;
    document.getElementById('let').innerHTML=number2

    
}