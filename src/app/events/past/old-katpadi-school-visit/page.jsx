"use client"
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../../../components/globals/Navbar";
import { BsPersonCircle, BsCalendar2DateFill } from "react-icons/bs"
import { BiSolidTime, BiCurrentLocation, BiSolidChevronsLeft, BiSolidChevronsRight } from "react-icons/bi"
import TextWithReadMore from "../../../../utils/TextWithReadMore"

const eventData = {
  coverImg: "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/stjudesvisit.jpg",
  eventtitle: "Offline Session in Old Katpadi School",
  viewtype: "Event Summary",
  keyinfo: [
    {
      time: "6-7 PM",
      location: "Off-Campus",
      date: "12 Dec 2022",
      coordinator: "Anooshree"
    }
  ],
  description: "We meticulously planned and executed offline sessions with a dedicated focus on delivering knowledge-based, interactive experiences tailored for underprivileged children attending Old Katpadi School and Dharapadaveedu South School. The primary goal of the event was to immerse these young learners in enjoyable and educational activities, aiming to ignite a passion for learning while nurturing a strong sense of community support. Our efforts were concentrated on creating a positive and engaging environment, fostering not only academic growth but also a sense of belonging and encouragement among the children involved.",
  childImgs: [
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/katpadi-visit-1/1.jpg",
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/katpadi-visit-1/2.jpg",
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/katpadi-visit-1/3.jpg",
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/katpadi-visit-1/4.jpg",
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/katpadi-visit-1/5.jpg",
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/katpadi-visit-1/6.jpg",
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/katpadi-visit-1/1.jpg",
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/katpadi-visit-1/8.jpg",

  ],
};

export default function Event() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleChevronClick = (direction) => {
    if (direction === "right") {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % eventData.childImgs.length);
    } else if (direction === "left") {
      setCurrentImgIndex((prevIndex) => (prevIndex - 1 + eventData.childImgs.length) % eventData.childImgs.length);
    }
  };

  const handleChildImgClick = (index) => {
    setCurrentImgIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart - e.changedTouches[0].clientX > SWIPE_THRESHOLD) {
      handleChevronClick("right");
    } else if (e.changedTouches[0].clientX - touchStart > SWIPE_THRESHOLD) {
      handleChevronClick("left");
    }
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };


  return (
    <div>
      <Navbar />
      
      <section className="py-10 dark:bg-darkbackground">
        <div className="max-w-6xl px-4 mx-auto">
          <div class="flex flex-wrap mb-24 -mx-4">
            <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div class="sticky top-0 overflow-hidden ">
              
              <div className="relative mb-6 lg:mb-10 lg:h-96"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                >
                    <a
                    className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                    onClick={() => handleChevronClick("left")}
                    >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 text-text bi bi-chevron-left dark:text-darktext"
                      viewBox="0 0 16 16"
                      id="chevronleft"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg> */}
                    <BiSolidChevronsLeft/>
                    </a>
                    <Image
                    width={720}
                    height={720}
                    className="object-contain w-full lg:h-full"
                    src={eventData.childImgs[currentImgIndex]}
                    alt=""
                    id="coverimg"
                    onDragStart={handleDragStart}
                    />
                    <a
                    className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                    onClick={() => handleChevronClick("right")}
                    >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 text-text bi bi-chevron-right dark:text-darktext"
                      viewBox="0 0 16 16"
                      id="chevronright"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    </a>
          </div>
          <div className="flex-wrap hidden -mx-2 md:flex">
            {eventData.childImgs.map((imgSrc, index) => (
              <div key={index} className="w-1/2 p-2 sm:w-1/4">
                <Image
                  width={240}
                  height={240}
                  className="object-contain w-full lg:h-28"
                  src={imgSrc}
                  alt=""
                  onClick={() => handleChildImgClick(index)}
                />
              </div>
            ))}
          </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2">
              <div class="lg:pl-20">
                <div class="mb-6 ">
                  <span class="bg-secondary text-primary dark:bg-darksecondary dark:text-darkprimary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                    {eventData.viewtype}
                  </span>

                  <h2 class="max-w-xl mt-6 mb-6 text-3xl lg:text-4xl tracking-tight font-extrabold text-primary dark:text-darkprimary">
                    {eventData.eventtitle}
                  </h2>
                  
                </div>
                <div class="mb-6">
                  <h2 class="mb-2 text-lg font-bold text-text dark:text-darktext">
                    Key Details:
                  </h2>
                  <div class="bg-secondary dark:bg-darksecondary rounded-xl">
                    <div class="p-3 lg:p-5 ">
                        {/* Add Color for inner box to the div below*/}
                      <div class="p-2 rounded-xl lg:p-6">
                        <div class="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          <div class="w-full mb-4 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-text dark:text-darktext">
                              <div className="bg-accent p-2 rounded-3xl">
                                <BsCalendar2DateFill className="text-2xl p-1 text-darkbackground"/>
                              </div>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-bold text-text dark:text-darktext">
                                  Date
                                </p>
                                <h2 class="text-base dark:text-opacity-50 font-semibold text-text dark:text-darktext">
                                {eventData.keyinfo[0].date}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div class="w-full mb-4 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-text dark:text-darktext">
                              <div className="bg-accent p-1 rounded-3xl">
                                <BiSolidTime className="text-3xl p-1 text-darkbackground"/>
                              </div>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-bold text-text dark:text-darktext">
                                  Time
                                </p>
                                <h2 class="text-base dark:text-opacity-50 font-semibold text-text dark:text-darktext">
                                  {eventData.keyinfo[0].time}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div class="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-text dark:text-darktext">
                              <div className="bg-accent p-1 rounded-3xl">
                                <BiCurrentLocation className="text-3xl p-1 text-darkbackground"/>
                            </div>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-bold text-text dark:text-darktext">
                                  Location
                                </p>
                                <h2 class="text-base dark:text-opacity-50 font-semibold text-text dark:text-darktext">
                                    {eventData.keyinfo[0].location}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div class="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-text dark:text-darktext">

                                <div className="bg-accent p-1 rounded-3xl">
                                <BsPersonCircle className="text-3xl p-1 text-darkbackground"/>
                                </div>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-bold text-text dark:text-darktext">
                                  Coordinator
                                </p>
                                <h2 class="text-base dark:text-opacity-50 font-semibold text-text dark:text-darktext">
                                    {eventData.keyinfo[0].coordinator}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 class="pt-5 mb-2 text-lg font-bold text-text dark:text-darktext">
                    Description:
                  </h2>
                  <TextWithReadMore text={eventData.description} wordCount={25} />


                </div>
                
                  
                
                <div class="flex gap-4 mb-6">
                  <a
                    href="#"
                    class="w-full px-4 py-3 text-center bg-primary hover:-translate-y-1 shadow-3xl hover:shadow-darkprimary dark:bg-darkprimary inline-flex items-center justify-center text-base font-medium text-darktext rounded-lg dark:text-darkbackground"
                  >
                    Add to Calender
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}