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
            "title": "",
            "profilepic": "",
            "review": ""
        },
        {
            // 3
            "name": "Sarvesh",
            "title": "",
            "profilepic": "",
            "review": ""
        },
        {
            // 4
            "name": "Yashita Mittal",
            "title": "Security Researcher @Planetcast",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/yashi.png",
            "review": ""
        },
        {
            // 5
            "name": "Aleena Rebecca",
            "title": "",
            "profilepic": "",
            "review": ""
        },
        {
            // 6
            "name": "Abhirami",
            "title": "",
            "profilepic": "",
            "review": ""
        },
        {
            // 7
            "name": "Neha Tiggy",
            "title": "",
            "profilepic": "",
            "review": ""
        },
        {
            // 8
            "name": "Abhinav Kalluri",
            "title": "",
            "profilepic": "",
            "review": ""
        },
        {
            // 9
            "name": "Jahnavi",
            "title": "",
            "profilepic": "",
            "review": ""
        },
        {
            // 10
            "name": "Heet Mehta",
            "title": "",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/heet.png",
            "review": ""
        },
        {
            // 11
            "name": "Toyesh Gupta",
            "title": "",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/toyesh.png",
            "review": ""
        },
        {
            // 12
            "name": "Pranav Raj",
            "title": "",
            "profilepic": "https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/pranav.png",
            "review": ""
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
                            </div><a href="" class="cursor-pointer">
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
                            </a>
                        </div>
                    </li>


                    {/* Person 2 -1 */}
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1  transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[1].review } Diam quis enim lobortis scelerisque
                                        fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                        aliquam malesuada bibendum.</p>
                                </div>
                            </a>
                        </div>
                    </li>

                    {/* Person 3 -2 */}
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1 transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[2].review }Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.</p>
                                </div>
                            </a>
                        </div>
                    </li>

                    {/* Person 4 - 3 */}
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1 transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                        fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                        aliquam malesuada bibendum.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>

                {/* Person 5 - 4 */}
                <ul class="hidden space-y-8 sm:block">
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[4].review }Enim neque volutpat ac tincidunt vitae
                                        semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                        pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                                </div>
                            </a>
                        </div>
                    </li>

                    {/* Person 6 - 5 */}
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[5].review }Diam quis enim lobortis scelerisque
                                        fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                        aliquam malesuada bibendum.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[6].review }Enim neque volutpat ac tincidunt vitae
                                        semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                        pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[7].review }Diam quis enim lobortis scelerisque
                                        fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                        aliquam malesuada bibendum.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>


                <ul class="hidden space-y-8 lg:block">
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[10].review }Tortor dignissim convallis aenean et
                                        tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                                        eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[11].review }Quam pellentesque nec nam aliquam sem
                                        et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[8].review }Tortor dignissim convallis aenean et
                                        tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                                        eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
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
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">{ testimonials[9].review }Quam pellentesque nec nam aliquam sem
                                        et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>


            </div>
        </div>
    </section>
  )
}

export default Reviews