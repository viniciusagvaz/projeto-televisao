   const tela = document.querySelector(".tv--screen");
   let isPower = false;
   let channel = "";
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


/* links  gifs 
Ping Pong
https://i.gifer.com/origin/0b/0ba2a8bddd05276cc46a60a586def718.gif

Dança



Comida
https://i.pinimg.com/originals/58/a6/59/58a6590300bcdebcaa97a93f742d516a.gif

Filme
https://64.media.tumblr.com/b65b71ba3d2502a13240863fcbb39fe5/a377ea866ef7130e-86/s540x810/7eeab75df7b5b34889eb20e6ab880e26be5b6bb1.gif
*/