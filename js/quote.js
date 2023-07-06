const quoteContainer = document.querySelector('.quote-container');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const randomizeButton = document.querySelector('#randomize-button');
const customQuoteWrapper = document.querySelector('#custom-quote-wrapper');
const addCustomQuoteButton = document.querySelector('#add-custom-quote-button');
const customQuoteForm = document.querySelector('#custom-quote-form');
const customQuoteInput = document.querySelector('#custom-quote-input');
const customAuthorInput = document.querySelector('#custom-author-input');

randomizeButton.addEventListener('click', displayRandomQuote);
addCustomQuoteButton.addEventListener('click', toggleCustomQuoteForm);
customQuoteForm.addEventListener('submit', addCustomQuote);

function displayRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteText.innerText = `"${data.content}"`
      quoteAuthor.innerText = `- ${data.author}`
    })
}

function toggleCustomQuoteForm() {
  customQuoteWrapper.classList.toggle('show');
}

function addCustomQuote(event) {
  event.preventDefault();
  const customQuote = customQuoteInput.value;
  const customAuthor = customAuthorInput.value;

  if (customQuote && customAuthor) {
    const customQuoteElement = document.createElement('div');
    customQuoteElement.innerText = `"${customQuote}" - ${customAuthor}`;
    quoteContainer.appendChild(customQuoteElement);

    customQuoteInput.value = '';
    customAuthorInput.value = '';

    toggleCustomQuoteForm();
  }
}

displayRandomQuote();
