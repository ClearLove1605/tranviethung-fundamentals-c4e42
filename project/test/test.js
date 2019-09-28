// fetch('./data.json')
// .then((res) => {
//   return res.json()
// }).then ((data) => {
//   console.log(data)
// })

const body = document.body;
const grColor = [
  'rgb(39, 105, 94)',
  'rgb(39, 105, 94)',
  'rgb(138, 220, 179)',
  'rgb(232, 117, 92)',
  'rgb(192, 57, 43)',
  'rgb(219, 51, 78)',
  'rgb(82, 125, 90)',
  'rgb(152, 174, 96)',
  'rgb(114, 189, 194)',
  'rgb(229, 75, 75)',
  'rgb(241, 196, 15)',
  'rgb(153, 51, 102)',
  'rgb(22, 160, 133)',
  'rgb(229, 75, 75)',
  'rgb(114, 97, 110)',
  'rgb(68, 154, 136)',
  'rgb(52, 73, 94)',
  'rgb(102, 204, 153)',
  'rgb(82, 125, 90)',
  'rgb(189, 53, 89)'
]

const randomSetbg = (el, secconds) => {
  let random = Math.floor(Math.random() * grColor.length);
  el.style.backgroundColor = grColor[random];
}
setInterval(randomSetbg, 28000, body);


const audio_contain = [
  { id: 'fire', name: 'fire', src: './sound/fire.mp3', thumbnail: './images/fire.png', type: 'audio/mpeg'},
  { id: '', name: 'Rain' , src: './sound/raining.mp3', thumbnail: './images/fire.png', type: 'audio/mpeg'},
  { id: '', name: 'Wave' , src: './sound/waves.mp3', thumbnail: './images/fire.png', type: 'audio/mpeg'},
  { id: '', name: 'Fan' , src: './sound/wind.mp3', thumbnail: './images/fire.png', type: 'audio/mpeg'},
]

const options = [
  
]

const player = document.getElementById('player');

audio_contain.forEach(function(el) {
  let html  = `
    <div class="col-xl-6 item-fix-postion">
      <div class="row">
          <div class="col-xl-6 wrapper-item-play">
              <div class="img-wrap">
                  <img src="${el.thumbnail}" alt="${el.name}">
              </div>
              <div class="control">
                <audio controls loop>
                    <source src="${el.src}" type="${el.type}">
                </audio>
                <input class="volume-control hidden" type="range" min="0" max="100">
              </div>
          </div>
      </div>
    </div>
  `
  player.innerHTML += html  
})

const btnPlay = document.querySelectorAll('.img-wrap img');
const audio = document.querySelectorAll('audio');
const setVolume = document.querySelectorAll('.volume-control');
const mute = document.getElementById('mute_all');

for(let i = 0; i < btnPlay.length; i++) {
  btnPlay[i].addEventListener('click', function() {
    if(audio[i].paused) {
      setVolume[i].classList.remove('hidden');
      btnPlay[i].style.opacity = 1;
      audio[i].play();
    } else {
      audio[i].pause();
      setVolume[i].classList.add('hidden');
      btnPlay[i].style.opacity = 0.5;
    }
  })
  setVolume[i].addEventListener('mousemove', function() {
    audio[i].volume = setVolume[i].value/100
  })
}

mute.addEventListener('click', function() {
  let muteFalse = document.getElementById('mute-false');
  let muteTrue = document.getElementById('mute-true');

  mute.classList.toggle('active');
  if(mute.classList.contains('active')) {
    muteTrue.opacity = 1;
    muteFalse.opacity = 0;
  } else {
    muteTrue.opacity = 0;
    muteFalse.opacity = 5;
  }
  audio.forEach((el) => {
    if(el.muted) {
      el.muted = false;
    } else {
      el.muted = true;
    }
  })
})