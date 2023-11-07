"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdLocationOn } from "react-icons/md"

const EventCard = ({ eventname, date, location, time, cover, description, url }) => {
    const router = useRouter();

    const redirectToUrl = (url) => {
        if(url){
            window.open(url, '_blank');
        }
    };

  return (
    <div onClick={()=>redirectToUrl(`${url}`)} class="rounded-lg bg-secondary  dark:bg-darksecondary hover:scale-105 transition duration-500 cursor-pointer  max-w-sm w-full lg:max-w-full lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-lg  text-center overflow-hidden" style={{ backgroundImage: `url('${cover}')` }} alt="Event Cover">
        </div>
        <div class="border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-highlight text-primary dark:bg-darkhighlight dark:text-darkprimary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <MdLocationOn className="mr-1 w-3 h-3"/>
                {location}
                </span>
                <span className="text-text dark:text-darktext text-sm">{date}</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-text opacity-80 dark:text-darktext">
                <a href={url} target='_blank'>{eventname}</a>
            </h2>
            <p className="mb-2 font-light text-text dark:text-darktext">
                {description}
            </p>
            </div>
            <div className="flex-end my-auto flex justify-between items-center">
                <span><p> </p></span>
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
        </div>
    </div>

  );
};

const EventList = ({ data }) => {
  return (
    <div className="mx-auto grid gap-8 lg:grid-cols-2">
      {data.map((article, index) => (
        <EventCard key={index} {...article} />
      ))}
    </div>
  );
};

export default EventList;
