import React from "react";
import Image from "next/image";
import Navbar from "../../components/globals/Navbar";
import EventList from "../../components/events/Events"

export default function Events() {
  const EventData = [
    {
      "event": "Old Katpadi School Visit",
      "cover": "/assets/herosec.png",
      "date": "Nov 6, 2023",
      "location": "Google Meet",
      "time": "",
      "description": "In the heart of VIT Vellore, we found ourselves drawn to a club of with a mission that transcended conventional teaching...",
      "url": "https://medium.com/becoming-i-foundation/bif-becoming-i-foundation-bridging-the-educational-gap-and-spreading-hope-online-782bd5c0dd25"
    },
    {
      "author": "St Judes Visit",
      "avatar": "https://miro.medium.com/v2/resize:fill:72:72/0*aUP2KIHHGFhPEWx7",
      "date": "Oct 25, 2023",
      "readTime": "2 min read",
      "title": "Bridging the Educational Gap and Spreading Hope Online",
      "description": "In the heart of VIT Vellore, we found ourselves drawn to a club of with a mission that transcended conventional teaching...",
      "url": "https://medium.com/becoming-i-foundation/bif-becoming-i-foundation-bridging-the-educational-gap-and-spreading-hope-online-782bd5c0dd25"
    },
    {
      "author": "Dhruv Mathur",
      "avatar": "https://miro.medium.com/v2/resize:fill:72:72/0*R4uiZQFmuGWBIU4t",
      "date": "Jan 2, 2023",
      "readTime": "3 min read",
      "title": "New year, New resolutions, New beginning.",
      "description": "It's a myth that you can't have it all. You can have it all just maybe not all at the…",
      "url": "https://medium.com/becoming-i-foundation/new-year-new-resolutions-new-beginning-20fd50f01ad3"
    },
    {
      "author": "Dhruv Mathur",
      "avatar": "https://miro.medium.com/v2/resize:fill:72:72/0*R4uiZQFmuGWBIU4t",
      "date": "Oct 10, 2022",
      "readTime": "5 min read",
      "title": "Say yes to positivity, say yes to well being",
      "description": "Amidst the recent pandemic, everyone understood the value...",
      "url": "https://medium.com/becoming-i-foundation/anything-thats-human-is-mentionable-and-anything-that-is-mentionable-can-be-more-manageable-a5dd9e8f01cd"
    },
    {
      "author": "Dhruv Mathur",
      "avatar": "https://miro.medium.com/v2/resize:fill:72:72/0*R4uiZQFmuGWBIU4t",
      "date": "Sep 29, 2022",
      "readTime": "4 min read",
      "title": "Preceding wastage counts for imminent shortage",
      "description": "In a world of seven billion people, set to grow to nine billion by 2050...",
      "url": "https://medium.com/becoming-i-foundation/preceding-wastage-counts-for-imminent-shortage-cccb7cd00429"
    },
    {
      "author": "Satyanidhi",
      "avatar": "https://miro.medium.com/v2/resize:fill:72:72/1*dmbNkD5D-u45r44go_cf0g.png",
      "date": "Jul 29, 2022",
      "readTime": "4 min read",
      "title": "Nurture Nature for a Nurturing Future",
      "description": "The seven billion humans inhabit the earth and use various amounts of the planet's resources...",
      "url": "https://medium.com/becoming-i-foundation/nurture-nature-for-a-nurturing-future-2ad13f13daa6"
    },
    {
      "author": "Dhruv Mathur",
      "avatar": "https://miro.medium.com/v2/resize:fill:72:72/0*R4uiZQFmuGWBIU4t",
      "date": "Jun 4, 2022",
      "readTime": "4 min read",
      "title": "Take a stand, make a difference!",
      "description": "When we save children, we save ourselves. The solution of adult problems…",
      "url": "https://medium.com/becoming-i-foundation/take-a-stand-make-a-difference-de616898afd7"
    }
  ]
  

  return (
    <section class="bg-background dark:bg-darkbackground">
      <Navbar />
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-background dark:bg-darkbackground">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-primary dark:text-darkprimary">
            Our Blog
          </h2>
          <p class="font-light text-text sm:text-xl dark:text-darktext">
          Explore our blog for stories, insights, and updates that showcase the heart of our mission. 
          </p>
        </div>
        <div class="container">
        <EventList data={EventData} /> 
        </div>
      </div>
    </section>
  );
}
