const joke = document.getElementById("joke");
const ChuckText = document.getElementById("ChuckText");
const synth = window.speechSynthesis;

joke.addEventListener("click", async () => {
  const utl = "https://api.chucknorris.io/jokes/random";

  const res = await fetch(url);
  const data = await res.json();

  const utterThis = new SpeechSynthesisUtterance(data.value);
  synth.speak(utterThis);

  ChuckText.innerHTML = data.value;
});
