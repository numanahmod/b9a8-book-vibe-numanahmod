import { Link, useRouteError } from "react-router-dom";



const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2 className="text-2xl text-center pt-20" > Oops!!! </h2>
         

            {/* <p className="text-2xl text-center pt-20" >{error.statusText || error.message}</p> */}
            {
                error.status === 404 && <div className="text-2xl text-center">
                    <h3 className="text-red-600"> Page not found</h3>
                    <p>Go back <Link to="/"> <button className="w-20 h-10 border-2 text-green-700 bg-amber-200"> Home </button></Link> </p>
               
                </div>
            }

        </div>
    );
};

export default ErrorPage;