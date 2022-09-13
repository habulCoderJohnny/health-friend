import React from 'react';

const Navbar = () => {
    const menuItem = <>
        <li><a>Home</a>
            <a>About</a>
            <a>Department</a>
            <a>Pages</a>
            <a>Blogs</a>
            <a>Contacts</a>
        </li>


    </>
    return (
        <div className="navbar">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 w-52">
                        {menuItem}
                    </ul>
                </div>
                <a className="text-2xl font-bold ml-10"><span className='text-primary'>Doc</span><span className='text-secondary'>mic.</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar ml-6">
                <a className="btn btn-primary">Free Consulation</a>
            </div>
        </div>
    );
};

export default Navbar;