   const tela = document.getElementById("tv-screen");
   let isPower = false;
   let channel = 3;
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
      tela.innerHTML  = `Canal +`
   }
}

function channelDown(){
  if (isPower){
      tela.innerHTML  = `Canal -`
   }
}

function volumeUp(){
   if (isPower){
      if(volume < 100){
         volume += 1
      tela.innerHTML  = `Volume ${volume}`
      console.log(volume)
      }
   }
}

function volumeDown(){
   if (isPower){
      if(volume >= 1){
         volume -= 1
      tela.innerHTML  = `Volume ${volume}`
      console.log(volume)
      }
   }
}