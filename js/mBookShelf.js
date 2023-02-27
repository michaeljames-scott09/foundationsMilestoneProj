class Bookshelf {
  constructor(htmlElement, books = []) {
    this.books = books;
    this.htmlElement = htmlElement;
    this.visibleBooks = books;
  }

  seed(data) {
    // Load in the data
    data.forEach((bookInfo) => {
      const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
      );
      this.addBook(book);
    });

    // Prepare and sort visible books
    this.visibleBooks = this.books;
    this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));

    this.render();
  };

    // Add a book to the Bookshelf */

    addBook (book) {
      this.books.push(book);
  };

  
    render() {
      const dataBase = document.getElementById("app")
      const ul = document.createElement("ul"); // creates list
      const books = this.visibleBooks.map((b) => b.render()); 
      ul.append(...books);
      dataBase.replaceChildren(ul)
    };

    countFavoriteBooks() {
      return this.books.reduce(
        (count, book) => (book.isFavorite ? count + 1 : count),
        0
      );
    };

  // Filter visible books according to a given criteria function

  filterVisibleBooks(criteria) {
    this.visibleBooks = this.books.filter(criteria);
    this.render();
  };

  // Sort visible books according to a given compare function

  sortVisibleBooks(compareFn) {
    this.visibleBooks.sort(compareFn);
    this.render();
  };
}