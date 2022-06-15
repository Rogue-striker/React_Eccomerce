import { React } from 'react';
import { MenuIcon, SearchIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react';
import MenuItem from './MenuItem';
import { Outlet ,Link} from 'react-router-dom';
const Navbar = () => {
    const style = "sm: text-md mx-2 px-2 cursor-pointer list-none";
    const displaySearchField = () => {
        console.log("search");
    }  
    return (
        <>
            <div className="container mx-auto h-navbar p-4 mb-5 sm:p-5">
                <div className="flex justify-between">
                    <div className="flex">
                        <Link to ="/">
                        <h1 className="font-bold text-2xl sm:text-4xl cursor-pointer">The Store.</h1>
                        </Link>
                    </div>
                    <div className="flex flex-row items-center ">
                        <div className='md:relative'>
                            <input className="hidden 
                        placeholder-gray-400
                        md:block
                        md:py-1.5
                        md:pr-8 
                        md:pl-2 
                        md:border 
                      md:bg-gray-200
                        border-solid 
                      focus:border-gray-400
                        md:rounded md:h-10 md:w-96
                        focus:outline-none
                      focus:bg-white
                        "
                        type="text"
                        placeholder='search for products and more' />
                        <SearchIcon className='hidden md:block md:h-5 md:w-5 md:absolute md:text-gray-500 md:right-2 md:top-2.5 '/>
                        </div>
                    </div>
                    <div className=" hidden  sm:flex flex-row items-center">
                        <li className={style}><Link to='/products'>
                            Home
                        </Link>
                        </li>
                        <li className={style}>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li className={style}>
                            <Link to="/cart">
                                Cart
                            </Link>
                        </li>
        
                            <Link to="register">
                            <button className="mx-2 text-md rounded px-1 py-1">
                                Sign up
                            </button>
                            </Link>
                        <Link to="login">
                            <button className="mx-2 text-md rounded px-2 py-1 bg-blue-600 text-white">
                                Log in
                            </button>
                        </Link>
                    </div>
                    <div className='md:hidden relative flex items-center'>
                        <SearchIcon className="h-6 w-6 mr-3" onClick={displaySearchField} />
                        <Menu>
                            <Menu.Button>
                                <MenuIcon className='h-6 w-6' />
                            </Menu.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            ></Transition>
                            <Menu.Items className="flex flex-col justify-center absolute right-0 top-12 m-1 w-60 z-50">
                                <div className="flex flex-col justify-center p-2 bg-zinc-50 shadow-lg text-center rounded-xl">
                                    <MenuItem name="Home" />
                                    <MenuItem name="About" />
                                    <MenuItem name="Cart" />
                                    <MenuItem name="Sign up" />
                                    <MenuItem name="Log in" />
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
            </div >
            <Outlet />
        </>
    );
};
export default Navbar;
