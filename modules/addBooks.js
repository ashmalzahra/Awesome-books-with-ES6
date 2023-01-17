export const Title = document.getElementById('title');
export const Author = document.getElementById('author');
export const Add = document.getElementById('add');

export class Methods {
  constructor() {
    this.books = [];
  }

  init = function () {
    if (JSON.parse(localStorage.getItem('books')) !== null) {
      this.books = JSON.parse(localStorage.getItem('books'));
      this.books.forEach((element) => {
        this.addBookToDocument(element);
      });
    }
  };

  removeBook = function (time) {
    this.books = this.books.filter((book) => book.time !== time);
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  removeBtnEventListener = function (element, time) {
    this.removeBook(time);
    element.parentElement.remove();
  };

  addBookToDocument = function (book) {
    const booksDiv = document.getElementById('books');

    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('data-time', book.time);

    const bookDescription = document.createElement('p');
    bookDescription.classList.add('book-description');
    const remove = document.createElement('button');
    remove.classList.add('removeBtn');
    bookDescription.innerText = `"${book.title}" by ${book.author}`;
    remove.innerText = 'Remove';

    bookDiv.append(bookDescription, remove);
    booksDiv.append(bookDiv);
    remove.addEventListener('click', () => {
      this.removeBtnEventListener(remove, book.time);
    });
  };

  addBookToLocalStorage = function (title, author) {
    const d = new Date();
    const time = d.getTime();
    this.books.push({
      title,
      author,
      time,
    });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.addBookToDocument({
      title,
      author,
      time,
    });
  };
}

export const addBook = () => {  
window.addEventListener('load', () => {
    const method = new Methods();
  
    method.init();
  
    Add.addEventListener('click', (e) => {
      e.preventDefault();
      const author = Author.value;
      const title = Title.value;
      method.addBookToLocalStorage(title, author);
      Author.value = null;
      Title.value = null;
    });
  });
};