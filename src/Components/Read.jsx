import { useEffect, useState } from "react";
import { Link, useLoaderData, } from "react-router-dom";
import { getStoredReadBooks } from "./Utility/localStorage";




const Read = () => {
    const books = useLoaderData();
    const [ listedReadBooks, setListedReadBooks] = useState([]);
    

    


     useEffect( () => {
        const storedBooksId = getStoredReadBooks();


        if (books.length > 0 ){
            const booksRead = books.filter(book => storedBooksId.includes(book.Id) );

            setListedReadBooks(booksRead);
            
            // console.log(books, storedBooksId, booksRead);
        }
     },[books]);

     
    

    return (
        <>
        <p className="ml-12 mt-3">Book Listed: {listedReadBooks.length}</p>

        {
            listedReadBooks.map(b => <section key={b.Id}>
            
            <div className="container border-[2px] border-opacity-10 mt-6 flex flex-col p-6 mx-auto sm:py-12  lg:flex-row  mb-12">
                <div className="items-center justify-center p-4 lg:mt-0h-  ">
                    <img src={b.image}  className="h-[350px] w-[400px] rounded-xl" />
                </div>
                <div className="flex flex-col  rounded-sm  lg:text-left">
                    <h1 className="mt-7 text-xl text-black font-bold leading-none sm:text-2xl"> {b.bookName}
                    </h1>
                    <p className=" text-black font-semibold pt-2 pb-3"> By: {b.author}  </p>
                
                   
                    
        
                    <p className=" text-black font-semibold pt-3 pb-2"> <span className="font-bold ">Review:</span>   {b.review} </p>
        
                    <p className="font-bold text-black  gap-10"> <span className="pr-10"> Tag: </span><span className=" text-green-600">#{b.tags[0]} </span> <span className=" text-green-600 pl-10 "> #{b.tags[1]}</span> <span > Published:  </span> <span>{b.yearOfPublishing}</span> </p>
        
                      
                        <div className="flex col-span-2 pb-5 pt-5">
                            <div className="">
                            
                        <p > Publisher: <span className="font-bold">{b.publisher}</span>  </p>
                        
                      
                            </div>
                            <div className="ml-10">
                           <p> <span > Number of Pages: </span> <span className="font-bold">{b.totalPages}</span> </p>
                            
                            
                         
                            </div>
                        </div>
                        <hr />
                        <div className="flex col-span-3 gap-5 mt-5 pt-2">
                       <div className="pt-2">category: <span className="font-bold"> {b.category} </span></div>
                       <div className="pt-2">  Rating:   <span className="font-bold"> {b.rating}</span> </div>
                       <div> <a rel="noopener noreferrer" href="#" className="btn btn1 px-8 py-3 text-lg font-semibold rounded"> <Link to={`/book/${b.Id}`} > <button> View Details </button> </Link> </a> </div>
                        </div>
                    
                </div>
            </div>
        </section>)
        }
        
</>
    );
};

export default Read;