const books = [
  {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear: 2018
  },
  {
    title: "The Alchemist",
    authorName: "Paulo Coelho",
    releaseYear: 1988
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => {
  return book.releaseYear <= 1950;
});

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
