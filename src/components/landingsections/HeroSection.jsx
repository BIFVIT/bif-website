import React from 'react'
import HeroVideo from "./../landing/Video"
const HeroSection = () => {
    
  return (
    <section class="bg-background dark:bg-darkbackground">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            
            <div class="mr-auto place-self-center lg:col-span-7">
            {/* When linking to external be sure to add target="_blank" */}
            <a href="#contact" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700  rounded-full bg-secondary dark:bg-darksecondary dark:text-darktext hover:bg-highlight dark:hover:bg-darkhighlight" role="alert">
                <span class="text-xs bg-primary dark:bg-darkprimary   rounded-full text-darktext px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Want to Join Us? Click here</span> 
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
                <h1 class="py-3 text-gray-800 max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-darktext">Where others <span className='text-primary dark:text-darkprimary'>Teach...</span> We <span className='text-primary dark:text-darkprimary'>Educate</span></h1>
                <p class="pb-3 max-w-2xl mb-6 font-light text-text lg:mb-8 md:text-lg lg:text-xl dark:text-darktext">At Becoming I Foundation, We empower minds and shape futures. Join us in creating a brighter tomorrow through quality education!</p>
                <a href="#contact" class="mr-4 mb-4 bg-secondary dark:bg-darksecondary hover:-translate-y-1 dark:hover:bg-darkhighlight inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg dark:text-darktext ">
                    Join Us
                </a> 
                
                <a href="#contact" className="bg-primary hover:-translate-y-1 shadow-3xl hover:shadow-darkprimary dark:bg-darkprimary inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-darktext rounded-lg dark:text-darkbackground">
                    Contact Us
                </a> 

            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex hover:cursor-[url(https://github.com/NotSooShariff/bif-frontend/blob/main/public/cursor.png)]">
                <HeroVideo className="hover:cursor-[url(https://github.com/NotSooShariff/bif-frontend/blob/main/public/cursor.png)]"/>
            </div>                
        </div>
        
    </section>
  )
}

export default HeroSection