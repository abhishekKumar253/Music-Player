let play = document.getElementById("Play");
let previous = document.getElementById("Previous");
let next = document.getElementById("Next");
let audio = document.querySelector("audio");
let img = document.querySelector("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let songs = [
  {
    name: "Heeriye",
    title: "Heeriye",
    artist: "Arijit Singh",
  },
  {
    name: "Get Ready To Fight",
    title: "Get Ready to Fight",
    artist: "Benny Dayal",
  },
  {
    name: "Baby Calm Down",
    title: "Baby Calm Down",
    artist: "Rema",
  },
];

let isplaying = false;
let playmusic = () => {
  isplaying = true;
  audio.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

let pausemusic = () => {
  isplaying = false;
  audio.pause();
  play.classList.replace("fa-pause", "fa-play");
};

play.addEventListener("click", () => {
  if (isplaying == false) {
    playmusic();
  } else {
    pausemusic();
  }
});

const loadsong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  audio.src = "Music/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
};
songindex = 1;
const nextsong = () => {
  songindex = (songindex + 1) % songs.length;
  loadsong(songs[songindex]);
  playmusic();
};

const prevsong = () => {
  songindex = (songindex - 1 + songs.length) % songs.length;
  loadsong(songs[songindex]);
  playmusic();
};
next.addEventListener("click", nextsong);
previous.addEventListener("click", prevsong);

//volume control
let volume_slider = document.querySelector(".volume_slider");

function setVolume() {
  audio.volume = volume_slider.value / 100;
}
