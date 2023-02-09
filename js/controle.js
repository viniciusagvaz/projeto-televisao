   const tela = document.getElementById("tv-screen");
   let isPower = false;
   let channel = 13;
   let volume = 5;
   
function power(){
   if (!isPower){
   tela.style.backgroundImage = "url(../img/tela-img-1.jpg)";
      isPower = true;
   } else {
      tela.style.backgroundImage = "";
      tela.innerHTML = " "
      isPower = false;
   }
}

function home(){

}

function channelUp(){
  if (isPower){
      if (channel < 13){
         channel += 1
      tela.innerHTML = `Canal ${channel}`
      }
   }
}

function channelDown(){
  if (isPower){
      if (channel > 1){
         channel -= 1
      tela.innerHTML = `Canal ${channel}`
      }
   }
}

function volumeUp(){
   if (isPower){
      if(volume < 100){
         volume += 1
      tela.innerHTML  = `Volume ${volume}`
      }
   }
}

function volumeDown(){
   if (isPower){
      if(volume >= 1){
         volume -= 1
      tela.innerHTML  = `Volume ${volume}`
      }
   }
}