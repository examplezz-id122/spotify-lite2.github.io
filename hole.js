console.log("Welcome to Spotify");

// intiaizal the varible 
let songindex = 0;
let audioElement = new Audio('song/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogess = document.getElementById('myprogess');
let zero = document.getElementById('zero');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Look At Me - Xxxtentacion", filePath: "Song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "All Girl Are The Same - Juice Wrld", filePath: "Song/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "Hear Me Calling - Juice Wrld", filePath: "Song/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "Lucid-Dreams - Juice Wrld", filePath: "Song/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "Lean Wit Me - Juice Wrld", filePath: "Song/5.mp3", coverpath: "covers/5.jpg" },
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

// audioElement.play();

// masterplay 
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        zero.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        zero.style.opacity = 0;

    }
})
audioElement.addEventListener('timeupdate', () => {
    progess = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogess.value = progess;
})
myprogess.addEventListener('change', () => {
    audioElement.currentTime = myprogess.value * audioElement.duration / 100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Song/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        zero.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=4){
        songindex = 0;
    }
    else{
        songindex += 1;
    }
    audioElement.src = `Song/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex = 0;
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `Song/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})