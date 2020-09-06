'use strict'

var string_span="";

var nodoTabla= document.querySelector("#tabla");

var stringHTML=""

for(let n=0; n<=10;n++){
    stringHTML = stringHTML + "<span><h1>Tabla del "+n+"</h1>";
    console.log('acho')

    for( let i=0; i<10;i++){
        console.log('funcionas?')
        console.log(i)

        stringHTML = stringHTML + "<p>"+ n +" x "+ i +" = "+ (n*i) +"</p>";
    }
    stringHTML = stringHTML +"</span>";
}

nodoTabla.innerHTML = stringHTML;