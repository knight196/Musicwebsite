
function myFunction(x) {
  x.classList.toggle("change");
  
  document.querySelector('.navtop').classList.toggle('show');
  document.querySelector('.faderight').classList.toggle('faderightshow');
  document.querySelector('.fadeleft').classList.toggle('fadeleftshow');
}

let audiolist = document.getElementById('audiolist');

let songname = document.getElementById('songname');

var next = document.querySelector('.next');

var prev = document.querySelector('.prev');

var audioplayer = document.querySelector('.audioplay');

var img2 = document.querySelector('.img2');

var pic2 = document.querySelector('.pic2');

var stop = document.querySelector('.stop');

var smalllid = document.querySelector('.smalllid');


//Music file lists

var progress = document.querySelector('#progress');
const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

var songlist = [

  Music1 ={
    musicFile: 'Audio/Cool by tobu.mp3',
    musicName: 'Tobu',
    musicPic:'images/eveninggrass.jpg',
    name:'Cool by tobu.mp3',
    title:'Tobu',
    clipArt:'eveninggrass.jpg',
    images:'./images/eveninggrass.jpg',
     background:'darkgrey'
  },

  Music2 ={
    musicFile : 'Audio/kiss the rain.mp3',
    musicName: 'Yiruma Kiss the rain',
    musicPic:'images/grass.jpg',
    name:'kiss the rain.mp3',
    title:'kiss the rain',
    clipArt:'grass.jpg',
    images:'./images/grass.jpg',
    background:'#619E8D'
  },
  Music3 ={
    musicFile: 'Audio/Joe Hisaishi - Summer.mp3',
    musicName: 'Joe Hisaishi Summer',
    musicPic:'images/grass2.jpg',
    name:'Joe Hisaishi - Summer.mp3',
    title:'Summer',
    clipArt:'grass2.jpg',
    images:'./images/grass2.jpg',
       background:'#6897BB'
  },

  Music4 ={
    musicFile : 'Audio/relax-paino.mp3',
    musicName: 'Relax piano N005',
    musicPic:'images/sakura.jpg',
    name:'relax-paino.mp3',
    title:'relax-piano',
    clipArt:'sakura.jpg',
    images:'./images/sakura.jpg',
        background:'#0086BF'
  },
  Music5 ={
    musicFile: 'Audio/Yiruma - Maybe.mp3',
    musicName: 'Yiruma - Maybe',
    musicPic:'images/oceans.jpg',
    name:'Yiruma - Maybe.mp3',
    title:'Maybe',
    clipArt:'oceans.jpg',
    images:'./images/oceans.jpg',
      background:'#6f904a'
  },

  Music6 ={
    musicFile : 'Audio/an-avenue.mp3',
    musicName: 'Tsunenori An avenue',
    musicPic:'images/plainland.jpg',
    name:'an-avenue.mp3',
    title:'An-Avenue',
    clipArt:'plainland.jpg',
    images:'./images/plainland.jpg',
      background:'#8FBC8F'
  },
  Music7 ={
    musicFile: 'Audio/RiverFlows.mp3',
    musicName: 'Yiruma - RiverFlows',
    musicPic:'images/river.jpg',
    name:'RiverFlows.mp3',
    title:'RiverFlows',
    clipArt:'river.jpg',
    images:'./images/river.jpg',
      background:'#6f904a'
  },

  Music8 ={
    musicFile : 'Audio/Raisemeup.mp3',
    musicName: 'Raise Me up',
    musicPic:'images/lonely.jpg',
    name:'Raisemeup.mp3',
    title:'Raise Me up',
    clipArt:'lonely.jpg',
    images:'./images/lonely.jpg',
      background:'#8FBC8F'
  },
  Music9 ={
    musicFile: 'Audio/Here with you.mp3',
    musicName: 'Mirai Nikki Here with you',
    musicPic:'images/street.jpg',
    name:'Here with you.mp3',
    title:'Here with you',
    clipArt:'street.jpg',
    images:'./images/street.jpg',
      background:'#6f904a'
  },

  Music10 ={
    musicFile : 'Audio/Canon in D.mp3',
    musicName: 'Canon in D',
    musicPic:'images/road.jpg',
    name:'Canon in D.mp3',
    title:'Canon in D',
    clipArt:'road.jpg',
    images:'./images/road.jpg',
      background:'darksilver'
  },
  Music11 ={
    musicFile : 'Audio/Katawaredoki.mp3',
    musicName: 'Katawaredoki Kimi no na wa',
    musicPic:'images/moonstrike.jpg',
    name:'Katawaredoki.mp3',
    title:'Katawaredoki',
    clipArt:'moonstrike.jpg',
    images:'./images/moonstrike.jpg',
      background:'#8FBC8F'
  }
]

