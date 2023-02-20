   const tela = document.getElementById("tv-screen");
   let isPower = false;
   let channel = 1;
   let volume = 3;
  
   
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
      if (channel <= 1){
         channel += 1
      // tela.innerHTML = `Canal ${channel}

      tela.style.backgroundImage = "url(https://media.tenor.com/xEKNZ2vapXIAAAAC/dinosaur-king-news.gif)";
      }else if (channel = 3){
         tela.innerHTML = " "
         tela.style.backgroundImage = "url(https://media.tenor.com/9MjArHcC8qkAAAAC/pleasestandby-lol.gif)"
      }
   }
}

function channelDown(){
  if (isPower){
      if (channel > 1){
         channel -= 1
      // tela.innerHTML = `Canal ${channel}

      tela.style.backgroundImage = "url(https://media.tenor.com/O51PN7jtRc0AAAAC/april-5centimeters-per-second.gif)"
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
