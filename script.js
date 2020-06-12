let myLibrary = [];

let id = 0;


// The constructor.
function Book(id, title, author, pages, readed) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

function addBookToLibrary(title, author, pages, readed) {
  id ++;
  let book = new Book(id, title, author, pages, readed);
  myLibrary.push(book);
}

// Some sample books.
addBookToLibrary('1984', 'George Orwell', '326', true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', false);

function render() {
  
}
