let books = document.getElementById("books");
const borrowBtn = document.getElementsByClassName("borrow");
const genLib = document.getElementById("generateLibrary").addEventListener("click", drawBooks);


function showAvailable(book, count)
{
    return `
    <div class="book" id="${book.ISBN}">
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>ISBN: ${book.ISBN}</p>
        <button class="borrow" onclick="borrow(${book.ISBN})">Borrow</button>
    </div>
    `;
}

function showCover(book, count)
{
    return `
    <img src="${book.cover}"  onclick="drawContent(${book.ISBN})">
    `;
}

const book = {
    title: "undefined",
    author: "undefined",
    ISBN: 0,
    availability: true,
    cover: "undefined"
}

var library = [
    { title: "Harry Potter and the Philosopher's Stone", author: "JK.Rowling", ISBN: 1, availability: true, cover: "./covers/harrypotterstonecover.jpg"},
    { title: "Harry Potter and the Chamber of Secrets", author: "JK.Rowling", ISBN: 2, availability: true, cover: "./covers/chamber2.jpg"},
    { title: "Harry Potter and the Prisoner of Azkaban", author: "JK.Rowling", ISBN: 3, availability: true, cover: "./covers/harrypotterprisoner.jpg"}
];


function borrow(bookISBN)
{
    if (book.availability == true)
    {
        library.forEach(book => {
            if (book.ISBN == bookISBN)
                book.availability = false;
        });
        document.getElementById("title").style.display = "flex";
        console.log(bookISBN + " borrowed successfully.");
        drawBooks();
    }
}

function drawBooks()
{
    var anyAvailable = 0;
    var count = 0;
    books.innerHTML = "";
    library.forEach(book => {
        if (book.availability == true)
        {
            books.innerHTML += showCover(book, count)
            count++
            anyAvailable = 1;
        }
    })
    if (anyAvailable == 0)
    {
        document.getElementById("title").innerHTML = "No available books";
    }
}


function drawContent(bookISBN)
{
    var count = 0;
    books.innerHTML = "";
    document.getElementById("title").style.display = "none";
    library.forEach(book => {
        if (book.ISBN == bookISBN)
        {
            books.innerHTML += showAvailable(book, count)
            count++
        }
    })
}

drawBooks();