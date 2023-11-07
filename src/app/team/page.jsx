import React from "react";
import Image from "next/image";
import Navbar from "../../components/globals/Navbar";
import EventList from "../../components/events/Events"  
import TeamList from "../../components/team/Board23";

export default function Events() {
  const Team23Data = [
    {
      "name": "Tejas Sharma",
      "position": "City Head",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/tejas.png",
      "description": "",
      "website": "",
      "linkedin": "https://www.linkedin.com/in/tejas-sharma-1253671b8/",
      "instagram": "https://www.instagram.com/tejasxxix/",
      "twitter": "",
      "github": "https://github.com/tejass5",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    {
      "name": "Anooshree V",
      "position": "Vice-Chairperson",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/anoo.png",
      "description": "",
       "website": "",
      "linkedin": "https://www.linkedin.com/in/anoo-shree?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      "instagram": "",
      "twitter": "",
      "github": "https://github.com/anoooshreee",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    {
      "name": "Yashita Mittal",
      "position": "Secretary",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/yashi.png",
      "description": "",
       "website": "",
      "linkedin": "https://www.linkedin.com/in/yashita-mittal/",
      "instagram": "https://www.instagram.com/yashitamusic",
      "twitter": "",
      "github": "https://github.com/YashitaMusic",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    {
      "name": "Hrishikesh Kulkarni",
      "position": "Vice-Secretary",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/hrishi.png",
      "description": "",
      "website": "",
      "linkedin": "https://www.linkedin.com/in/hrishikesh-kulkarni-bb081224b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "instagram": "https://www.instagram.com/_hrishi_mk?igshid=YWZhb211Z2thNWN2",
      "twitter": "",
      "github": "",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    {
      "name": "Owais Shariff",
      "position": "Head of PR Department",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/owais.png",
      "description": "",
      "website": "https://osh.fyi",
      "linkedin": "https://linkedin.com/in/owais-shariff",
      "instagram": "https://www.instagram.com/ridiculosh/",
      "twitter": "",
      "github": "https://github.com/NotSooShariff/",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    {
      "name": "Anjana Rose",
      "position": "Head of School Department",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/anjana.png",
      "description": "",
      "website": "",
      "linkedin": "https://www.linkedin.com/in/anjana-rose-ba2515256/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "instagram": "https://www.instagram.com/anjana.sings?igshid=MWQ3MWpiZGF4aWxoZg%3D%3D",
      "twitter": "",
      "github": "",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    {
      "name": "Pranav Raj",
      "position": "Head of R&D Department",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/pranav.png",
      "description": "",
      "website": "",
      "linkedin": "https://www.linkedin.com/in/pranav-raj-a96914237/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "instagram": "https://www.instagram.com/pranavv.r?igshid=MW5vYzF3cTczb2hweQ%3D%3D&utm_source=qr",
      "twitter": "",
      "github": "",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    {
      "name": "Sukanya Jain",
      "position": "Creativity Head",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/sukanya.png",
      "description": "",
       "website": "",
      "linkedin": "",
      "instagram": "https://www.instagram.com/bonda_sukanya",
      "twitter": "",
      "github": "",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    {
      "name": "Heet Mehta",
      "position": "Head of Finance Department",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/heet.png",
      "description": "",
      "website": "",
      "linkedin": "https://www.linkedin.com/in/heet-mehta-41b862225/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "instagram": "https://www.instagram.com/heet_mehta5?igshid=cm94ZDRkdzVkaWl4&utm_source=qr",
      "twitter": "",
      "github": "https://github.com/Heet852003",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    {
      "name": "Toyesh Gupta",
      "position": "City Head",
      "image": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/toyesh.png",
      "description": "",
       "website": "",
      "linkedin": "https://www.linkedin.com/in/toyesh-gupta-a0443b21a/",
      "instagram": "https://www.instagram.com/toyesh_gupta/",
      "twitter": "",
      "github": "https://github.com/toyeshg",
      "facebook": "",
      "snapchat": "",
      "youtube": "",
      "tryhackme": "",
    },
    
  ]
  

  return (
    <section class="h-full bg-background dark:bg-darkbackground">
      <Navbar />
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-background dark:bg-darkbackground">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-primary dark:text-darkprimary">
            Our Board Members
          </h2>
          <p class="font-light text-text sm:text-xl dark:text-darktext">
          Meet the team that makes it all possible
          </p>
        </div>
        <div class="flex">
        <TeamList data={Team23Data} /> 
        
        </div>
      </div>
    </section>
  );
}
