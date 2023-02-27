class Book {
  constructor(authors, language, subject, title) {
    this.authors = authors
    this.language = language
    this.subject = subject
    this.title = title
    this.isFavorite = false
    this.comment = ""
  }

  render() {
    /* NOTE: Change render! This is currently a barebones template. */
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

    const commRend = document.createElement("span")
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
      } 
      commRend.style.display = "none"   
    })
    return li;
  }
}