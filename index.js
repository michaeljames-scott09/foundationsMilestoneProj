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

// **** Average Subjects in bookshelf ******

const subjAverage = document.getElementsByClassName("subCount")

  



// Search function

const searchInput = document.getElementById("searchInput");
const searchBtn = document.querySelector(".searchBtn");

// I dont completely understand whats going on here but this is my best attempt at adapting some code from google, to work with this bookshelf app
// It doesnt  work  and the psuedo code below was the other attempt that i think was second closest to work with the forEach loop


// function searchBooks(book, searchInput) {
//   return Object.values(book).some(value => {
//     if (typeof value === "string") {
//       return value.toLowerCase().includes(searchInput.toLowerCase())
//     } 
//     return
//   })
// }

searchBtn.addEventListener("click", (searchInput)=> {
  bookshelf.filterVisibleBooks((book) => {
    book[keys].forEach((key) => {
      if (book[key].includes(searchInput)) {
        return book
      }
      return false
    })
  })
})

// searchBtn.addEventListener("click", () => {
//   const searchFn = (bookshelf, searchInput) => {
//     return bookshelf.filterVisibleBooks(book => {
//       book.keys().forEach(key => {
//         if (book[key].includes(searchInput.value)) {
//           return book
//         }
//         return
//       })
//     })
//   }
//   })



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

// Language Search buttons
// English
const englishSearch = document.querySelector(".English")
englishSearch.addEventListener("click", () => {
  bookshelf.filterVisibleBooks(book => book.language === "en") 
})
// German
const germanSearch = document.querySelector(".German")
germanSearch.addEventListener("click", () => {
  bookshelf.filterVisibleBooks(book => book.language === "de")
})
// French
const  frenchSearch = document.querySelector(".French")
frenchSearch.addEventListener("click", () => {
  bookshelf.filterVisibleBooks(book => book.language === "fr")
})
// Finnish
const  finnishSearch = document.querySelector(".Finnish")
finnishSearch.addEventListener("click", () => {
  bookshelf.filterVisibleBooks(book => book.language === "fi")
})

