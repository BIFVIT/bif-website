"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../../../components/globals/Navbar";
import { BsPersonCircle, BsCalendar2DateFill } from "react-icons/bs";
import {
  BiSolidTime,
  BiCurrentLocation,
  BiSolidChevronsLeft,
  BiSolidChevronsRight,
} from "react-icons/bi";
import TextWithReadMore from "../../../../utils/TextWithReadMore";

const eventData = {
  coverImg:
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/smilecover.png",
  eventtitle: "Visit to St Judes Childcare Centre",
  viewtype: "Event Summary",
  keyinfo: [
    {
      time: "11-12 AM",
      location: "Off-Campus",
      date: "17 May 23",
      coordinator: "Anjana",
    },
  ],
  description:
  "At Saint Jude's Cancer Center, we devoted a heartwarming day to spending time with the resilient children bravely confronting the challenges of cancer. Our visit encompassed engaging art activities, interactive sessions, and sincere heart-to-heart conversations. Seated beside these courageous young individuals, we extended our support, aiming to bring moments of joy and comfort to accompany them on their journey through adversity.",
  childImgs: [
    "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/stjudesvisit.jpg",
    // "https://raw.githubusercontent.com/BIFVIT/bif-website/main/src/assets/katpadi-visit-1/2.jpg",
  ],
};

export default function Event() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [hasMultipleImages, setMultipleImages] = useState(true);

  const handleChevronClick = (direction) => {
    if (direction === "right") {
      setCurrentImgIndex(
        (prevIndex) => (prevIndex + 1) % eventData.childImgs.length
      );
    } else if (direction === "left") {
      setCurrentImgIndex(
        (prevIndex) =>
          (prevIndex - 1 + eventData.childImgs.length) %
          eventData.childImgs.length
      );
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

  useEffect(()=>{
    if (
      eventData.childImgs &&
      Array.isArray(eventData.childImgs) &&
      eventData.childImgs.length <= 1
    ) {
      setMultipleImages(false);
    }
  
  },[])  

  return (
    <div>
      <Navbar />

      <section className="py-10 bg-background dark:bg-darkbackground">
        <div className="max-w-6xl px-4 mx-auto">
          <div class="flex flex-wrap mb-24 -mx-4">
            <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div class="sticky top-0 overflow-hidden ">
                <div
                  className="relative mb-6 lg:mb-10 lg:h-96"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {hasMultipleImages&&<a
                    className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                    onClick={() => handleChevronClick("left")}
                  >
                    <div className="bg-accent p-1 rounded-3xl">
                      <BiSolidChevronsLeft className="text-2xl text-background dark:text-darkbackground" />
                    </div>
                  </a>}
                  <Image
                    width={720}
                    height={720}
                    className="object-contain w-full lg:h-full"
                    src={eventData.childImgs[currentImgIndex]}
                    alt=""
                    id="coverimg"
                    onDragStart={handleDragStart}
                  />
                  {hasMultipleImages&&
                  <a
                    className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                    onClick={() => handleChevronClick("right")}
                  >
                    <div className="bg-accent p-1 rounded-3xl">
                      <BiSolidChevronsRight className="text-2xl text-background dark:text-darkbackground" />
                    </div>
                  </a>
                  }
                </div>
                {hasMultipleImages&&
                <div className={`flex-wrap hidden -mx-2 md:flex`}>
                  
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
              }
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
                                  <BsCalendar2DateFill className="text-2xl p-1 text-background dark:text-darkbackground" />
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
                                  <BiSolidTime className="text-3xl p-1 text-background dark:text-darkbackground" />
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
                                  <BiCurrentLocation className="text-3xl p-1 text-background dark:text-darkbackground" />
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
                                  <BsPersonCircle className="text-3xl p-1 text-background dark:text-darkbackground" />
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
                  <TextWithReadMore
                    text={eventData.description}
                    wordCount={30}
                  />
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
