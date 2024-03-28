import { Link } from "react-router-dom";




const Read = () => {
    // const books = useLoaderData();
 
    // const {Id} = useParams();

    // const id = books.find((i) => i.Id == Id);
  
    // console.log(id);
    // const {image, bookName, author, totalPages, rating, yearOfPublishing, category, tags, review,publisher } =  id; 
    

    return (
        <section className="">
	<div className="container border-[2px] border-opacity-10 mt-6 flex flex-col p-6 mx-auto sm:py-12  lg:flex-row  mb-12">
		<div className="items-center justify-center p-4 lg:mt-0">
			<img src='../../public/bannerbook.jpg'  className="rounded-2xl h-[350px]" />
		</div>
		<div className="flex flex-col  rounded-sm  lg:text-left">
			<h1 className="mt-8 pt-5 text-xl text-black font-bold leading-none sm:text-2xl">boiyer nam 
			</h1>
			<p className=" text-black font-semibold pt-2 pb-3"> By: lekhok  </p>
        
           
            

            <p className=" text-black font-semibold pt-3 pb-2"> <span className="font-bold ">Review:</span>    review</p>

            <p className="font-bold text-black  gap-10"> <span className="pr-10"> Tag: </span><span className=" text-green-600">#tags</span> <span className=" text-green-600 pl-10 "> #tags</span> <span > Year of Publishing:  </span> <span>yearOfPublishing</span> </p>

              
                <div className="flex col-span-2 pb-5 pt-5">
                    <div className="">
                    
                <p > Publisher: <span>publisher</span>  </p>
                
              
                    </div>
                    <div className="ml-10 font-bold">
                   <p> <span > Number of Pages: </span> totalPages </p>
                    
                    
                 
                    </div>
                </div>
                <hr />
                <div className="flex col-span-3 gap-5 mt-5">
               <div>category: <span> category </span></div>
               <div>  Rating:   <span> rating</span> </div>
               <div> <a rel="noopener noreferrer" href="#" className="btn btn1 px-8 py-3 text-lg font-semibold rounded"> <Link > <button> View Details </button> </Link> </a> </div>
                </div>
			
		</div>
	</div>
</section>
    );
};

export default Read;