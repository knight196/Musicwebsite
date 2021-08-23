function myFunction(x) {
    x.classList.toggle("change");
    
    document.querySelector('.navtop').classList.toggle('show');
    document.querySelector('.faderight').classList.toggle('faderightshow');
    document.querySelector('.fadeleft').classList.toggle('fadeleftshow');
  }

let audioplayer = document.getElementById('audioplayer');

let audiolist = document.getElementById('audiolist');

let songname = document.getElementById('songname');

var img = document.querySelector('.img');

var prev = document.querySelector('#prev');

var next = document.querySelector('#next');

var stop = document.querySelector('#stop');



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
    },
  
    Music2 ={
      musicFile : 'Audio/kiss the rain.mp3',
      musicName: 'Yiruma Kiss the rain',
      musicPic:'images/grass.jpg',
      name:'kiss the rain.mp3',
      title:'kiss the rain',
      clipArt:'grass.jpg',
      images:'./images/grass.jpg',
    },
    Music3 ={
      musicFile: 'Audio/Joe Hisaishi - Summer.mp3',
      musicName: 'Joe Hisaishi Summer',
      musicPic:'images/grass2.jpg',
      name:'Joe Hisaishi - Summer.mp3',
      title:'Summer',
      clipArt:'grass2.jpg',
      images:'./images/grass2.jpg',
    },
  
    Music4 ={
      musicFile : 'Audio/relax-paino.mp3',
      musicName: 'Relax piano N005',
      musicPic:'images/sakura.jpg',
      name:'relax-paino.mp3',
      title:'relax-piano',
      clipArt:'sakura.jpg',
      images:'./images/sakura.jpg',

    },
    Music5 ={
      musicFile: 'Audio/Yiruma - Maybe.mp3',
      musicName: 'Yiruma - Maybe',
      musicPic:'images/oceans.jpg',
      name:'Yiruma - Maybe.mp3',
      title:'Maybe',
      clipArt:'oceans.jpg',
      images:'./images/oceans.jpg',

    },
  
    Music6 ={
      musicFile : 'Audio/an-avenue.mp3',
      musicName: 'Tsunenori An avenue',
      musicPic:'images/plainland.jpg',
      name:'an-avenue.mp3',
      title:'An-Avenue',
      clipArt:'plainland.jpg',
      images:'./images/plainland.jpg',
    
    },
    Music7 ={
      musicFile: 'Audio/RiverFlows.mp3',
      musicName: 'Yiruma - RiverFlows',
      musicPic:'images/river.jpg',
      name:'RiverFlows.mp3',
      title:'RiverFlows',
      clipArt:'river.jpg',
      images:'./images/river.jpg',
       
    },
  
    Music8 ={
      musicFile : 'Audio/Raisemeup.mp3',
      musicName: 'Raise Me up',
      musicPic:'images/lonely.jpg',
      name:'Raisemeup.mp3',
      title:'Raise Me up',
      clipArt:'lonely.jpg',
      images:'./images/lonely.jpg',
   
    },
    Music9 ={
      musicFile: 'Audio/Here with you.mp3',
      musicName: 'Mirai Nikki Here with you',
      musicPic:'images/street.jpg',
      name:'Here with you.mp3',
      title:'Here with you',
      clipArt:'street.jpg',
      images:'./images/street.jpg',
    
    },
  
    Music10 ={
      musicFile : 'Audio/Canon in D.mp3',
      musicName: 'Canon in D',
      musicPic:'images/road.jpg',
      name:'Canon in D.mp3',
      title:'Canon in D',
      clipArt:'road.jpg',
      images:'./images/road.jpg',
 
    },
    Music11 ={
      musicFile : 'Audio/Katawaredoki.mp3',
      musicName: 'Katawaredoki Kimi no na wa',
      musicPic:'images/moonstrike.jpg',
      name:'Katawaredoki.mp3',
      title:'Katawaredoki',
      clipArt:'moonstrike.jpg',
      images:'./images/moonstrike.jpg',
      
    }
  ]

  let count = 0;

  audiolist.src = songlist[count].musicFile;
  img.src=songlist[count].musicPic;

  prev.addEventListener('click', () => {
    count--;
    if(count < 0){
      count = songlist.length-1;
    }
audiolist.src=songlist[count].musicFile;
  songname.innerText = songlist[count].musicName;
  img.src=songlist[count].musicPic;
  bottomsongname.innerText = songlist[count].musicName;
  bottomimg.src=songlist[count].musicPic;
  audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
  play.innerHTML = '<i class="fas fa-pause"></i>';
  audiolist.play();
    });
    
    next.addEventListener('click', () => {
        count++;
        if(count > songlist.length -1){
          count = 0;
        }
        audiolist.src = songlist[count].musicFile;
      songname.innerText = songlist[count].musicName;
      img.src=songlist[count].musicPic;
      bottomsongname.innerText = songlist[count].musicName;
      bottomimg.src=songlist[count].musicPic;
      audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
      play.innerHTML = '<i class="fas fa-pause"></i>';
      audiolist.play();
        });

  audioplayer.addEventListener('click', () => { 
      if(audioplayer.innerHTML === '<i class="fas fa-pause"></i>'){
    audioplayer.innerHTML = '<i class="fas fa-play"></i>';
    play.innerHTML = '<i class="fas fa-play"></i>';
    audiolist.pause();
  }else if (audioplayer.innerHTML === '<i class="fas fa-play"></i>'){
    audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
    play.innerHTML = '<i class="fas fa-pause"></i>';
    audiolist.play();
  }
  });

  stop.addEventListener('click', () => {
    audiolist.pause();
    audiolist.currentTime =0;
    audioplayer.innerHTML = '<i class="fas fa-play"></i>' ;
  });


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

  var bottomsongname = document.getElementById('bottomsongname');
