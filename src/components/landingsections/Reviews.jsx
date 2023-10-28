import React from 'react';
import Image from 'next/image';

const Reviews = () => {
    function getRandomIndianName() {
        const firstNames = ['Aarav', 'Neha', 'Arya', 'Aditi', 'Kabir', 'Riya', 'Aryan', 'Isha', 'Vihaan', 'Anaya'];
        const lastNames = ['Sharma', 'Patel', 'Gupta', 'Kumar', 'Singh', 'Mehta', 'Pandey', 'Chopra', 'Jha', 'Verma'];
      
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      
        return `${randomFirstName} ${randomLastName}`;
      }
      
      function getRandomJob() {
        const prefixes = ['School Principal', 'Headmaster', 'Dean', 'Vice Principal', 'Principal', 'Head of School', 'Educational Director'];
        const indianSchoolAbbreviations = ['DPS', 'KV', 'DAV', 'JNV', 'KVS', 'KV', 'GSEB', 'SSC'];
      
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomAbbreviation = indianSchoolAbbreviations[Math.floor(Math.random() * indianSchoolAbbreviations.length)];
      
        return `${randomPrefix} @ ${randomAbbreviation}`;
      }
      
      
      
  return (
    <section id="testimonies" class="py-20 bg-background dark:bg-darkbackground">
        <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


            <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                    <h1 class="mb-8 text-3xl font-bold text-primary dark:text-darkprimary sm:text-4xl">
                    Inspiring Stories of Educational Empowerment
                    </h1>
                    <p class="text-text dark:text-darktext mb-8 font-light dark:opacity-90 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Discover the impact of our educational initiatives through the voices of those whose lives have been transformed by knowledge and opportunity.
                    </p>
                </div>
            </div>


            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <ul class="space-y-8">

                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://images.pexels.com/photos/4307849/pexels-photo-4307849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md ">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
                                            src="https://images.pexels.com/photos/4993172/pexels-photo-4993172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Diam quis enim lobortis scelerisque
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
                            </div><a href="" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://images.pexels.com/photos/9271168/pexels-photo-9271168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, placeat.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1 transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://images.pexels.com/photos/7752850/pexels-photo-7752850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
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


                <ul class="hidden space-y-8 sm:block">
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://images.pexels.com/photos/12367651/pexels-photo-12367651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
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
                                            src="https://images.pexels.com/photos/11527695/pexels-photo-11527695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Diam quis enim lobortis scelerisque
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
                                            src="https://images.pexels.com/photos/16466770/pexels-photo-16466770/free-photo-of-boys-in-t-shirts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
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
                                            src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
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


                <ul class="hidden space-y-8 lg:block">
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="" target="_blank" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-secondary dark:bg-darksecondary">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://images.pexels.com/photos/2609925/pexels-photo-2609925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Tortor dignissim convallis aenean et
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
                                            src="https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
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
                                            src="https://images.pexels.com/photos/5192835/pexels-photo-5192835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Tortor dignissim convallis aenean et
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
                                            src="https://images.pexels.com/photos/15878150/pexels-photo-15878150/free-photo-of-portrait-of-man-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="{ getRandomIndianName() }"/>
                                        <div>
                                            <h3 class="text-text dark:text-darktext text-lg font-semibold text-white">{ getRandomIndianName() }</h3>
                                            <p class="text-text dark:text-darktext dark:opacity-75 text-md">{ getRandomJob() }</p>
                                        </div>
                                    </div>
                                    <p class="text-text dark:text-darktext leading-normal dark:opacity-90 text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
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