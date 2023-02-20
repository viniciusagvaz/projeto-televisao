   const tela = document.getElementById("tv-screen");
   let isPower = false;
   let channel = 1;
   let volume = 2;
   
function power(){
   if (!isPower){
   tela.style.backgroundImage = "url(https://media.tenor.com/O51PN7jtRc0AAAAC/april-5centimeters-per-second.gif)";
      isPower = true;
   } else {
      tela.style.backgroundImage = ""
      tela.innerHTML = " "
      isPower = false;
   }
}

function home(){

}

function channelUp(){
  if (isPower){
      if (channel < 5){
         channel += 1
      tela.innerHTML = `Canal ${channel}`
      tela.style.backgroundImage = "url(https://media.tenor.com/88dnH_mHRLAAAAAC/static-tv-static.gif)";
      }
   }
}

function channelDown(){
  if (isPower){
      if (channel > 1){
         channel -= 1
      tela.innerHTML = `Canal ${channel}`
      tela.style.backgroundImage = "url(https://media.tenor.com/O51PN7jtRc0AAAAC/april-5centimeters-per-second.gif)";
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