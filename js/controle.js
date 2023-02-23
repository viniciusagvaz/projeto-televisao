   const tela = document.querySelector(".tv--screen");
   const displayVol = document.querySelector(".info-vol-display")
   const displayChn = document.querySelector(".info-chn-display")
   
   let isPower = false;
   let channel = 0
   let volume = 0


   const channelInfo = [
      {
         channel: 1,
         image:"url(https://media.tenor.com/qbLFlt_O0UQAAAAd/kimi-ni-nowa-your-name.gif)"
      },
      {
         channel: 2,
         image:"url(https://media.tenor.com/teNIvp3Uz-YAAAAS/daft-punk-one-more-time.gif)"
      },
      {
         channel: 3,
         image:"url(https://media1.giphy.com/media/oESgZ6uNs9xgQulYiK/giphy.gif)"
      },
      {
         channel: 4,
         image:"url(https://i.gifer.com/origin/0b/0ba2a8bddd05276cc46a60a586def718.gif)"
      },
      {
         channel: 5,
         image:"url(https://64.media.tumblr.com/b65b71ba3d2502a13240863fcbb39fe5/a377ea866ef7130e-86/s540x810/7eeab75df7b5b34889eb20e6ab880e26be5b6bb1.gif)"
      },
      {
         channel: 6,
         image:"url(https://media.tenor.com/4Kf6rwnlU-4AAAAC/guitar-anime-guitar.gif"
      },
      {
         channel: 7,
         image:"url(https://data.whicdn.com/images/295630510/original.gif)"
      },
      { 
        channel: 8,
         image:"url(https://i.gifer.com/DbN.gif)"
      },
      {
         channel: 9,
         image:"url(https://64.media.tumblr.com/1e89ced13c29cf66f0fe23352bf30bb6/tumblr_moajifdbu31qeoe6zo2_500.gif)"
      },
      {
         channel: 10,
         image:"url(https://i.pinimg.com/originals/58/a6/59/58a6590300bcdebcaa97a93f742d516a.gif)"
      }
   ]
  

// Power //

function power(){
   if (!isPower){
      tela.style.backgroundImage = channelInfo[0].image;
      isPower = true;
   } else {
      tela.style.backgroundImage = ""
      isPower = false;
   }
}

// Channel //

function channelUp(){
   if (isPower){
   channel++
   if (channel > channelInfo.length)
   {
      channel = 1
   }

   channelInfo.forEach((info) =>
   {
      if (info.channel == channel)
      {
         displayChn.innerHTML = 
         `<i class="fa-solid fa-caret-right"
             style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">
             Channel ${info.channel}
         </i>`
         tela.style.backgroundImage = info.image
      }
   });
 }
}


function channelDown(){
   console.log("teste", channel)
   
  if (isPower){
   channel--
   if (channel < 1){
      channel = 10
   }
   channelInfo.forEach((info) =>{
      if (info.channel == channel){
         displayChn.innerHTML =
          `<i 
             class="fa-solid fa-caret-right" 
             style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">
             Channel ${info.channel}
          </i>`
         tela.style.backgroundImage = info.image
      }
   });
  }
}

// Volume //

function volumeUp(){
   if (isPower){
      if(volume < 50){
         volume += 5
      displayVol.innerHTML  = `<i class="fa-solid fa-volume-low" style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">  ${volume}</i>`
      }else if(volume < 100){
         volume += 5
         displayVol.innerHTML  = 
         `<i 
            class="fa-solid fa-volume-high" 
            style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)"> 
            ${volume}
          </i>`
      }
   }
}

function volumeDown(){
   if (isPower){
      if(volume >= 5){
         volume -=5
         displayVol.innerHTML  =    
         `<i 
            class="fa-solid fa-volume-low" 
            style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)"> 
            ${volume}
         </i>`
      }else{
         displayVol.innerHTML  = 
         `<i class="fa-solid fa-volume-mute" 
            style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">
          </i>`
      }
   }
}
