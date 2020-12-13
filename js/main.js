let totalMomento=0;
let buffer="0";
let operadorPrevio; 
let botones=document.getElementById("botones");
let previoOperador=null;
const pantalla=document.querySelector(".screen");

function buttonClick(value){
    if(isNaN(value)){
        manejoSimbolo(value);
    }else{
        manejoNumero(value)
    }
    pantalla.innerText=buffer;
};
function manejoSimbolo(symbol){
    console.log("handleSymbol", symbol)
    switch(symbol){
        case "C":
            buffer="0";
            totalMomento=0;
            break;
        case "=":
            if(previoOperador===null){
            //need two numbers
            return;
            } flushOperation(parseInt(buffer));
            previoOperador=null;
            buffer= totalMomento;
            totalMomento=0;
            break;
        case "↼":
            console.log(buffer);
            if (buffer.length===1){
                buffer="    ";
            } else {
                
                buffer.substr( 0, buffer.length -1);
                console.log("Ya procesado", buffer);
                
            }
        break;    
        case "+": //mas
        case "−"://menos
        case "×"://multiplicacion
        case "÷"://dividir
            matematicasHijo(symbol);
            break;
        }
}
    
function matematicasHijo(symbol){
        if(buffer===0){
            //nada
            return;
        }
        const intBuffer=parseInt(buffer);
        
        if(totalMomento===0){
            totalMomento=intBuffer;
        } else{
            flushOperation(intBuffer)
        }
        buffer="0";
        previoOperador=symbol;
    }

function flushOperation(intBuffer){
    if(previoOperador==="+"){
        totalMomento+=intBuffer;
    } else if (previoOperador ==="-"){
        totalMomento-=intBuffer;
    } else if(previoOperador==="×"){
        totalMomento*=intBuffer;
    } else if (previoOperador==="÷"){
        totalMomento/=intBuffer;
    }
}


/*    switch(previoOperador){
    case "+":
        totalMomento += intBuffer;
        break
    case "-":
    totalMomento -= intBuffer;
    break
    case "×":
        totalMomento *= intBuffer;
        break
    case "÷":
        totalMomento /= intBuffer;
        break
    
}*/


function manejoNumero(numberString){
    if(buffer==="0"){
        buffer= numberString;
    }else{
        buffer= buffer+numberString
    }
}
function init(){
    botones.addEventListener("click", function(event){
        buttonClick(event.target.innerText);
      })
}
init();