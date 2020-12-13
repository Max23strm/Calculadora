let pantalla=document.querySelector(".screen");
let TotalMomentaneo=0;
let buffer=0;
const botones=document.getElementById("botones");
let TotalFinal;
let numero;
let simboloPrevio="";


////////////Clickeo de botones///////
function clickeoDeBotones(){
    botones.addEventListener("click", function(event){
        buttonClick(event.target.innerText);
    })
}

clickeoDeBotones()

////////Filtro de botones//////////////
function buttonClick(value){
    if (isNaN(value)){
        funcionDeSimbolos(value);
    } else {
        funcionDeNumeros(value);
    }

};

///////////////////Manejo de clickeo de números///////////////
function funcionDeNumeros(value) {
    if(buffer===0){
        pantalla.innerText=value.toString();
        buffer=value
  
    } else{
        pantalla.innerText+=value.toString();
buffer+=value
    }
};

///////////////////Manejo de clickeo de símbolos///////////////
function funcionDeSimbolos(value) {
    switch (value){
        case "C":
            pantalla.innerText="";
            buffer=0;
            TotalMomentaneo=0;
            TotalFinal=0;
            break;
        case "↼":
            pantalla.innerText=pantalla.innerText.substr(0, pantalla.innerText.length-1)
            buffer=pantalla.innerText;
            break;
        case "=":
            mates();
            pantalla.innerText=TotalFinal;
            buffer=0;
            TotalMomentaneo=TotalFinal;
            TotalFinal=0;
            break;
            case "+": //mas
            case "−"://menos
            case "×"://multiplicacion
            case "÷"://dividir
            procesoMatematico(value);
            break;
        }
    };



    ////La matematica///
    


    function procesoMatematico(value){
        
        
        switch (value){
            case "+":
                numero=parseInt(buffer);
                if(TotalMomentaneo===0){
                    TotalMomentaneo=numero;
                    simboloPrevio="+"
                } else{
                    mates();
                    simboloPrevio="+";
                    //TotalMomentaneo+="+";
                }
                pantalla.innerText+="+";
                buffer=0;
                break;
            case "−":
                numero=parseInt(buffer);
                if(TotalMomentaneo===0){
                    TotalMomentaneo=numero;
                    simboloPrevio="−"
                } else{
                    mates();
                    simboloPrevio="−";
                    //TotalMomentaneo+="−";
                }
                pantalla.innerText+="−";
                buffer=0;
                break;
            case "×":
                numero=parseInt(buffer);
                if(TotalMomentaneo===0){
                    TotalMomentaneo=numero;
                    simboloPrevio="×"
                } else{
                    mates();
                    simboloPrevio="×";
                   // TotalMomentaneo+="×";
                }
                pantalla.innerText+="×";
                buffer=0;
                break;
            case "÷":
                numero=parseInt(buffer);
                if(TotalMomentaneo===0){
                    TotalMomentaneo=numero;
                    simboloPrevio="÷"
                } else{
                    mates();
                    simboloPrevio="÷";
                //    TotalMomentaneo+="÷";
                }
                pantalla.innerText+="÷";
                buffer=0;
                break;
                }
        };
        
            
            function mates (){
            let bufferconv=parseInt(buffer);
            if (simboloPrevio==="+"){
                TotalFinal= TotalMomentaneo+bufferconv;
                TotalMomentaneo+=bufferconv;
            } else if (simboloPrevio==="−"){
                TotalFinal= TotalMomentaneo-bufferconv;
                TotalMomentaneo+=bufferconv;
            } else if (simboloPrevio==="×"){
                TotalFinal= TotalMomentaneo*bufferconv;
                TotalMomentaneo+=bufferconv;
            } else if (simboloPrevio==="÷"){
                TotalFinal= TotalMomentaneo/bufferconv;
                TotalMomentaneo+=bufferconv;
            }
            
        }