//bottomsong in otherscreen with music lists

var bottomimg = document.querySelector('.bottomplayimg');

var bottomsong = document.querySelector('#bottomsong');

var thirdnext = document.querySelector('#thirdnext');

var thirdplay = document.querySelector('#thirdplay');

var minisong = document.querySelector('.minisong');

let count = 0;

audiolist.src = songlist[count].musicFile;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;

bottomimg.src=songlist[count].musicPic;
bottomsong.innerText = songlist[count].musicName;
smalllid.style.backgroundColor = songlist[count].background;
minisong.innerText = songlist[count].musicName;



//bottomsong of next button
thirdnext.addEventListener('click', () => {
  count++;
  if(count > songlist.length -1){
    count = 0;
  }
audiolist.src = songlist[count].musicFile;
bottomimg.src=songlist[count].musicPic;
bottomsong.innerText = songlist[count].musicName;
songname.innerText = songlist[count].musicName;
minisong.innerText = songlist[count].musicName;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;
pic2.style.animation="spin 4s linear infinite";
songname.style.animation = "scroll-left 15s linear infinite";
  smalllid.style.backgroundColor = songlist[count].background;
smalllid.style.transition = "all 2s";
audiolist.play();
thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
});

//bottom song for the play

thirdplay.addEventListener('click', () => {
  if(thirdplay.innerHTML === '<i class="fas fa-pause"></i>'){
    thirdplay.innerHTML = '<i class="fas fa-play"></i>'
    pic2.style.animation="linear";
    audiolist.pause();
    audioplayer.innerHTML = '<i class="fas fa-play"></i>';
  }else if (thirdplay.innerHTML === '<i class="fas fa-play"></i>'){
    thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
    audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
    audiolist.play();
   smalllid.style.backgroundColor = songlist[count].background;
smalllid.style.transition = "all 2s";
    pic2.style.animation ="spin 4s linear infinite";
    songname.style.animation = "scroll-left 15s linear infinite";
  }
});


//main song screen of the  next
next.addEventListener('click', () => {
  count++;
  if(count > songlist.length -1){
    count = 0;
  }
audiolist.src = songlist[count].musicFile;
songname.innerText = songlist[count].musicName;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;
pic2.style.animation="spin 4s linear infinite";
songname.style.animation = "scroll-left 15s linear infinite";
audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
bottomimg.src=songlist[count].musicPic;
smalllid.style.backgroundColor = songlist[count].background;
smalllid.style.transition = "all 2s";
bottomsong.innerText = songlist[count].musicName;
minisong.innerText = songlist[count].musicName;
thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
audiolist.play();
  });
  
//nextsong will be played automatically once previous song is over
loadSong(songlist[count]);
audiolist.addEventListener('ended', nextSong)

function nextSong(){
  count++;
  if(count > songlist.length -1){
    count = 0;
  }
  loadSong(songlist[count]);
  audiolist.play();
}

//play button for the main screen
audioplayer.addEventListener('click', () => {
  if(audioplayer.innerHTML === '<i class="fas fa-pause"></i>'){
    audioplayer.innerHTML = '<i class="fas fa-play"></i>';
    audiolist.pause();
    thirdplay.innerHTML = '<i class="fas fa-play"></i>';
    pic2.style.animation="linear";
  }else if (audioplayer.innerHTML === '<i class="fas fa-play"></i>'){
    audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
    audiolist.play();
smalllid.style.backgroundColor = songlist[count].background;
smalllid.style.transition = "all 2s";
    thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
    pic2.style.animation ="spin 4s linear infinite";
    songname.style.animation = "scroll-left 15s linear infinite";
  }
});


