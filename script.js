// DOM
const addBtn = document.querySelector(".add");
const bookList = document.querySelector(".books");
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");

// Add event listerer
addBtn.addEventListener("click", () => {
    form.style.display = "grid";
});

// library
let myLibrary = [
  /*
  {
    title: "Harry Potter and The Sorcerer's Stone",
    author: "J. K. Rowling",
    totalPages: "336",
    isread: "yes",
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    totalPages: "234",
    isread: "no",
  },
  */
];

// the constructor
function Book() {
  this.title = prompt("Title");
  this.author = prompt("Author");
  this.pages = prompt("Pages");
  this.read = prompt("Have you read it");
}

// adding books to library
function addBookToLibrary() {
  const newBook = new Book();
  myLibrary.push(newBook);
}
