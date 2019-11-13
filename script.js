const button = $(".trigger");

button.click(function() {
  $.get("https://api.chucknorris.io/jokes/random", function(data) {
    console.log("response : ", data);
  });
});
