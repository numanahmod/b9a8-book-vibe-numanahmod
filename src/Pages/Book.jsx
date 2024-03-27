import { useLoaderData, useParams } from "react-router-dom";
import '../Components/Navbar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks } from "../Components/Utility/localStorage";

const Book = () => {
    const books = useLoaderData();
 
    const {Id} = useParams();

    const id = books.find((i) => i.Id == Id);
  
    
    const {image, bookName, author, totalPages, rating, yearOfPublishing, category, tags, review,publisher } =  id; 

    const handleRead =  () => {
        saveReadBooks(Id);
        toast('The book is successfully added to read list')
    }
    const handleWishlist = () => {
        toast('The book is successfully added to the Wishlist')
    }

    return (
        <section className="">
	<div className="container border-[2px] border-opacity-10 mt-10 flex flex-col justify-center p-6 mx-auto sm:py-12  lg:flex-row lg:justify-between mb-20">
		<div className="items-center justify-center p-6 lg:mt-0">
			<img src={image}  className="rounded-2xl h-[450px]" />
		</div>
		<div className="flex flex-col  rounded-sm  lg:text-left">
			<h1 className="mt-12 text-xl text-black font-bold leading-none sm:text-2xl"> {bookName}
			</h1>
			<p className=" text-black font-semibold pt-2 pb-3"> By: {author} </p>
            <hr />
            <p className="text-black pt-2 pb-2"> {category} </p>
            <hr />

            <p className=" text-black font-semibold pt-3 pb-2"> <span className="font-bold ">Review:</span>    {review}</p>

            <p className="font-bold text-black  gap-10"> <span className="pr-10"> Tag: </span><span className=" text-green-600">#{tags[0]}</span> <span className=" text-green-600 pl-10 "> #{tags[1]}</span> </p>

                <hr /> 
                <div className="flex col-span-2 pb-5 pt-5">
                    <div className="">
                    <p > Number of Pages: </p>
                <p > Publisher:  </p>
                <p > Year of Publishing:  </p>
                <p > Rating: </p>
                    </div>
                    <div className="ml-10 font-bold">
                   <p> {totalPages} </p>
                    <p>{publisher}</p>
                    <p>{yearOfPublishing}</p>
                   <p> {rating}</p>
                    </div>
                </div>
			<div className=" flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="btn btn1 px-8 py-3 text-lg font-semibold rounded"> <button onClick={handleRead}>Read</button> </a>
				<a rel="noopener noreferrer" href="#" className="btn btn2 px-8 py-3 text-lg font-semibold border rounded "><button onClick={handleWishlist}>Wishlist</button></a>
			</div>
            <ToastContainer /> 
		</div>
	</div>
</section>
    );
};

export default Book;