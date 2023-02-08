   const tela = document.getElementById("tv");
   let isPower = false;
   let channel = 3;
   let volume = 5;
   
function power(){
   if (!isPower){
   tela.style.backgroundImage = "url(../img/tela-img-1.jpg)";
      isPower = true;
   } else {
      tela.style.backgroundImage = "";
      isPower = false;
   }
}

function channelUp(){
   tela.innerHTML  = `Canal +`
}

function channelDown(){

}

function volumeUp(){

}

function volumeDown(){

}