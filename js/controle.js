   const tela = document.querySelector(".tv--screen");
   let isPower = false;
   let volume = 3;
   let channel = 1;

   const channelInfo = [
      {
         channel: 1,
         image:"url(https://media.tenor.com/O51PN7jtRc0AAAAC/april-5centimeters-per-second.gif)"
      },
      {
         channel: 2,
         image:"url(https://media.tenor.com/9MjArHcC8qkAAAAC/pleasestandby-lol.gif)"
      },
      {
         channel: 3,
         image:"url(https://i.gifer.com/origin/0b/0ba2a8bddd05276cc46a60a586def718.gif)"
      },
      {
         channel: 4,
         image:"url(https://i.pinimg.com/originals/58/a6/59/58a6590300bcdebcaa97a93f742d516a.gif)"
      },
      {
         channel: 5,
         image:"url(https://64.media.tumblr.com/b65b71ba3d2502a13240863fcbb39fe5/a377ea866ef7130e-86/s540x810/7eeab75df7b5b34889eb20e6ab880e26be5b6bb1.gif)"
      }
   ]
  
   
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
   console.log("teste", channel)

  if (isPower){
   channel++
   channelInfo.forEach((info) =>{
      if (info.channel == channel){
         tela.innerHTML = `Canal ${info.channel}`
         tela.style.backgroundImage = info.image
      }
   });
  }
}

function channelDown(){
   console.log("teste", channel)
   
  if (isPower){
   channel--
   channelInfo.forEach((info) =>{
      if (info.channel == channel){
         tela.innerHTML = `Canal ${info.channel}`
         tela.style.backgroundImage = info.image
      }
   });
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
