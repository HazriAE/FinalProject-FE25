const quoteTeks = document.getElementById("quotes-teks");
const btnQuotes = document.getElementById("btn-quotes")
const quoteAuthor = document.getElementById("quotes-author")

let Quotes = [];

fetch("quotes.json")
   .then(res => res.json())
   .then(data => {
      Quotes = data;
      setQuote(0);
   })
    .catch(err => {
      quoteTeks.textContent = "Failed to load quotes.";
      console.error("Error fetching quotes:", err);
});

function setQuote(index) {
   quoteTeks.textContent = Quotes[index].quote;
   quoteAuthor.textContent = `— ${Quotes[index].author}`;
}
function getQuotes() {
   if (Quotes.length === 0) return;
   const randomNum = Math.floor(Math.random() *Quotes.length);
   setQuote(randomNum);
}

btnQuotes.addEventListener("click", getQuotes);