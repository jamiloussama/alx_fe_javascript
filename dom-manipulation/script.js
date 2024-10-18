// Array to store quotes, each quote has 'text' and 'category'
let quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    category: "Motivation",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    category: "Leadership",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    category: "Life",
  },
];

// Function to display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p>${quote.text} - <strong>${quote.category}</strong></p>`;
}

// Add event listener to 'Show New Quote' button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Function to add a new quote from user input
function createAddQuoteForm() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;

  if (newQuoteText && newQuoteCategory) {
    // Add new quote to the quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    alert("New quote added!");
  } else {
    alert("Please enter both quote text and category.");
  }
}
function addQuote() {
    createAddQuoteForm();
}
