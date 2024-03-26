/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


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
                        <div className="inline-flex gap-2"> {rating} <svg width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

	<defs/>
	<path id="Vector" d="M8.68 0.24C8.77 0.18 8.88 0.15 9 0.15C9.11 0.15 9.22 0.18 9.31 0.24C9.4 0.3 9.47 0.39 9.52 0.49L11.64 5.6C11.68 5.7 11.75 5.78 11.83 5.84C11.91 5.91 12.01 5.94 12.12 5.95L17.63 6.39C18.13 6.43 18.33 7.06 17.95 7.38L13.75 10.98C13.67 11.05 13.61 11.14 13.58 11.24C13.55 11.33 13.54 11.44 13.57 11.54L14.85 16.92C14.88 17.03 14.87 17.15 14.83 17.25C14.8 17.35 14.73 17.44 14.64 17.51C14.55 17.57 14.44 17.61 14.33 17.62C14.22 17.62 14.11 17.59 14.01 17.53L9.29 14.65C9.2 14.6 9.1 14.57 9 14.57C8.89 14.57 8.79 14.6 8.7 14.65L3.98 17.54C3.88 17.59 3.77 17.62 3.66 17.62C3.55 17.61 3.44 17.58 3.35 17.51C3.26 17.45 3.2 17.35 3.16 17.25C3.12 17.15 3.11 17.03 3.14 16.92L4.42 11.54C4.45 11.44 4.44 11.33 4.41 11.24C4.38 11.14 4.32 11.05 4.24 10.98L0.04 7.38C-0.05 7.31 -0.11 7.21 -0.14 7.11C-0.17 7 -0.17 6.88 -0.13 6.78C-0.1 6.67 -0.03 6.58 0.05 6.51C0.14 6.44 0.25 6.4 0.36 6.39L5.88 5.95C5.98 5.94 6.08 5.91 6.16 5.84C6.24 5.78 6.31 5.7 6.35 5.6L8.48 0.49C8.52 0.39 8.59 0.3 8.68 0.24Z" stroke="#424242" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
</svg>
 </div>
                    </div>
				</div>
			</Link>
    );
};

export default BookCards;