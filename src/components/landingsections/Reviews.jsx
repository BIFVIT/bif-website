import React from 'react';
import Image from 'next/image';

const Reviews = () => {      
      const testimonials = [
        {
            // 1
            "name": "Owais Shariff",
            "title": "Cybersecurity Analyst",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/owais.png",
            "review": "Personally, it's been one of the most fulfilling experiences of my life..."
        },
        {
            // 2
            "name": "Catherine Tomy",
            "title": "Volunteer",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/catherine.png",
            "review": `It has been wonderful being part of the BIF Family. Be it taking
            sessions for the kids or being part of the events that are
            conducted...`
        },
        {
            // 5
            "name": "Aleena Rebecca",
            "title": "Volunteer",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/aleena.png",
            "review": "I’ve had a wonderful time here by learning and developing my skills..."
        },
        {
            // 4
            "name": "Yashita Mittal",
            "title": "Security Researcher @Planetcast",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/yashi.png",
            "review": `One of the most rewarding aspects of being a member of
            Becoming I Foundation is witnessing the positive impact
            our work has on the children we serve.`
        },
        {
            // 6
            "name": "Abhirami",
            "title": "Volunteer",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/abhirami.png",
            "review": `
            I absolutely loved teaching and I
            also learned a lot during my time here. I was also able to
            make a lot of amazing friends here and am very grateful
            for all the experiences I’ve had here.`
        },
        {
            // 3
            "name": "Tejas Sharma",
            "title": "Intern @ Rockwell Automation",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/tejas.png",
            "review": `
            I always desired to be a part of community service
            and for sure BIF has stood up to my expectations and
            beliefs. My journey has been really a remarkable one...`
        },
        {
            // 7
            "name": "Neha Tigy",
            "title": "Volunteer",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/neha.png",
            "review": ` Everyone here is so passionate about what they do and they contribute their best to make all
            the events successful and contribute positively to society. The people here are so helpful as well!`
        },
        {
            // 8
            "name": "Abhinav Kalluri",
            "title": "Volunteer",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/abhinav.png",
            "review":  `
            I have enjoyed and learned a lot in the last year with
            the BIF. I completely enjoyed the interactions and learned a
            lot from my fellow club members. `
        },
        {
            // 9
            "name": "Jahnavi",
            "title": "Volunteer",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/jahnavi.png",
            "review": `Working with BIF has truly made me a better
            person and I realize the privilege that I have. I cannot stress
            enough on how much of a positive impact BIF has
            had on me...`
        },
        {
            // 10
            "name": "Heet Mehta",
            "title": "Finance Head @BIF",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/heet.png",
            "review": `BIF has not only provided me with an avenue to give
            back to society, but it has also taught me valuable life
            skills`
        },
        {
            // 11
            "name": "Toyesh Gupta",
            "title": "Data Analyst @Coca-Cola Co.",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/toyesh.png",
            "review": `BIF inspired me to work
            toward society. It taught me that we have a job of
            making a difference in society as well other
            than all else...`
        },
        {
            // 12
            "name": "Pranav Raj",
            "title": "AI/ML Developer @Hinduja Tech",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/pranav.png",
            "review": `This kind of work not only enlightens
            and empowers the children, but also motivates us to
            do more and appreciate the opportunities we have... `
        },
        {
            // 13
            "name": "Sukanya Jain",
            "title": "",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/sukanya.png",
            "review": ""
        },
        {
            // 14
            "name": "Anjana Rose",
            "title": "",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/anjana.png",
            "review": ""
        },
        {
            // 15
            "name": "Hrishikesh Kulkarni",
            "title": "",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/hrishi.png",
            "review": ""
        },
      ]
      
  return (
    <section id="testimonies" class="py-20 bg-background dark:bg-darkbackground">
        <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


            <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                    <h1 class="mb-8 text-3xl font-bold text-primary dark:text-darkprimary sm:text-4xl">
                    Inspiring Stories of Educational Empowerment
                    </h1>
                    <p class="text-text dark:text-darktext mb-8 font-light dark:opacity-90 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Discover the impact of our educational initiatives through the heartfelt messages of dedicated volunteers, whose passion and commitment drive positive change.
                    </p>
                </div>
            </div>


            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <ul class="space-y-8">


                    {/* Person 1 -0 */}
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={ testimonials[0].profilepic }
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[0].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[0].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md ">{ testimonials[0].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[0].review }</p>
                                </div>
                        </div>
                    </li>


                    {/* Person 2 -1 */}
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1  transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[1].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[1].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[1].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[1].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[1].review }</p>
                                </div>
                            
                        </div>
                    </li>

                    {/* Person 3 -2 */}
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1 transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[2].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[2].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[2].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[2].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[2].review }</p>
                                </div>
                            
                        </div>
                    </li>

                    {/* Person 4 - 3 */}
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1 transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[3].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[3].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[3].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[3].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{testimonials[3].review}</p>
                                </div>
                        </div>
                    </li>
                </ul>

                {/* Person 5 - 4 */}
                <ul class="hidden space-y-8 sm:block">
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[4].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[4].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[4].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[4].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[4].review }</p>
                                </div>
                        </div>
                    </li>

                    {/* Person 6 - 5 */}
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[5].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[5].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[5].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[5].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[5].review }.</p>
                                </div>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[6].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[6].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[6].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[6].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[6].review }</p>
                                </div>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[7].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[7].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[7].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[7].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[7].review }</p>
                                </div>
                        </div>
                    </li>
                </ul>


                <ul class="hidden space-y-8 lg:block">
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[10].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[10].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[10].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[10].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[10].review }</p>
                                </div>
                            
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[11].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[11].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[11].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[11].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[11].review }</p>
                                </div>
                            
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[8].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[8].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[8].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[8].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[8].review }</p>
                                </div>
                            
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div>
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src={testimonials[9].profilepic}
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt={ testimonials[9].name }/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ testimonials[9].name }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ testimonials[9].title }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[9].review }</p>
                                </div>
                            
                        </div>
                    </li>
                </ul>


            </div>
        </div>
    </section>
  )
}

export default Reviews