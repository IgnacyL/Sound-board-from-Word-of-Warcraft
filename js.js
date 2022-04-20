const sounds = ["blood", "target", "horde", "haha"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  document.body.appendChild(btn);
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });
});

const stopSounds = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};
