class Book {
  constructor(authors, language, subject, title) {
    this.authors = authors
    this.language = language
    this.subject = subject
    this.title = title
    this.numPages = Math.floor(Math.random() * 10000)
    if (this.numPages >= 100) {
        this.category = "novel"
      }
      this.category = "short story"
    
    this.isFavorite = false
    this.comment = "No comment"
  }

  render() {
    // Adds the title (this.title) to the list item
    const li = document.createElement("li")
    const listText = document.createElement("span")
    listText.innerText = this.title
    li.append(listText)
    

    // Create favorite button
    const favButton = document.createElement("button")
    favButton.textContent = this.isFavorite ? "❤️" : "♡"
    li.append(favButton)

    // Toggle favorite property on click
    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite
      favButton.textContent = this.isFavorite ? "❤️" : "♡"
    });

    // Comment Button / field
    // Comment field is always visible but the button opens the place where
    //  the comment is stored so it can be viewed

    const commBtn = document.createElement("button")
    commBtn.textContent = "Comment"
    li.append(commBtn)

    const commText = document.createElement("input")
    commText.setAttribute("type", "text")
    commText.setAttribute("maxLength", 280)
    li.append(commText)

    const commReference = document.createElement("button")
    commReference.textContent = "Note"
    li.append(commReference)

// Whole section would not allow me to use the .setAttribute to change whether the box was visible or not
// Had to resort to .style.display = "none/black"

    const commRend = document.createElement("span")
    commRend.setAttribute("class", "commentBox")
    commRend.style.display = "none"
    commRend.textContent = this.comment
    li.append(commRend)

    commBtn.addEventListener("click", () => {
      this.comment = commText.value
      bookshelf.render()
    })

    commReference.addEventListener("click", () => {
      if (commRend.style.display === "none") {
        commRend.style.display = "block"
      } else {
      commRend.style.display = "none"   
      }
    })
    // Returns the list item with everything inside it so it can be sent to the ul
    return li;
  }
}