var bottomimg = document.getElementById('bottomimg');

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

function loadSong(songlist) {
    songname.textContent = songlist.musicName;
    audiolist.src = "Audio/"+songlist.name;
    img.src = "images/"+songlist.clipArt;
    bottomimg.src="./images/"+songlist.clipArt;
    bottomsongname.textContent = songlist.musicName;
}


let musicList = document.querySelector('.listcollection').children;   
let li = document.querySelectorAll('li');
for (let i = 0; i < musicList.length; i++) {

    musicList[i].textContent = songlist[i].title;
    musicList[i].setAttribute('id',i);


    const img = document.createElement('IMG');
  
    img.src=songlist[i].images;
  
    musicList[i].prepend(img);



    musicList[i].addEventListener('click', function(){
        loadSong(songlist[this.id]);
        audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
      document.querySelector('.musicscreen').style.display="block";
      document.querySelector('section').style.display="none";
      document.querySelector('#bottomoptionplay').innerHTML =  '<i class="fas fa-pause"></i>';
      document.querySelector('.allmusiccollection').style.display="none";
      document.querySelector('.playbuttonlist').style.display="block";
        audiolist.play();
    })
    
}


let musicList3 = document.querySelector('.listcollection2').children;   

for (let i = 0; i < musicList3.length; i++) {

    musicList3[i].textContent = songlist[i].title;
    musicList3[i].setAttribute('id',i);


    const img = document.createElement('IMG');
  
    img.src=songlist[i].images;
  
    musicList3[i].prepend(img);



    musicList3[i].addEventListener('click', function(){
        loadSong(songlist[this.id]);
        audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
      document.querySelector('.musicscreen').style.display="block";
      document.querySelector('#bottomoptionplay').innerHTML =  '<i class="fas fa-pause"></i>';
      document.querySelector('.allmusiccollection').style.display="none";
      document.querySelector('.playbuttonlist').style.display="block";
      document.querySelector('section').style.display="none";
      audiolist.play();
    })
    
}

