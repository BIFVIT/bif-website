"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Social Media Icons
import { BsGlobe2 , BsYoutube, BsSnapchat, BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillMediumCircle } from "react-icons/ai"
import { FaSquareXTwitter } from "react-icons/fa6"
import { SiTryhackme } from "react-icons/si"


const TeamCard = ({ name, image, position, description, website, linkedin, instagram, twitter, github, facebook, snapchat, youtube, tryhackme, medium}) => {
    const router = useRouter();

    const redirectToUrl = (url) => {
        if(url){
            window.open(url, '_blank');
        }
    };

  return (
    
    <div class="items-center rounded-lg bg-secondary  dark:bg-darksecondary hover:scale-105 transition duration-500 max-w-sm w-full lg:max-w-full lg:flex">
              <a href="#">
                  <Image width={360} height={360} class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={image} alt="Jese  Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-text dark:text-darktext">
                      <a href="#">{name}</a>
                  </h3>
                  <span class="text-accent dark:text-darkaccent">{position}</span>
                  <p class="mt-3 mb-4 font-light text-text  dark:text-darktext text-opacity-80">{description}</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      {website && <li onClick={()=>redirectToUrl(website)}><BsGlobe2 className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                      {linkedin && <li onClick={()=>redirectToUrl(linkedin)}><BsLinkedin className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                      {instagram && <li onClick={()=>redirectToUrl(instagram)}><AiFillInstagram className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                      {twitter && <li onClick={()=>redirectToUrl(twitter)}><FaSquareXTwitter className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                      {github && <li onClick={()=>redirectToUrl(github)}><BsGithub className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                      {facebook && <li onClick={()=>redirectToUrl(facebook)}><BsFacebook className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                      {snapchat && <li onClick={()=>redirectToUrl(snapchat)}><BsSnapchat className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                      {youtube && <li onClick={()=>redirectToUrl(youtube)}><BsYoutube className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                      {medium && <li onClick={()=>redirectToUrl(medium)}><AiFillMediumCircle className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                      {tryhackme && <li onClick={()=>redirectToUrl(tryhackme)}><SiTryhackme className='text-text text-lg dark:text-darktext hover:text-accent dark:hover:text-darkaccent'/></li>}
                        
                  </ul>
              </div>
          </div> 

  );
};

const TeamList = ({ data }) => {
  return (
    <div className="mx-auto grid gap-8 lg:grid-cols-2">
      {data.map((article, index) => (
        <TeamCard key={index} {...article} />
      ))}
    </div>
  );
};

export default TeamList;
