let myLibrary = [
  {title: 'Title: 1984', author: 'Author: George Orwell', pages: 'Number of Pages: 326', readed: true},
  {title: 'Title: To Kill a Mockingbird', author: 'Author: Harper Lee', pages: 'Number of Pages: 281', readed: false} ];
  let library = document.getElementById('library');
  let addBook = document.getElementById('add-Book');
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  let readed = document.getElementById('readed');
  let form = document.getElementById('newBookForm');
  let deleteTracking = 0;
  let readedTracking = 0;
  render();
  // showDeleteButton();
  // showReadedButton();

// The constructor.
function Book(title, author, pages, readed) {
  this.title = 'Title: ' + title;
  this.author = 'Author: ' + author;
  this.pages = 'Number of Pages: ' + pages;
  this.readed = (readed.toLowerCase() == 'yes');
}

function addBookToLibrary() {
  if (title.value == '' || author.value == '' || pages.value == '' || readed.value == '') return;
  let book = new Book(title.value, author.value, pages.value, readed.value);
  myLibrary.push(book);
  render();
  form.reset();
}
  
function render() {
  library.innerHTML = '';
  for (let i = 0 ; i < myLibrary.length ; i++) {
    // Create book div.
    let div = document.createElement('div');
    div.className = 'book';
    // Create an array of values of the book.  
    let properties = Object.values(myLibrary[i]);
    // Loop trough properties of each book and append them.
    for (let i = 0 ; i < properties.length ; i++){
    let property = document.createElement('div');
    property.className = 'properties';
    property.innerHTML = properties[i];
    // Set the readed property according to the readed boolean value.
    if (properties[i] == true) {
      property.innerHTML = 'Readed';
    } else if (properties[i] == false) {
      property.innerHTML = 'Not Readed';
    }
    div.appendChild(property);
  }
    library.appendChild(div);
  }
  addDeleteButton();
  addReadedButton();
}

function addDeleteButton() {
  let index = 0;
  [].forEach.call(document.querySelectorAll('.book'), function (el) {
    // Add the delete button for each element.
    let deleteBook = document.createElement('button');
    deleteBook.innerHTML = 'Delete';
    deleteBook.className = 'delete';
    deleteBook.id = index;
    index++;
    deleteBook.onclick = function(){
      let index = deleteBook.id;
      myLibrary.splice(index, 1);
      render();
      showDeleteButton();
    };   
    el.appendChild(deleteBook);
  });
}

function addReadedButton() {
  let index = 0;
  [].forEach.call(document.querySelectorAll('.book'), function (el) {
    // Add the delete button for each element.
    let readedButton = document.createElement('button');
    readedButton.innerHTML = 'Change Status';
    readedButton.className = 'readed';
    readedButton.id = index;
    index++;
    readedButton.onclick = function(){
      let index = readedButton.id;
      if (myLibrary[index]['readed'] == true) {
        myLibrary[index]['readed'] = false;
      } else {
        myLibrary[index]['readed'] = true;
      }
      render();
      showReadedButton();
    };   
    el.appendChild(readedButton);
  });
}
  
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  form.reset();
}

function showDeleteButton() {
  if (deleteTracking == 0) {
    [].forEach.call(document.querySelectorAll('.delete'), function (el) {
      el.style.visibility = 'visible';
    });
    deleteTracking = 1;
  } else {
    [].forEach.call(document.querySelectorAll('.delete'), function (el) {
      el.style.visibility = 'hidden';
    });
    deleteTracking = 0;
  }
}

function showReadedButton() {
  if (readedTracking == 0) {
    [].forEach.call(document.querySelectorAll('.readed'), function (el) {
      el.style.visibility = 'visible';
    });
    readedTracking = 1;
  } else {
    [].forEach.call(document.querySelectorAll('.readed'), function (el) {
      el.style.visibility = 'hidden';
    });
    readedTracking = 0;
  }
}




