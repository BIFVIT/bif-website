"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MobileNav from "../../components/globals/MobileNav"
const Navbar = () => {
    const [ isLangMenuOpen, setLangMenuOpen] = useState(false)
    const [isMobileNavOpen, setMobileNavOpen] = useState(false); 
    const router = useRouter(); 

    const toggleDropdown = () => {
        setLangMenuOpen(!isLangMenuOpen);
    };

    return (
        <nav className="bg-background dark:bg-darkbackground">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <Image
                        width={32}
                        height={32}
                        src="https://raw.githubusercontent.com/BIFVIT/bif-website/refs/heads/main/src/assets/favicon.ico"
                        className="h-8 mr-3"
                        alt="BIF Logo"
                    />
                    <span className="text-text self-center text-2xl font-semibold whitespace-nowrap dark:text-darktext">BIF</span>
                </a>

                <div className="flex items-center md:order-2">
                    {/* Add the following onClick handler after making language routes: onClick={toggleDropdown} */}
                    <button
                        type="button"
                        data-dropdown-toggle="language-dropdown-menu"
                        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-text dark:text-darktext rounded-lg cursor-pointer hover:bg-highlight dark:hover:bg-darkhighlight dark:hover:text-white"
                        onClick={toggleDropdown} // Added onClick for dropdown
                    >
                        <svg
                            className="w-5 h-5 mr-2 rounded-full"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 3900 3900"
                        >
                            <path fill="#b22234" d="M0 0h7410v3900H0z" />
                            <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" />
                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                            <g fill="#fff">
                                <g id="d">
                                    <g id="c">
                                        <g id="e">
                                            <g id="b">
                                                <path
                                                    id="a"
                                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                                />
                                                <use xlinkHref="#a" y="420" />
                                                <use xlinkHref="#a" y="840" />
                                                <use xlinkHref="#a" y="1260" />
                                            </g>
                                            <use xlinkHref="#a" y="1680" />
                                        </g>
                                        <use xlinkHref="#b" x="247" y="210" />
                                    </g>
                                    <use xlinkHref="#c" x="494" />
                                </g>
                                <use xlinkHref="#d" x="988" />
                                <use xlinkHref="#c" x="1976" />
                                <use xlinkHref="#e" x="2470" />
                            </g>
                        </svg>
                        English (US)
                    </button>

                    <div
                        className={`z-50 ${isLangMenuOpen ? '' : 'hidden'} absolute translate-y-10 mt-32 my-4 text-text dark:text-darktext list-none bg-secondary dark:bg-darksecondary divide-y divide-gray-100 rounded-lg shadow`}
                        id="language-dropdown-menu"
                    >
                        <ul className="py-2 font-medium" role="none">
                            <li>
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-text dark:text-darktext hover:bg-highlight dark:hover:bg-darkhighlight dark:hover:text-darktext"
                                    role="menuitem"
                                >
                                    <div className="inline-flex items-center">
                                        <svg
                                            aria-hidden="true"
                                            className="h-3.5 w-3.5 rounded-full mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="flag-icon-css-us"
                                            viewBox="0 0 512 512"
                                        >
                                            <g fillRule="evenodd">
                                                <g strokeWidth="1pt">
                                                    <path
                                                        fill="#bd3d44"
                                                        d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                        transform="scale(3.9385)"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                        transform="scale(3.9385)"
                                                    />
                                                </g>
                                                <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                                                <path
                                                    fill="#fff"
                                                    d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9L42 24.2l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L58 24.2l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9L90 24.2l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                    transform="scale(3.9385)"
                                                />
                                            </g>
                                        </svg>
                                        English (US)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <MobileNav />
            </div>
        </nav>
    );
};

export default Navbar;