let musicList4 = document.querySelector('.listcollection3').children;   
for (let i = 0; i < musicList3.length; i++) {

    musicList4[i].textContent = songlist[i].title;
    musicList4[i].setAttribute('id',i);


    const img = document.createElement('IMG');
  
    img.src=songlist[i].images;
  
    musicList4[i].prepend(img);



    musicList4[i].addEventListener('click', function(){
        loadSong(songlist[this.id]);
        audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
      document.querySelector('.musicscreen').style.display="block";
      document.querySelector('#bottomoptionplay').innerHTML =  '<i class="fas fa-pause"></i>';
      document.querySelector('.allmusiccollection').style.display="none";
      document.querySelector('.playbuttonlist').style.display="block";
      document.querySelector('section').style.display="none"; 
      audiolist.play();

    })
    
}

//Desktop musicui 

var play = document.getElementById('play');

var prev2 = document.getElementById('prev2');

var next2 = document.getElementById('next2');

var stop2 = document.getElementById('stop2');

var bottomsongname = document.getElementById('bottomsongname');

var bottomimg = document.getElementById('bottomimg');

bottomsongname.innerText = songlist[count].musicName;
bottomimg.src=songlist[count].musicPic;

prev2.addEventListener('click', () => {
  count--;
  if(count < 0){
    count = songlist.length-1;
  }
  audiolist.src = songlist[count].musicFile;
  bottomsongname.innerText = songlist[count].musicName;
  bottomimg.src=songlist[count].musicPic;
play.innerHTML = '<i class="fas fa-pause"></i>';
img.src=songlist[count].musicPic;
audiolist.play();
  });
  
  next2.addEventListener('click', () => {
      count++;
      if(count > songlist.length -1){
        count = 0;
      }
      audiolist.src = songlist[count].musicFile;
      bottomsongname.innerText = songlist[count].musicName;
      bottomimg.src=songlist[count].musicPic;
    play.innerHTML = '<i class="fas fa-pause"></i>';
    img.src=songlist[count].musicPic;
    audiolist.play();
      });

play.addEventListener('click', () => { 
    if(play.innerHTML === '<i class="fas fa-pause"></i>'){
  play.innerHTML = '<i class="fas fa-play"></i>';
  audioplayer.innerHTML = '<i class="fas fa-play"></i>';
  audiolist.pause();
}else if (play.innerHTML === '<i class="fas fa-play"></i>'){
 play.innerHTML = '<i class="fas fa-pause"></i>';
 audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
  audiolist.play();
}
});

stop2.addEventListener('click', () => {
  audiolist.pause();
  audiolist.currentTime =0;
  play.innerHTML = '<i class="fas fa-play"></i>' ;
});

var progress2 = document.getElementById('progress2');


progress2.addEventListener('click', setProgress)

function setProgress(e){
const width = this.clientWidth;
const clickX = e.offsetX;
const duration = audiolist.duration;

audiolist.currentTime = (clickX / width) * duration;
}

volumeslider2.addEventListener('change', function(e) {;
audiolist.volume = e.currentTarget.value / 100;
});

audiolist.addEventListener('timeupdate', function (){
    progress2.value = audiolist.currentTime / audiolist.duration;
  });
  

  
const timerWrapper2 = document.querySelector('.timer2');
const timer2 = document.querySelector('.timer2 span');
const timerBar2 = document.querySelector('.timer2 div');

audiolist.addEventListener('timeupdate', setTime2);
  
function setTime2(){
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
timer2.textContent = mediaTime;

};

//click and drag slider
const slider = document.querySelector('.musicimg');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
isDown = true;
slider.classList.toggle('active');
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
})

slider.addEventListener('mouseleave', () => {
isDown = false;
slider.classList.remove('active');
});


slider.addEventListener('mouseup', () => {
isDown = false;
slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = (x - startX) * 1;
slider.scrollLeft = scrollLeft - walk;
});

