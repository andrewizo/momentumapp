const quoteArray = [
  "“The only way to do great work is to love what you do.”\n— Steve Jobs",
  "“Believe you can and you're halfway there.”\n— Theodore Roosevelt",
  "“Success usually comes to those who are too busy to be looking for it.”\n— Henry David Thoreau",
  "“The future belongs to those who believe in the beauty of their dreams.”\n— Eleanor Roosevelt",
  "“In the middle of difficulty lies opportunity.”\n— Albert Einstein",
  "“The best way to predict the future is to create it.”\n— Peter Drucker",
  "“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.”\n— Albert Schweitzer",
  "“The only limit to our realization of tomorrow will be our doubts of today.”\n— Franklin D. Roosevelt",
  "“Your time is limited, don't waste it living someone else's life.”\n— Steve Jobs",
  "“Don't watch the clock; do what it does. Keep going.”\n— Sam Levenson"
];


let localQuotes = JSON.parse(localStorage.getItem('quotes'));

if (!localQuotes) {
  localStorage.setItem('quotes', JSON.stringify(quoteArray));
  localQuotes = JSON.parse(localStorage.getItem('quotes'));
}

function addQuote() {
  let newQuote = prompt("Enter the new quote:");
  if (newQuote != null) {
    localQuotes.push(newQuote);
  }
  setLocalStorage(localQuotes);
  fadeOut(document.querySelector("#quote"));
  document.querySelector("#quote").innerHTML = localQuotes[localQuotes.length - 1];
  fadeIn(document.querySelector("#quote"));
}

function setLocalStorage(localQuotes) {
  localStorage.setItem('quotes', JSON.stringify(localQuotes));
}

const setQuote = () => {
  const storedQuotes = JSON.parse(localStorage.getItem('quotes'));

  let seed = Math.floor(Math.random() * storedQuotes.length);
  let quote = storedQuotes[seed];
  let quoteParagraph = document.createElement("p");

  document.querySelector("#quote").innerHTML = quote;
}

document.querySelector("#quote-button").addEventListener("click", setQuote);
document.querySelector("#add-quote").addEventListener("click", addQuote);