//bottomplay of the play button
var playnext = document.querySelector('.fa-arrow-circle-right');

playnext.addEventListener('click', () => {
  count++;
  if(count > songlist.length -1){
    count = 0;
  }
audiolist.src = songlist[count].musicFile;
songname.innerText = songlist[count].musicName;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;
smalllid.style.backgroundColor = songlist[count].background;
minisong.innerText = songlist[count].musicName;
bottomsong.innerText = songlist[count].musicName;
bottomimg.src=songlist[count].musicPic;
smalllid.style.transition = "all 2s";
pic2.style.animation="spin 4s linear infinite";
songname.style.animation = "scroll-left 15s linear infinite";
audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
audiolist.play();
});

//previous button for the main screen
prev.addEventListener('click', () => {
  count--;
  if(count < 0){
    count = songlist.length-1;
  }
audiolist.src = songlist[count].musicFile;
songname.innerText = songlist[count].musicName;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;
smalllid.style.backgroundColor = songlist[count].background;
minisong.innerText = songlist[count].musicName;
smalllid.style.transition = "all 2s";
  bottomsong.innerText = songlist[count].musicName;
  bottomimg.src=songlist[count].musicPic;
pic2.style.animation="spin 4s linear infinite";
audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
songname.style.animation = "scroll-left 15s linear infinite";
audiolist.play();
  });
  
//audiolist with volume slider with minutes and progress bar when it is played by the user 
audiolist.addEventListener('timeupdate', function (){
  progress.value = audiolist.currentTime / audiolist.duration;
});

audiolist.addEventListener('timeupdate', setTime);

function setTime(){
let minutes = Math.floor(audiolist.currentTime / 60);
let seconds = Math.floor(audiolist.currentTime - minutes * 60);
let minuteValue;
let secondValue;

if (minutes < 10) {
  minuteValue = '0' + minutes;
} else {
  minuteValue = minutes;
}

if (seconds < 10) {
  secondValue = '0' + seconds;
} else {
  secondValue = seconds;
}

let mediaTime = minuteValue + ':' + secondValue;
timer.textContent = mediaTime;

};

//User can skip the length of the song by clicking on the progressbar
progress.addEventListener('click', setProgress)

function setProgress(e){
const width = this.clientWidth;
const clickX = e.offsetX;
const duration = audiolist.duration;

audiolist.currentTime = (clickX / width) * duration;
}

volumeslider.addEventListener('change', function(e) {;
audiolist.volume = e.currentTarget.value / 100;
});

volumeslider.addEventListener('change', function(e) {;
audiolist.volume = e.currentTarget.value / 100;
});

//stop button for to stop the music
stop.addEventListener('click', () => {
  audiolist.pause();
  audiolist.currentTime =0;
  pic2.style.animation="linear";
  audioplayer.innerHTML = '<i class="fas fa-play"></i>' ;
  thirdplay.innerHTML = '<i class="fas fa-play"></i>' ;
});

var nav = document.getElementById('openNav');
var navbar = document.querySelector('.navbar');
var music = document.querySelector('.music');

nav.addEventListener('click', () => {
navbar.classList.toggle('show');
navbar.style.transition="1s all";
});

music.addEventListener('click', () => {
navbar.classList.remove('show');
});

//bottomplay container of the song will be closed when user clicks on the title of the song
var down = document.querySelector('.down');
var bottomplay = document.querySelector('.bottomplay');
var bottomcontainer = document.querySelector('.bottomcontainer');

down.addEventListener('click', () => {
bottomplay.classList.add('show');
document.querySelector('.smalllid').style.display="none";
document.querySelector('.otherscreen').style.display="block";
  document.querySelector('.otherscreen').style.animation ="grow 1s ease";
});


bottomcontainer.addEventListener('click', () => {
bottomcontainer.classList.add('show');
document.querySelector('.otherscreen').style.display="none";
document.querySelector('.smalllid').style.display ="block";
});

var musicicon = document.querySelector('.fa-music')

musicicon.addEventListener('click', ()=> {
  document.querySelector('.loading').style.display="block";
  document.querySelector('.loading').style.animation ="grow 1s ease";
  document.querySelector('#myDiv').style.display="none";
  setTimeout(myFunc, 3000);
});

