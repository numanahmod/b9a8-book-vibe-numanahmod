import { useLoaderData, useParams } from "react-router-dom";


const Book = () => {
    const books = useLoaderData();
    console.log(books)
    const {bookId} = useParams();

    const id = books.find((i) => i.Id == bookId);
    
    const {bookName, author } = id; 

    return (
        <div>
            <h2> Book Name: {bookName} </h2>
            <p>{author}</p>
        </div>
    );
};

export default Book;