import { Link, Outlet, useLoaderData,  } from 'react-router-dom';
import '../Components/Navbar.css'
import { useEffect, useState } from 'react';
import { getStoredReadBooks } from '../Components/Utility/localStorage';


const ListedBooks = () => {
    
    const books = useLoaderData();
    
    const [displayBooks, setDisplayBooks ]= useState(); 
    
    useEffect( () => {
        const storedBooksId = getStoredReadBooks();


        if (books.length > 0 ){
            const booksRead = books.filter(book => storedBooksId.includes(book.Id) );

            
            setDisplayBooks(booksRead);
            // console.log(books, storedBooksId, booksRead);
        }
     },[books]);


    const handleBookSort = filter => {
        if (filter === 'Rating') {
            const ratingList = displayBooks.filter( r => r.rating > r.rating);
            setDisplayBooks(ratingList);
            
        } else if (filter === 'Number of pages'){ 
            const pagesList = displayBooks.filter( r => r.totalPages > r.totalPages);
            setDisplayBooks(pagesList);

        } else if (filter === 'Published year') {
            const publishedList = displayBooks.filter( r => r.yearOfPublishing > r.yearOfPublishing);
            setDisplayBooks(publishedList);
        }
    }
   
    const [tabIndex, setTabIndex] = useState(true)
    return (
        <div className="">
            <h2 className="h-16 bg-slate-200 text-center text-2xl font-bold pt-4 mt-5 mb-8" >Books </h2>

            <button className="btn btn1 justify-center items-center ml-[47%]"> <details className="dropdown">
  <summary className="m-1">Sort by </summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=> handleBookSort('rating')  }><a> Rating </a></li>
    <li><a> Number of pages </a></li>
    <li><a> Published year  </a></li>
  </ul>
</details> </button>

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ml-10">
	<Link 
    to=''
    onClick={() => setTabIndex(true)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === true? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read books </span>
	</Link>
	<Link 
    to={`wishlist`}
    onClick={() => setTabIndex(false)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===false? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 `}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span> Wishlist Books </span>
	</Link>
	
	
</div>
<Outlet/>
        </div>
    );
};

export default ListedBooks;