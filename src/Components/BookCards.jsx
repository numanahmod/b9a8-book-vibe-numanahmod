/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";


const BookCards = ({book}) => {

    const {image, bookName, author, rating, category, tags, Id} = book;

    return (
        <Link to={`/book/${Id}`} className="w-[100%] mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline p-3 rounded-lg">
				<div className="w-[325px] h-[330px] bg-gray-100 rounded-lg justify-center items-center pt-20 pb-20 pl-24 pr-20">
                <img role="presentation" className="w-[200px] h-[300px pt-32]" src={image} />
                </div>
				<div className="p-6 space-y-2">
                    <p className="font-bold text-green-600 gap-10"> <span>#{tags[0]}</span> <span className="pl-10"> #{tags[1]}</span> </p>

					<h3 className="text-2xl font-bold text-black ">{bookName}</h3>
					<p className=" text-black font-semibold"> By: {author} </p>

                    <div className="flex justify-between   font-semibold text-neutral-950">
                        <div> {category} </div>
                        <div className="inline-flex gap-2"> {rating} <AiOutlineStar className="pt-1 text-2xl" />
 </div>
                    </div>
				</div>
			</Link>
    );
};

export default BookCards;