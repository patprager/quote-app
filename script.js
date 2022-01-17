document.querySelector("#load-quote").addEventListener("click", function () {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Der Teufel steck im Detail. ;)");
      }
    })
    .then((data) => {
      randomQuote.textContent = data.data[0].quoteText;
      quoteAuthor.textContent = data.data[0].quoteAuthor;
    });

  const randomQuote = document.querySelector("#random-quote");
  const quoteAuthor = document.querySelector("#author");
});
