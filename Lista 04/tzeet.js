/*
Referências:

https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/#:~:text=A%20melhor%20maneira%20de%20fazer,alternar%20seu%20estado%20on%20%2F%20off%20.
https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
https://forum.scriptbrasil.com.br/topic/118883-resolvido%C2%A0como-aumentar-um-text-%C3%A1rea-automaticamente/

*/


//---------------------------------------------------

//MODAL ABAIXO

//---------------------------------------------------


function contadorCaracteresTzeetModal(){


//O método addEventListener() permite configurar funções a serem chamadas quando um evento especificado acontece
//O KeyUp é um evento que acontece depois da tecla digitada
  document.querySelector("#txtPensamentoModal").addEventListener("keyup", function(){
        
    if(this.value.length > 0 && this.value.length < 100){ 
    
       document.querySelector("#contadorModal").style.color = "black"; // Preto
       document.querySelector("#contadorModal").innerHTML = 140 - this.value.length; //Valor de caracteres faltando para chegar em zero
    
    }
    if(this.value.length > 99 && this.value.length < 141){
    
       document.querySelector("#contadorModal").style.color = "rgb(255, 200, 0)"; //Amarelo
       document.querySelector("#contadorModal").innerHTML = 140 - this.value.length; //Valor de caracteres faltando para chegar ou igual a zero 

    } 
    if(this.value.length > 140){
    
       document.querySelector("#contadorModal").style.color = "rgb(255, 0, 0)"; //Vermelho
       document.querySelector("#contadorModal").innerHTML = 140 - this.value.length; //Valor de caracteres passadas do limite 
    
    }
   $(".modal-backdrop").css("display","none"); 
  }
  )
}

contadorCaracteresTzeetModal();

//Função relacionada ao evento do botão enviar.
function disabledBotaoModal(){
  
 document.querySelector("#txtPensamentoModal").addEventListener("keyup", function(){
  
    if ( ( document.querySelector("#txtPensamentoModal").value === '')  || (this.value.length > 140) ){
          document.querySelector("#butaoEnviarModal").disabled = true;
    }
    else{
          document.querySelector("#butaoEnviarModal").disabled = false;
    }
  
  })  
}

disabledBotaoModal();


//----------------------------------------------------

// Lógica do contador de caracteres abaixo

//----------------------------------------------------



function contadorCaracteresTzeet(){

//O método addEventListener() permite configurar funções a serem chamadas quando um evento especificado acontece
//O KeyUp é um evento que acontece depois da tecla digitada
  document.querySelector("#txtPensamento").addEventListener("keyup", function(){
        
    if(this.value.length > 0 && this.value.length < 100){ 
    
       document.querySelector("#contador").style.color = "black"; // Preto
       document.querySelector("#contador").innerHTML = 140 - this.value.length; //Valor de caracteres faltando para chegar em zero
    
    }
    if(this.value.length > 99 && this.value.length < 141){
    
       document.querySelector("#contador").style.color = "rgb(255, 200, 0)"; //Amarelo
       document.querySelector("#contador").innerHTML = 140 - this.value.length; //Valor de caracteres faltando para chegar ou igual a zero 

    } 
    if(this.value.length > 140){
    
       document.querySelector("#contador").style.color = "rgb(255, 0, 0)"; //Vermelho
       document.querySelector("#contador").innerHTML = 140 - this.value.length; //Valor de caracteres passadas do limite 
    
    }

  })
}

contadorCaracteresTzeet();

//Função relacionada ao evento do botão enviar.
function disabledBotao(){
  
 document.querySelector("#txtPensamento").addEventListener("keyup", function(){
  
    if ( ( document.querySelector("#txtPensamento").value === '')  || (this.value.length > 140) ){
          document.querySelector("#butaoEnviar").disabled = true;
    }
    else{
          document.querySelector("#butaoEnviar").disabled = false;
    }
  
  })  
}

disabledBotao();



//Função para aumentar o tamanho da txtArea
 
function aumentarTxtArea(){

  document.querySelector("#txtPensamento").addEventListener("keyup", function(){

   if(this.scrollHeight > this.offsetHeight){ 
    this.rows += 1;                                                                                                                                              
    }
  })  
}

aumentarTxtArea();
