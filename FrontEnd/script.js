document.getElementById("demo").innerText = 'good!!!'

//let { remote } = require('electron')
//const {dialog} = require('electron')
//let mainWindow = remote.getCurrentWindow();


//let selectFile = document.getElementById('select');
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let track_image = document.querySelector('#track_image');
let artist = document.querySelector('#artist');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');

//selectFile(); {
//    alert("YOU JUST PUSHEDTHE BUTTON")
//}

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create audio element
let track = document.createElement('audio');

//Song list
let All_song = [
    {
      name: "irreplaceable",
      path: "./Files/irreplaceable.mp3",
      img: "./Files/irreplaceable.jpeg",
      singer: "Beyonce"
    },
    {
      name: "Anyone",
      path: "./Files/anyone.mp3",
      img: "./Files/anyone.jpeg",
      singer: "Justin Bieber"
    },
    {
        name: "Bad Girls",
        path: "./Files/Badgirls.mp3",
        img: "./Files/westlife.png",
        singer: "West Life"
    },
    {
        name: "Reach Out",
        path: "./Files/reachout.mp3",
        img: "./Files/westlife.png",
        singer: "West Life"
    },
    
 ];
 

 //function load_track
 function load_track(index_no){
     reset_slider()
     track.src = All_song[index_no].path;
     title.innerHTML = All_song[index_no].name;
     track_image.src = All_song[index_no].img;
     artist.innerHTML = All_song[index_no].singer;
     track.load();

     timer = setInterval(range_slider ,1000);
 }
 load_track(index_no);

//check if song is playing
function justplay(){
    if (playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}


function playsong(){
    track.play();
    playing_song = true;
    //play.innerHTML = '<i class = "fa fa-pause"></i>'
}

function pausesong(){
    track.pause();
    playing_song = false;
    //play.innerHTML = '<i class = "fa fa-play"></i>'
}


function next_song(){
    if (index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no)
        playsong();
    }
}

function previous_song(){
    if (index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no)
        playsong();
    }

}

function change_duration(){
    slider_position = track.duration * (slider.value / 100)
    track.currentTime = slider_position;
}

function range_slider(){
	let position = 0;
    // update slider position
	if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value =  position;
    }

    //function will run when the song is over
    if(track.ended){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
}

function reset_slider(){
    slider.value = 0;
}


