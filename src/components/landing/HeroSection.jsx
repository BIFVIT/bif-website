import React from 'react'
import Image from 'next/image'
import HeroImage from "@/assets/herosec.jpg"
import Button from '@/utils/ThemeToggle'

const HeroSection = () => {
  return (
    <section class="bg-purple-100 dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            
            <div class="mr-auto place-self-center lg:col-span-7">
            <a href="#" target='_blank' class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-purple-200 rounded-full dark:bg-gray-800 dark:text-white hover:bg-purple-300 dark:hover:bg-gray-700" role="alert">
                <span class="text-xs bg-purple-700 dark:bg-blue-700 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Blog released! Read on Medium</span> 
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
                <h1 class="text-gray-800 max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Where others teach, We educate</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">At Becoming I Foundation, We empower minds and shape futures. Join us in creating a brighter tomorrow through quality education!</p>
                <a href="#" class="bg-purple-700 hover:bg-purple-600 dark:bg-blue-700 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-600 dark:focus:ring-gray-800">
                    Contact Us
                </a> 
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <Image className='rounded-lg' width={800} height={600} src={HeroImage} alt="Hero Section Image"/>
            </div>                
        </div>
    </section>
  )
}

export default HeroSection