let musicList2 = document.querySelector('.musicimg').children;   
let li2 = document.querySelectorAll('li');
for (let i = 0; i < musicList2.length; i++) {

  musicList2[i].textContent = songlist[i].title;
  musicList2[i].setAttribute('id',i);

  const img = document.createElement('IMG');
  const a = document.createElement('A');

  img.src=songlist[i].images;
  a.textContent = songlist[i].title;

  musicList2[i].prepend(img);
  musicList2[i].prepend(a);


    musicList2[i].addEventListener('click', function(){
        loadSong(songlist[this.id]);
        audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
        play.innerHTML = '<i class="fas fa-pause"></i>';
      audiolist.play();
    })
    
}

//filter for music with search bar
function myFunction2() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".musicimg");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
    }
}

//options on three dots click

var threedots = document.getElementById('threedots');

threedots.addEventListener('click', () => {
document.querySelector('.listoption').classList.toggle('show');
});

//minimize the musicplayer 

var minimize = document.querySelector('#minimize');

minimize.addEventListener('click', () => {
document.querySelector('.musicscreen').style.display="none";
document.querySelector('.allmusiccollection').style.display="block";
document.querySelector('.listoption').classList.remove('show');
document.querySelector('section').style.display="grid";
});

//homebutton from the three dots icon which will take the user to the home music page

var homebtn = document.querySelector('#homebtn');

homebtn.addEventListener('click', () => {
document.querySelector('.allmusiccollection').style.display="block";
document.querySelector('.musicscreen').style.display="none";
document.querySelector('.borderbox').style.display="block";
document.querySelector('section').style.display="grid";
document.querySelector('.listoption').classList.remove('show');
});


//scrollright when user clicks on the button of the right
function right(evt, scrollright) {
  var listcollection, rightside;
  listcollection = document.getElementsByClassName("listcollection");
  rightside = document.getElementsByClassName("right");

  document.getElementById(scrollright).scrollLeft += 20;
}

//scrollleft when user clicks on the button of the left
function left(evt, scrollleft) {
  var listcollection, scrollleftside;
  listcollection = document.getElementsByClassName("listcollection");
  scrollleftside = document.getElementsByClassName("left");

document.getElementById(scrollleft).scrollLeft -= 20;
 
}

//bottomoption song 


var bottomoptionplay = document.getElementById('bottomoptionplay');

var bottomoptionnext = document.getElementById('bottomoptionnext');

var bottomoptionprev = document.getElementById('bottomoptionprev');

var bottomoptionstop = document.getElementById('bottomoptionstop');

var bottomoptiontitle = document.getElementById('bottomoptiontitle');


bottomoptiontitle.innerText = songlist[count].musicName;

bottomoptionprev.addEventListener('click', () => {
  count--;
  if(count < 0){
    count = songlist.length-1;
  }
  audiolist.src = songlist[count].musicFile;
  bottomoptiontitle.innerText = songlist[count].musicName;
bottomoptionplay.innerHTML = '<i class="fas fa-pause"></i>';
audiolist.play();
  });
  
  bottomoptionnext.addEventListener('click', () => {
      count++;
      if(count > songlist.length -1){
        count = 0;
      }
      audiolist.src = songlist[count].musicFile;
      bottomoptiontitle.innerText = songlist[count].musicName;
    bottomoptionplay.innerHTML = '<i class="fas fa-pause"></i>';
    audiolist.play();
      });

bottomoptionplay.addEventListener('click', () => { 
    if(bottomoptionplay.innerHTML === '<i class="fas fa-pause"></i>'){
  bottomoptionplay.innerHTML = '<i class="fas fa-play"></i>';
  audioplayer.innerHTML = '<i class="fas fa-play"></i>';
  audiolist.pause();
}else if (bottomoptionplay.innerHTML === '<i class="fas fa-play"></i>'){
 bottomoptionplay.innerHTML = '<i class="fas fa-pause"></i>';
 audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
  audiolist.play();
}
});

bottomoptionstop.addEventListener('click', () => {
  audiolist.pause();
  audiolist.currentTime =0;
  bottomoptionplay.innerHTML = '<i class="fas fa-play"></i>' ;
});