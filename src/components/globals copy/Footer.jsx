import React from 'react'
import {FiGithub, FiFacebook, FiLinkedin, FiInstagram} from 'react-icons/fi'
import { FaMedium } from "react-icons/fa6"
import { BsLinkedin , BsFacebook} from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
const Footer = () => {
  return (
    <footer class="px-4 lg:px-36 text-text dark:text-darktext bg-background dark:bg-darkbackground body-font">
        <div className='h-16'></div>
        {/* <hr className=''/> */}
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a href="" target="_blank" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-500 dark:text-darktext">
            <span class="ml-3 text-xl">Becoming I Foundation</span>
            </a>
            <p class="text-sm text-gray-500 dark:text-darktext sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 BIF-VIT
            {/* <a href="" target="_blank" href="https://github.com/BIFVIT" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">Developed with 💖 by @BIFVIT</a> */}
            </p>



            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            
            <a href="" target="_blank" class="text-text text-xl dark:text-darktext hover:text-primary dark:hover:text-dark-primary">
            <FaFacebookSquare/>
            </a>

            <a href="" target="_blank" class="ml-3 text-text text-xl dark:text-darktext hover:text-primary dark:hover:text-dark-primary">
            <FiInstagram/>
            </a>

            <a href="" target="_blank" class="ml-3 text-text text-xl dark:text-darktext hover:text-primary dark:hover:text-dark-primary">
            <BsLinkedin/>
            </a>

            <a href="" target="_blank" class="ml-3 text-text text-xl dark:text-darktext hover:text-primary dark:hover:text-dark-primary">
            <FiGithub/>
            </a>

            <a href="" target="_blank" class="ml-3 text-text text-xl dark:text-darktext hover:text-primary dark:hover:text-dark-primary">
            <FaMedium/>
            </a>

            </span>
        </div>
    </footer>
  )
}

export default Footer