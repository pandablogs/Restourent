import React, { useState } from 'react'
import './component.scss'
import { useSelector } from 'react-redux';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Header = () => {
    const cartItems = useSelector(state => state.cart);
    const totalItems2 = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    return (
        <>
            <nav className="bg-black p-2 lg:sticky top-0 z-50">
                <div className="w-full pl-2 sm:pl-6 lg:pl-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg
                                    className="hidden h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                />
                                <div className="hidden sm:ml-6 sm:block">
                                    <Link to={'/'} className="border-l border-l-zinc-500 pl-6 font-spatial text-xl text-white font-normal">
                                        Love cooking
                                    </Link>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center w-3/5">
                                <div className="flex relative rounded-full w-full shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:w-full">
                                    <div className="w-component h-component absolute inset-y-0 left-2 z-10 flex items-center justify-center rounded-full text-zinc-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                                            </path>
                                        </svg>
                                    </div>
                                    <input
                                        id="search"
                                        name="search"
                                        type="text"
                                        placeholder="Search for recipes, ingredients, etc..."
                                        autoComplete="search"
                                        className="block flex-1 border-0 rounded-full bg-white py-2 pl-10 text-gray-900 placeholder:font-semibold placeholder:text-gray-500 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                    <div className="absolute right-1 inset-y-1 px-2 flex items-center justify-center rounded-full bg-zinc-200 transition ease-out group-hover:bg-zinc-200">
                                        <svg className='absolute' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            class="h-4 w-4 text-zinc-700">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="">
                                    <button className="relative w-10 h-10 mx-4 flex justify-center items-center rounded-full hover:bg-gray-900" onClick={handleCart}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l3.6-7H5.4M7 13L5.4 6M7 13l-1 5m10-5l1 5m-5-1h-4m6 0H7" />
                                        </svg>
                                        {totalItems2 > 0 && (
                                            <sup className="absolute -top-1 -right-1 mt-1 mr-2 bg-red-500 text-white text-xs font-semibold rounded-full h-4 w-4 animate-pulse flex items-center justify-center">
                                                {totalItems2}
                                            </sup>
                                        )}
                                    </button>
                                    <Cart isOpen={isCartOpen} onClose={handleCart} />
                                </div>
                            </div>
                        </div>
                        {/* <div className="absolute border-2 px-1.5 rounded-full text-white moving-border right-14 flex items-center pr-2 sm:relative sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type="button"
                                className="rounded-md bg-transparent px-2.5 py-2 text-sm font-semibold text-white shadow-sm"
                            >
                                Upgrade
                            </button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true"
                                className="h-3 mr-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                            </svg>
                        </div> */}
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="items-center space-x-4 pl-8 sm:pl-4 py-3 flex">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg
                                    className="h-5 w-5 text-zinc-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <input
                                id="search"
                                name="search"
                                type="text"
                                placeholder="Search for recipes, ingredients, etc..."
                                className="block w-full pl-10 pr-3 py-2 rounded-full bg-white text-gray-900 placeholder:font-semibold placeholder:text-gray-500 focus:outline-none sm:text-sm sm:leading-6"
                            />
                            <div className="absolute right-1 inset-y-1 px-2 flex items-center justify-center rounded-full bg-zinc-200 transition ease-out group-hover:bg-zinc-200">
                                <svg className='absolute' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                    class="h-4 w-4 text-zinc-700">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="">
                            <button className="relative px-4 py-4 rounded-full hover:bg-gray-900" onClick={handleCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l3.6-7H5.4M7 13L5.4 6M7 13l-1 5m10-5l1 5m-5-1h-4m6 0H7" />
                                </svg>
                                {totalItems2 > 0 && (
                                    <sup className="absolute top-0 right-0 mt-1 mr-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                        {totalItems2}
                                    </sup>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Cart isOpen={isCartOpen} onClose={handleCart} />
        </>
    )
}

export default Header