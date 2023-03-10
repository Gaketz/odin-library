// DOM
const addBtn = document.querySelector(".add");
const bookList = document.querySelector(".books");
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");

// library
let myLibrary = [];

// the constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryEL = document.querySelector("#library");
  libraryEL.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
    <div class="card-header">
    <h3 class="title"><em>Title:</em> ${book.title}</h3>
    <h4 class="author"><em>Author:</em> ${book.author}</h4>
    </div>
    <div class="card-body">
    <p class="pages"><em>Pages:</em> ${book.pages}</p>
    <p class="read"><em>Status:</em> ${book.read ? "Read" : "Not Read Yet"}</p>
    </div>
    <div class="card-buttons">
    <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
    <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    </div>
    `;
    libraryEL.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

// adding books to library
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  render();
}

// Add event listerer
addBtn.addEventListener("click", () => {
  form.style.display = "grid";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  form.style.display = "none";
});
