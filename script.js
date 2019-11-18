const joke = document.getElementById("joke");
const ChuckText = document.getElementById("ChuckText");
const synth = window.speechSynthesis;

joke.addEventListener("click", async () => {
  const url = "https://api.chucknorris.io/jokes/random";

  const res = await fetch(url);
  const data = await res.json();

  const utterThis = new SpeechSynthesisUtterance(data.value);
  synth.speak(utterThis);

  ChuckText.innerHTML = data.value;
});
Quote.addEventListener("click", async () => {
  const url = "https://quote-garden.herokuapp.com/quotes/random";
  try {
    const res = await fetch(url);
    const data = await res.json();

    QuoteText.innerHTML = data.quoteText;
  } catch (e) {
    console.log(e);
  }
});
