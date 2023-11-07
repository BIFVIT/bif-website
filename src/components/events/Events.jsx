"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ArticleCard = ({ author, avatar, date, readTime, title, description, url }) => {
    const router = useRouter();

    const redirectToUrl = (url) => {
        if(url){
            window.open(url, '_blank');
        }
    };

  return (
    <article onClick={()=>redirectToUrl(`${url}`)} className="flex flex-col p-6 bg-white rounded-lg bg-secondary  dark:bg-darksecondary dark:border-gray-700 hover:scale-105 transition duration-500 cursor-pointer object-cover">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-highlight text-primary dark:bg-darkhighlight dark:text-darkprimary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
          <svg
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clipRule="evenodd"
            ></path>
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
          </svg>
          {readTime}
        </span>
        <span className="text-text dark:text-darktext text-sm">{date}</span>
      </div>
      <div className='flex-grow'>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-text opacity-80 dark:text-darktext">
        <a href={url} target='_blank'>{title}</a>
      </h2>
      <p className="mb-5 font-light text-text dark:text-darktext">
        {description}
      </p>
      </div>
      <div className="mt-5 flex-end my-auto flex justify-between items-center">
        <div className=" flex items-center space-x-4">
          <Image
            width={28}
            height={28}
            src={avatar}
            alt="Author avatar"
            className="w-7 h-7 rounded-full"
          />
          <span className="font-medium dark:text-darktext">{author}</span>
        </div>
        <a
          href={url} 
          target='_blank'
          className="inline-flex items-center font-medium text-primary dark:text-darkprimary hover:underline"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </article>
  );
};

const EventList = ({ data }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {data.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
};

export default EventList;
