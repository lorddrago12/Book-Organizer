# 📚 Book Filter & Sorter

A beginner-friendly JavaScript snippet that demonstrates how to **filter** and **sort** an array of objects — using a list of books as an example.

---

## 🧠 How It Works

### 1. The Data

We start with an array of book objects. Each book has three properties:

```js
const books = [
  { title: "Atomic Habits", authorName: "James Clear", releaseYear: 2018 },
  { title: "The Alchemist", authorName: "Paulo Coelho", releaseYear: 1988 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 }
];
```

> Think of an **array** as a list, and each **object** as a row in a table with named columns.

---

### 2. Filtering

```js
const filteredBooks = books.filter((book) => {
  return book.releaseYear <= 1950;
});
```

`.filter()` loops through every book and keeps only the ones where the condition is `true`. Here, we keep books released in **1950 or earlier**.

**Result:** Only `"1984"` (1949) makes it through.

---

### 3. Sorting

```js
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) return -1;
  else if (book1.releaseYear > book2.releaseYear) return 1;
  else return 0;
}

filteredBooks.sort(sortByYear);
```

`.sort()` compares two items at a time using a **comparator function**:

| Return value | Meaning |
|---|---|
| `-1` | `book1` comes **before** `book2` |
| `1` | `book1` comes **after** `book2` |
| `0` | They are **equal** (no swap) |

This sorts the books from **oldest to newest**.

---

### 4. Output

```js
console.log(filteredBooks);
// [ { title: '1984', authorName: 'George Orwell', releaseYear: 1949 } ]
```

---

## 🚀 Running the Code

No libraries or frameworks needed — just plain JavaScript!

**In the browser:**
1. Open DevTools (`F12` or right-click → Inspect)
2. Go to the **Console** tab
3. Paste the code and hit `Enter`

**With Node.js:**
```bash
node index.js
```

---

## 🤝 Contributing

Contributions are welcome, especially from those learning JavaScript! Here are some ideas to extend the project:

- Filter by author name instead of year
- Sort alphabetically by title
- Add more book properties (genre, rating, etc.)
- Write a function that combines filtering and sorting into one step

**To contribute:**
1. Fork this repository
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes and commit: `git commit -m "Add my feature"`
4. Push to your branch: `git push origin my-feature`
5. Open a Pull Request

---