function myFunc(){
  document.querySelector('.loading').style.display="none";
  document.querySelector('#myDiv').style.display="block";
  document.querySelector('#myDiv').style.animation ="grow 1s ease";
document.querySelector('.topicon').style.display="none";
}

var home = document.querySelectorAll('#home');

home.forEach(button => button.addEventListener('click', () => {
  document.querySelector('.smalllid').style.display="none";
  document.querySelector('.otherscreen').style.display="none";
  document.querySelector('.topicon').style.display="inline-flex";
  audiolist.pause();
  audiolist.currentTime = 0;
  pic2.style.animation="linear";
audioplayer.innerHTML = "<i class='fas fa-play'></i>";
}));

//square button for exiting from the music player which takes the user to the home screen
var homeclose = document.querySelectorAll('.closemusic');

homeclose.forEach(button => button.addEventListener('click', function() {
  document.querySelector('.smalllid').style.display="none";
document.querySelector('.otherscreen').style.display="none";
document.querySelector('.topicon').style.display="inline-flex";
audiolist.pause();
audiolist.currentTime = 0;
pic2.style.animation="linear";
audioplayer.innerHTML = "<i class='fas fa-play'></i>";
}));

//exit the screen when user clicks on the exit button from the modal container
var exit = document.querySelectorAll('.exit');

exit.forEach(button => button.addEventListener('click', function() {
var x,i;
x=document.querySelectorAll('.exitbox');
for(i=0; i<x.length; i++){
  x[i].classList.add('showexit');
}
}));

//when user clicks on the yes button it will exits the app from the screen
var yes = document.querySelectorAll('.yes');

yes.forEach(button => button.addEventListener('click', function() {
var x,i;
x=document.querySelectorAll('.exitbox');
for(i=0; i<x.length; i++){
 x[i].classList.remove('showexit');
  document.querySelector('.otherscreen').style.display="none";
  document.querySelector('.smalllid').style.display="none";
  document.querySelector('.topicon').style.display="inline-flex";
  audiolist.pause();
  audiolist.currentTime = 0;
  pic2.style.animation="linear";
  audioplayer.innerHTML = "<i class='fas fa-play'></i>";
}
}));

//no button it will stay in the same music screen when user clicks
var no = document.querySelectorAll('.No');

no.forEach(button => button.addEventListener('click', function () {
  var x,i;
  x=document.querySelectorAll('.exitbox');
  for(i=0; i<x.length; i++){
     x[i].classList.remove('showexit');
  }
}));

//animation when the down icon is clicked it will show grow animation 
bottomplay.style.animation="grow ease 1.5s";


  var thumbsup = document.querySelector('.fa-thumbs-up');
  var thumbsup2 = document.querySelector('.fa-thumbs-up');

  thumbsup.addEventListener('click', () => {
 thumbsup2.classList.toggle('show');
      thumbsup2.style.transition="all .5s";
  });


//for music play functionality

//changing songs data

function loadSong(songlist) {
    songname.textContent = songlist.musicName;
    minisong.textContent = songlist.musicName;
    audiolist.src = "Audio/"+songlist.name;
    img2.src = "images/"+songlist.clipArt;
    pic2.src = "images/"+songlist.clipArt;
   bottomimg.src = "images/" + songlist.clipArt;
    bottomsong.textContent = songlist.musicName;
  smalllid.style.backgroundColor = songlist.background;


  var circleui = document.querySelectorAll('.circleui');
  for(var i=0; i<circleui.length; i++){
    circleui[i].style.backgroundColor = songlist.background;
    circleui[i].style.transition="1s all";
  }
}



//Coding for Music Lists

let musicList = document.querySelector('.musics-ul').children;   
let li = document.querySelectorAll('li');

for (let i = 0; i < songlist.length; i++) {

    musicList[i].textContent = songlist[i].title;
    musicList[i].setAttribute('id',i);

   const img = document.createElement('IMG');
   img.src=songlist[i].images;
   li[i].appendChild(img);

    musicList[i].addEventListener('click', function(){
        loadSong(songlist[this.id]);
        pic2.style.animation ="spin 4s linear infinite";
       audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
       songname.style.animation = "scroll-left 15s linear infinite";
       thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
      smalllid.style.backgroundColor = songlist.background;
      audiolist.play();
    })
    
}

