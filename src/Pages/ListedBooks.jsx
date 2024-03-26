import { Link } from 'react-router-dom';
import '../Components/Navbar.css'
import { useState } from 'react';

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(true)
    return (
        <div className="">
            <h2 className="h-16 bg-slate-200 text-center text-2xl font-bold pt-4 mt-5 mb-8" >Books </h2>
            <button className="btn btn1 justify-center items-center ml-[47%]"> <ul> <ol>Sort By</ol> 
            <li> </li>
            <li></li></ul> </button>

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ml-10">
	<Link 
    // to=''
    onClick={() => setTabIndex(true)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === true? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read books </span>
	</Link>
	<Link 
    // to={`wishlist`}
    onClick={() => setTabIndex(false)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===false? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span> Wishlist Book </span>
	</Link>
	
	
</div>
        </div>
    );
};

export default ListedBooks;