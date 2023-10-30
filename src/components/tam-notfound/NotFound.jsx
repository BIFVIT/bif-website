import React from 'react';
import Image from 'next/image';

const NotFound = () => {
  return (
    <section>
      <div className='flex justify-center flex-col h-screen w-screen bg-background dark:bg-darkbackground relative'>
          {/* <div className='absolute top-0 left-0 w-full h-full'>
            {[...Array(100).keys()].map((index) => (
              <div
                key={index}
                className={`absolute w-1 h-1 bg-text dark:bg-darktext rounded-full opacity-0.5 animate-twinkle`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div> */}
        <div className='-translate-y-12'>
        <Image className='mx-auto animate-spin-slow dark:bg-darkbackground bg-background rounded-full' src="/portal.png" alt='Page Not Found' height={100} width={300}/>
          <h1 className='text-center dark:opacity-80 title-font font-bold text-3xl text-primary dark:text-darktext bg-background dark:bg-darkbackground'>
              Oops! We Couldn&apos;t find that page. 
            </h1>
            <p className='mt-2 text-center mb-8 font-light text-text lg:mb-8 md:text-lg lg:text-xl dark:text-darktext dark:opacity-90 mx-auto bg-background dark:bg-darkbackground'>
             It looks like the magic portal to the land of imagination is temporarily closed. <br />
             While we work our magic behind the scenes, let&apos;s find another adventure together! 
            </p>
            <a href="/" className="mx-auto bg-primary mt-3 w-64 hover:-translate-y-1 shadow-3xl hover:shadow-darkprimary dark:bg-darkprimary block items-center justify-center px-5 py-3 text-base font-medium text-center text-darktext rounded-lg dark:text-darkbackground dark:border-gray-700">
              Take me back to Home
            </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
