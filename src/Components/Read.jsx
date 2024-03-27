import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "./Utility/localStorage";


const Read = () => {

    const books = useLoaderData();
    const [bookListed,  setBookListed ] = useState([]);
    useEffect(() => {
        const storedBooksId = getStoredReadBooks();

        if(books.length > 0){
            // const bookAdd = books.filter( book => storedBooksId.includes(book.Id))

            const bookAdd = [];

            for (const id of storedBooksId) {
                const book = books.find(book => book.id === id );
                if (book) {
                    bookAdd.push(book)
                }
            }
            setBookListed(bookAdd);
            // console.log(books,  bookAdd, storedBooksId);
        }
    })

    return (
        <div>
            <h2> pora oiche {bookListed.length} </h2>
        </div>
    );
};

export default Read;