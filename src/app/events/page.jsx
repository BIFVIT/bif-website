import React from "react";
import Image from "next/image";
import Navbar from "../../components/globals/Navbar";
import EventList from "../../components/events/Events"

export default function Events() {
  const EventData = [
    {
      "eventname": "Old Katpadi School Visit",
      "date": "Nov 1, 2023",
      "location": "Offline Session",
      "time": "11:30 AM",
      "cover": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/herosec.jpg",
      "description": "We organized offline sessions focused on providing knowledge-based interactive sessions for underprivileged children from Old Katpad...",
      "url": "/events/past/old-katpadi-school-visit"
    },
    {
        "eventname": "St Judes Childcare Centre Visit",
        "date": "May 17, 2023",
        "location": "Offline Session",
        "time": "",
        "cover": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/stjudesvisit.jpg",
        "description": "We shared an endearing day with the resilient kids facing the challenges of cancer. Our visit was filled with fun art activities, ed...",
        "url": "/events/past/st-judes-visit"
    },
    {
        "eventname": "Hack4Impact (ft. IEEECS)",
        "date": "Jun 6, 2023 - Jun 7, 2023",
        "location": "CS Hall",
        "time": "9:00 AM",
        "cover": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/h4icover.jpg",
        "description": "One of the major tech events of Yantra in collaboration with IEEE-CS. The hackathon saw 30+ teams competing for UNICEF's SDG Goal 4... ",
        "url": "/events/past/hack4impact"
    },
    {
        "eventname": "Human Snakes & Ladders",
        "date": "Feb 26, 2023",
        "location": "Foodys",
        "time": "10:00 AM",
        "cover": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/herosec.jpg",
        "description": "One of the most sought-after events in Riviera 22. With over 750+ registrations, it was a fun game that was played on a life-sized sn...",
        "url": "/events/past/human-snakes-and-ladders"
    },
    {
        "eventname": "Smile",
        "date": "Feb 24, 2023",
        "location": "SJT Gallery",
        "time": "10:00 AM",
        "cover": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/hslcover.jpg",
        "description": "A Day of Fun & Entertainment for Underprivileged Kids in VIT. From music & games to comedy and dance, we shared laughter and joy, cre... ",
        "url": "/events/past/smile"
    },

    
  ]
  

  return (
    <section class="h-full bg-background dark:bg-darkbackground">
      <Navbar />
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-background dark:bg-darkbackground">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-primary dark:text-darkprimary">
            Our Events
          </h2>
          <p class="font-light text-text sm:text-xl dark:text-darktext">
          Explore the many initiatives & events we&apos;ve organized to do good in our community and beyond. We&apos;d love for you to check out our exciting work and get involved in something meaningful.
          </p>
        </div>
        <div class="container">
        <EventList data={EventData} /> 
        </div>
      </div>
    </section>
  );
}
