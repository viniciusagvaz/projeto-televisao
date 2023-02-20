   const tela = document.getElementById("tv-screen");
   let isPower = false;
   let channel = 1;
   let volume = 2;
   
function power(){
   if (!isPower){
   tela.style.backgroundImage = "url(https://i.vimeocdn.com/video/1225013615-a36bba843bb44d1516130cf192f39fdea403821a740db08ea7f5c2d7da7ac099-d?mw=1500&mh=792&q=70)";
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
      if (channel < 2){
         channel += 1
      tela.innerHTML = `Canal ${channel}`
      tela.style.backgroundImage = "url(https://images.pexels.com/photos/15113597/pexels-photo-15113597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      }else if (channel < 2){
         channel += 1
      tela.innerHTML = `Canal ${channel}`
      tela.style.backgroundImage = "url(https://images.pexels.com/photos/15113597/pexels-photo-15113597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      }
   }
}

function channelDown(){
  if (isPower){
      if (channel > 1){
         channel -= 1
      tela.innerHTML = `Canal ${channel}`
      tela.style.backgroundImage = "url(https://i.vimeocdn.com/video/1225013615-a36bba843bb44d1516130cf192f39fdea403821a740db08ea7f5c2d7da7ac099-d?mw=1500&mh=792&q=70)";
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