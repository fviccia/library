let myLibrary = [
  {id: 0, title: 'Title: 1984', author: 'Author: George Orwell', pages: 'Number of Pages: 326', readed: 'Readed: Yes'},
  {id: 0, title: 'Title: To Kill a Mockingbird', author: 'Author: Harper Lee', pages: 'Number of Pages: 281', readed: 'Readed: No'} ];
  let library = document.getElementById('library');
  let addBook = document.getElementById('add-Book');
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  let readed = document.getElementById('readed');
  let form = document.getElementById('newBookForm');
  
  let id = 0;
  
  render();

// The constructor.
function Book(id, title, author, pages, readed) {
  this.id = id;
  this.title = 'Title: ' + title;
  this.author = 'Author: ' + author;
  this.pages = 'Number of Pages: ' + pages;
  this.readed = 'Readed: ' + readed;
}

function addBookToLibrary() {
  id ++;
  let book = new Book(id, title.value, author.value, pages.value, readed.value);
  myLibrary.push(book);
  library.innerHTML = '';
  render();
  form.reset();
}

function render() {
  for (let i = 0 ; i < myLibrary.length ; i++) {
    // Create book div.
    let div = document.createElement('div');
    div.className = 'book';
    // Create an array of values of the object.  
    let properties = Object.values(myLibrary[i]);
    // Loop trough properties of each book and append them.
    for (let i = 1 ; i < properties.length ; i++){
      let property = document.createElement('div');
      property.className = 'properties';
      property.innerHTML = properties[i];
      div.appendChild(property);
    }
    
    let deleteBook = document.createElement('button');
    deleteBook.innerHTML = 'Delete';
    deleteBook.className = 'delete-button';
    div.appendChild(deleteBook);
    library.appendChild(div);
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  form.reset();
}


