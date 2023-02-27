// Creating Bookshelf

const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);


// Favorite listing

const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");

updateBtn.addEventListener("click", () => {
  favCount.textContent = bookshelf.countFavoriteBooks();
});


// Search function

const searchInput = document.getElementById("searchInput").value;
const searchBtn = document.querySelector(".searchBtn");


searchBtn.addEventListener("click", () => {
  const query = searchInput.toLowerCase()
  const searchFn = (b) => {
    if (b.title.toLowerCase().includes(query) === true) {
      return b
    }
    if (b.author.toLowerCase().includes(query) === true) {
      return b
    }    
    if (b.language.toLowerCase().includes(query) === true) {
      return b
    }
    if (b.subject.toLowerCase().includes(query) === true) {
      return b
    }
    return
  }
  bookshelf.filterVisibleBooks(searchFn);
});


// Sort function

const sortBy = document.querySelector(".sortBy");

// NOTE: This only sorts by the titles of the books!
sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
  }

  bookshelf.sortVisibleBooks(sortFn);
});



// Add new book

const BookAddBtn = document.getElementById("addBooksBtn")
const newAuthor = document.getElementById("author")
const newTitle = document.getElementById("title")
const newLanguage = document.getElementById("language")
const newSubject = document.getElementById("subjects")

BookAddBtn.addEventListener("click", () => {
  let newBook = new Book(newAuthor.value, newLanguage.value, newSubject.value, newTitle.value)
  bookshelf.addBook(newBook)
  bookshelf.visibleBooks = bookshelf.books
  bookshelf.sortVisibleBooks((a, z) => a.title.localeCompare(z.title))
  bookshelf.render()
  
})
