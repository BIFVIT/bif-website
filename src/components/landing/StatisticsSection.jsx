import React from 'react'
import { RiTeamLine } from "react-icons/ri"
import { PiStudentBold, PiChalkboardTeacherBold, PiChalkboardTeacher } from "react-icons/pi"
import {LuSchool} from "react-icons/lu"
const StatisticsSection = () => {
  return (
    <section className="bg-purple-100 px-4 lg:px-36 dark:bg-gray-900 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <section className="bg-purple-100 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="text-center mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">We have inspired & helped over <span className="font-extrabold">10,000+</span> students</h2>
                    <p className="text-center mb-4 font-light">At BIF - VIT, our impact speaks volumes. We&apos;ve reached over 10,000 children through our educational initiatives, kindling a passion for learning and opening doors to brighter futures. With a dedicated team of 200+ volunteers, spanning various disciplines and backgrounds, we collaborate tirelessly to bring our vision of free education to life. Our influence extends to 50 communities, where we partner with local organizations to make education accessible to children in underserved areas.</p>
                    <p className="text-center mb-4 font-medium">Through 20+ events and campaigns, we&apos;ve not only raised awareness but also garnered the support of thousands of young minds, inviting them to join us on our journey to transform education. We&apos;ve established partnerships with 15 educational institutions and organizations, creating a network that bolsters our ability to drive change. </p>
                    
                </div>
            </div>
            </section>
            <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-300 dark:border-gray-700 px-4 py-6 rounded-lg">
                <RiTeamLine className='text-purple-700 dark:text-blue-700 w-12 h-12 mb-3 inline-block' />
                <h2 className="title-font font-medium text-3xl text-black dark:text-white">200+</h2>
                <p className="leading-relaxed text-gray-400">Members</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-300 dark:border-gray-700 px-4 py-6 rounded-lg">
                <PiStudentBold className='text-purple-700 dark:text-blue-700 w-12 h-12 mb-3 inline-block'/>
                <h2 className="title-font font-medium text-3xl text-black dark:text-white">10.3K+</h2>
                <p className="leading-relaxed text-gray-400">Students</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-300 dark:border-gray-700 px-4 py-6 rounded-lg">
                
                <PiChalkboardTeacher className='text-purple-700 dark:text-blue-700 w-12 h-12 mb-3 inline-block'/>
                <h2 className="title-font font-medium text-3xl text-black dark:text-white">350+</h2>
                <p className="leading-relaxed text-gray-400">Sessions</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-300 dark:border-gray-700 px-4 py-6 rounded-lg">
                <LuSchool className='text-purple-700 dark:text-blue-700 w-12 h-12 mb-3 inline-block'/>
                <h2 className="title-font font-medium text-3xl text-black dark:text-white">15+</h2>
                <p className="leading-relaxed text-gray-400">Institutions</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default StatisticsSection