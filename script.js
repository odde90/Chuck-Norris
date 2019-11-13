const button = $(".trigger");
var synth = window.speechSynthesis;
button.click(function() {
  $.get("https://api.chucknorris.io/jokes/random", function(data) {
    console.log("response : ", data);
    var utterThis = new SpeechSynthesisUtterance(data.value);
    synth.speak(utterThis);
  });
});
