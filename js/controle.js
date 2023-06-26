const tela = document.querySelector(".tv--screen");
const displayVol = document.querySelector(".info-vol-display");
const displayChn = document.querySelector(".info-chn-display");

let isPower = false;
let channel = 1;
let volume = 0;

const channelInfo = [
   {
      channel: 1,
      channelName: "Romantic R Us",
      image: "url(https://i.pinimg.com/originals/9f/f1/55/9ff155b8e49d5e48fcaf14cc7365c720.gif)",
   },
   {
      channel: 2,
      channelName: "News News Flash",
      image: "url(https://media.tenor.com/191k6_cls-YAAAAC/dinosaur-king-news-reporter.gif)",
   },
   {
      channel: 3,
      channelName: "Sports Today",
      image: "url(https://64.media.tumblr.com/1e89ced13c29cf66f0fe23352bf30bb6/tumblr_moajifdbu31qeoe6zo2_500.gif)",
   },
   {
      channel: 4,
      channelName: "Sports Today Two",
      image: "url(https://i.gifer.com/origin/0b/0ba2a8bddd05276cc46a60a586def718.gif)",
   },
   {
      channel: 5,
      channelName: "Sy-Fying",
      image: "url(https://64.media.tumblr.com/b65b71ba3d2502a13240863fcbb39fe5/a377ea866ef7130e-86/s540x810/7eeab75df7b5b34889eb20e6ab880e26be5b6bb1.gif)",
   },
   {
      channel: 6,
      channelName: "This is 4 You",
      image:
      "url(http://78.media.tumblr.com/0ab602b708b22093a4e9989a4498bbdb/tumblr_p1uvzudrPx1rad1dao1_500.gif)"
   },
   {
      channel: 7,

      channelName: "Anime Factory",
      image: "url(https://media.tenor.com/uOHj2K7TsQQAAAAC/dragon-ball-goku.gif)",
   },
   {
      channel: 8,
      channelName: "For Kids Shows",
      image: "url(https://i.gifer.com/DbN.gif)",
   },
   {
      channel: 9,
      channelName: "Cooking Much",
      image:"url(https://media1.giphy.com/media/oESgZ6uNs9xgQulYiK/giphy.gif)",
   },
   {
      channel: 10,
      channelName: "Star Chef",
      image: "url(https://i.pinimg.com/originals/58/a6/59/58a6590300bcdebcaa97a93f742d516a.gif)",
   },
   {
      channel: 11,
      channelName: "Awarded Films",
      image: "url(https://media.tenor.com/qbLFlt_O0UQAAAAd/kimi-ni-nowa-your-name.gif)",
   },
   {
      channel: 12,
      channelName: "Cinema Plus",
      image: "url(https://data.whicdn.com/images/295630510/original.gif)",

   },
   {
      channel: 13,
      channelName: "Not Real History",
      image: "url(https://media1.tenor.com/images/1ff2eaa719725f41116ef7a2e6d81d0b/tenor.gif?itemid=4724980)",
   },
   {
      channel: 14,
      channelName: "Music Tv Now",
      image: "url(https://media.tenor.com/4Kf6rwnlU-4AAAAC/guitar-anime-guitar.gif)",
   },
   {
      channel: 15,
      channelName: "Tomorrow Sounds",
      image: "url(https://i.makeagif.com/media/9-25-2015/Rm_mcZ.gif)",
   },
];



// Power //
const power = () => {
   if (!isPower) {
      powerOn();
   } else {
      powerOff();
   }
};

const powerOn = () => {
   isPower = true;
   lastChannel();
   showChannel();
};

const powerOff = () => {
   isPower = false;
   localStorage.setItem("lastChannel", channel);
   tela.style.backgroundImage = "";
   displayChn.innerHTML = " ";
   displayVol.innerHTML = " ";
};



// Channel //
const showChannel = () => {
   if (isPower) {
      channelInfo.forEach((channelNumber) => {
         if (channelNumber.channel == channel) {
            displayChn.innerHTML = `
            <p
           style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">
           <i class="fa-sharp fa-solid fa-chevron-right"></i>
              ${channelNumber.channel}
              ${channelNumber.channelName}
          </p>
       `;
            tela.style.backgroundImage = channelNumber.image;
         }
      });
      displayTimeOut();
   }
};

const changeChannel = {
   channelUp() {
      document.querySelector('.channel-up')
      if (isPower) {
         channel++;
      }
      showChannel();
      channelLooping();
   },

   channelDown() {
      document.querySelector('channel-down')
      if (isPower) {
         channel--;
      }
      channelLooping();
      showChannel();
   }
}

const channelLooping = () => {
   if (isPower) {
      if (channel > channelInfo.length) {
         channel = 1
         showChannel()
      }

      if (channel === 0) {
         channel = channelInfo.length
         showChannel()
      }
   }
}

const lastChannel = () => {
   let lastChannel = localStorage.getItem("lastChannel");

   if (lastChannel) {
      channel = parseInt(lastChannel);
   } else {
      channel = 1;
      tela.style.backgroundImage = channelInfo[0].image;
   }
};



// Volume //
const showVolume = () => {
   if (volume === 0) {
      displayVol.innerHTML = `<i class="fa-solid fa-volume-mute" 
 style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)"> mute
</i>`;
   } else {
      displayVol.innerHTML = `<i class="fa-solid fa-volume-low" style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">  ${volume}</i>`;
   }
   displayTimeOut();
};

const changeVol = {
   volumeUp() {
      document.querySelector('.volume-up')
      if (isPower) {
         if (volume < 100) {
            volume += 5;
         }
         showVolume();
      }
   },

   volumeDown() {
      document.querySelector('.volume-down')
      if (isPower) {
         if (volume > 0) {
            volume -= 5;
         }
         showVolume();
      }
   }
};



// Display Time //
const displayTimeOut = () => {
   setTimeout(() => {
      displayChn.innerHTML = " ";
      displayVol.innerHTML = " ";
   }, 2500);
};