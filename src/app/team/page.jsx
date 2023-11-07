import React from "react";
import Image from "next/image";
import Navbar from "../../components/globals/Navbar";
import EventList from "../../components/events/Events"
import Temp from "../../components/Temp"

export default function Events() {
  const EventData = [
    {
      "name": "Tejas Sharma",
      "position": "City Head",
      "image": "",
      "description": "",
      "socialOne": "",
      "socialOneLink": "",
      "socialTwo": "",
      "socialTwoLink": "",
      "socialThree": "",
      "socialThreeLink": " ",
      "socialFour": " ",
      "socialFourLink": " "
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
        {/* <EventList data={EventData} />  */}
        
        </div>
      </div>
    </section>
  );
}
