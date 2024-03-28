import './Home.css'

import dating from '../../public/dating.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import BookCards from '../Components/BookCards';

const Home = () => {

    const books = useLoaderData();
    console.log(books);

    return (
        <div>
           
            
            <div className="min-h-[calc(100vh-84px)] bg-base-200 m-12 rounded-lg pt-20 ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-80">
                     <img src={dating} className="max-w-sm rounded-lg shadow-2xl" />
                 <div>
                     <h1 className="text-5xl font-bold pb-10">Books to freshen <br /> up your bookshelf</h1>
      
                     <Link to='/ListedBooks'><button className="btn-view btn  ">View The List</button></Link>
                 </div>
              </div>
            </div>
            {/* books */}
            <h1 className='text-center text-2xl font-bold mb-8'> Books </h1>

            <section className="text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{/* bookCards */}
            {books.map(book =>(
                <BookCards book={book} key={book.Id} />
            ) )}
			
		</div>
		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 bg-gray-900 text-gray-400 text-gray-400">Load more posts...</button>
		</div> */}
	</div>
</section>

        </div>
    );
};

export default Home;