//list of musics in the list collection
let musicList2 = document.querySelector('.listcollection').children;   

for (let i = 0; i < musicList2.length; i++) {

    musicList2[i].textContent = songlist[i].musicName;
    musicList2[i].setAttribute('id',i);

    const icon = document.createElement('SPAN');

    var txt = document.createTextNode('');

    icon.className = "star";

    icon.appendChild(txt);

    musicList2[i].appendChild(icon);

    musicList2[i].addEventListener('click', function(){
        loadSong(songlist[this.id]);
        pic2.style.animation ="spin 4s linear infinite";
       audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
       songname.style.animation = "scroll-left 15s linear infinite";
       thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
      smalllid.style.backgroundColor = songlist.background;
       audiolist.play();
    })
    
}

let musicList3 = document.querySelector('.scrolllist2').children;   
let li3 = document.querySelectorAll('p');

for (let i = 0; i < musicList3.length; i++) {

    musicList3[i].textContent = songlist[i].title;
    musicList3[i].setAttribute('id',i);

   const img2 = document.createElement('IMG');
   img2.src=songlist[i].images;
   musicList3[i].appendChild(img2);
   img2.classList = "musicimg";

    musicList3[i].addEventListener('click', function(){
        loadSong(songlist[this.id]);
        pic2.style.animation ="spin 4s linear infinite";
       audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
       songname.style.animation = "scroll-left 15s linear infinite";
       thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
      smalllid.style.backgroundColor = songlist.background;
       audiolist.play();
    })
    
}

//list of musics in the list collection
let musicList4 = document.querySelector('.musiclistcollection').children;   
for (let i = 0; i < songlist.length; i++) {

    musicList4[i].textContent = songlist[i].musicName;
    musicList4[i].setAttribute('id',i);
    
    const icon = document.createElement('SPAN');

    var txt = document.createTextNode('');

    icon.className = "star";

    icon.appendChild(txt);

    musicList4[i].appendChild(icon);

    musicList4[i].addEventListener('click', function(){
        loadSong(songlist[this.id]);
        pic2.style.animation ="spin 4s linear infinite";
       audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
       songname.style.animation = "scroll-left 15s linear infinite";
       thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
      smalllid.style.backgroundColor = songlist.background;
       audiolist.play();

          
    })
    
}


let musicList5 = document.querySelector('.musicslider1').children;  

for (let i = 0; i < musicList5.length; i++) {

    musicList5[i].setAttribute('id',i);

   const img2 = document.createElement('IMG');
   img2.src=songlist[i].images;
   musicList5[i].appendChild(img2);
   img2.classList = "musicsliderimg";
    
}


let musicList6 = document.querySelector('.scrollimg').children;  
let li6 = document.querySelectorAll('p');

for (let i = 0; i < musicList6.length; i++) {

  musicList6[i].textContent = songlist[i].musicName;
    musicList6[i].setAttribute('id',i);

   const img2 = document.createElement('IMG');
   img2.src=songlist[i].images;
   musicList6[i].prepend(img2);
   img2.className="scrollximg";
}

function grip(){
  document.querySelector('.buttons2').classList.toggle('height');
  document.querySelector('.listcollection').classList.toggle('listshow');
  document.querySelector('.backgroundimg').classList.toggle('imgsize');
  document.querySelector('.spinner').classList.toggle('spinnershow');
  document.querySelector('.minisong').classList.toggle('minisongshow');

  document.querySelector('.buttons2').style.transition ="1s ease";
  document.querySelector('.backgroundimg').style.transition ="1s all";
}

function scrollright(){
  document.querySelector('.scrollcontainer').scrollLeft +=20;
}

function scrollleft(){
  document.querySelector('.scrollcontainer').scrollLeft -=20;
}

function scrollright2(){
  document.querySelector('.scrollimg').scrollLeft +=20;
}

function scrollleft2(){
  document.querySelector('.scrollimg').scrollLeft -=20;
}

//swiper slider
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});


  AOS.init({
    offset:100,
    duration:1000,
  });