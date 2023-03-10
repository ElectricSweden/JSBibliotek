let books = document.getElementById("books");
const borrowBtn = document.getElementsByClassName("borrow");
const genLib = document.getElementById("generateLibrary").addEventListener("click", drawBooks);

function showAvailable(book, count)
{
    return `
    <div class="book" id="${book.ISBN}">
        <p>${book.title}</p>
        <ul>
            <li>Title: ${book.title}</li>
            <li>Author: ${book.author}</li>
            <li>ISBN: ${book.ISBN}</li>
        </ul>
        <button class="borrow" onclick="borrow(${book.ISBN})">Borrow</button>
    </div>
    `;
}

const book = {
    title: "undefined",
    author: "undefined",
    ISBN: 0,
    availability: true
    //cover:
}

var library = [
    { title: "Harry Potter and the Sorcerer’s Stone", author: "JK.Rowling", ISBN: 1, availability: true},
    { title: "Harry Potter and the Chamber of Secrets", author: "JK.Rowling", ISBN: 2, availability: true},
    { title: "Harry Potter and the Prisoner of Azkaban", author: "JK.Rowling", ISBN: 3, availability: true}
];


function borrow(bookISBN)
{
    if (book.availability == true)
    {
        library.forEach(book => {
            if (book.ISBN == bookISBN)
                book.availability = false;
        });
        
        console.log(bookISBN + " borrowed successfully.");
        drawBooks();
    }
}

function drawBooks()
{
    var count = 0;
    books.innerHTML = "";
    library.forEach(book => {
        if (book.availability == true)
        {
            books.innerHTML += showAvailable(book, count)
            count++
        }
    })
}

drawBooks();