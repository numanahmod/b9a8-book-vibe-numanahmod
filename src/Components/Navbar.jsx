import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 fixed shadow-lg px-4 z-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-y-5">
      <NavLink to='/' className=" "> Home </NavLink>
        <NavLink to='/ListedBooks' className=""> Listed Books </NavLink>
        <NavLink to='/PagesToRead'className=" "> Pages to Read </NavLink>
        <NavLink to='/OnlineClasses'className=" "> Online Classes </NavLink>
        <NavLink to='/About'className=" "> About </NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3">
        <NavLink to='/' className={({isActive})=> isActive? 'btn font-bold btnc':'font-bold btn'}> Home </NavLink>
        <NavLink to='/ListedBooks' className={({isActive})=> isActive? 'btn font-bold btnc':'font-bold btn'}> Listed Books </NavLink>
        <NavLink to='/PagesToRead'className={({isActive})=> isActive? 'btn  font-bold btnc':'font-bold btn'}> Pages to Read </NavLink>
        <NavLink to='/OnlineClasses'className={({isActive})=> isActive? 'btn  font-bold btnc':'font-bold btn'}> Online Classes </NavLink>
        <NavLink to='/About'className={({isActive})=> isActive? 'btn  font-bold btnc':'font-bold btn'}> Free PDF Books  </NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn btn1 ">Sign In </a>
    <a className="btn btn2 ">Sign Up </a>
  </div>
</div>
        </div>
    );
};

export default Navbar;