import React from 'react'

const StatisticsSection = () => {
  return (
    <section className="px-36 bg-gray-900 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">We have inspired & helped over <span className="font-extrabold">10,000+</span> students since we started</h2>
                    <p className="mb-4 font-light">At BIF - VIT, our impact speaks volumes. We&apos;ve reached over 10,000 children through our educational initiatives, kindling a passion for learning and opening doors to brighter futures. With a dedicated team of 200+ volunteers, spanning various disciplines and backgrounds, we collaborate tirelessly to bring our vision of free education to life. Our influence extends to 50 communities, where we partner with local organizations to make education accessible to children in underserved areas.</p>
                    <p className="mb-4 font-medium">Through 20+ events and campaigns, we&apos;ve not only raised awareness but also garnered the support of thousands of young minds, inviting them to join us on our journey to transform education. We&apos;ve established partnerships with 15 educational institutions and organizations, creating a network that bolsters our ability to drive change. </p>
                    
                </div>
            </div>
            </section>
            <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-700 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-700 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">200+</h2>
                <p className="leading-relaxed text-gray-400">Members</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-700 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-700 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">10.3K+</h2>
                <p className="leading-relaxed text-gray-400">Students</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-700 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-700 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">350+</h2>
                <p className="leading-relaxed text-gray-400">Sessions</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-700 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-700 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">15+</h2>
                <p className="leading-relaxed text-gray-400">Institutions</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default StatisticsSection