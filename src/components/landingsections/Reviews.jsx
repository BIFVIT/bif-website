import React from 'react';
import Image from 'next/image';

const Reviews = () => {
  return (
    <section id="testimonies" class="py-20 bg-purple-100 dark:bg-gray-900">
        <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


            <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                    <h1 class="mb-8 text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
                    Inspiring Stories of Educational Empowerment
                    </h1>
                    <p class="mb-8 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
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
                            </div><a href="https://twitter.com/kanyewest" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Kanye West</h3>
                                            <p class="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Find God.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                            <p class="text-gray-500 text-md">CEO of Apple</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
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
                            </div><a href="https://twitter.com/kanyewest" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Kanye West</h3>
                                            <p class="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Find God.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                            <p class="text-gray-500 text-md">CEO of Apple</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
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
                            </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                            <p class="text-gray-500 text-md">CEO of Twitter</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
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
                            </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                            <p class="text-gray-500 text-md">CEO of Apple</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
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
                            </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                            <p class="text-gray-500 text-md">CEO of Twitter</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
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
                            </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                            <p class="text-gray-500 text-md">CEO of Apple</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
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
                            </div><a href="https://twitter.com/satyanadella" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Satya Nadella</h3>
                                            <p class="text-gray-500 text-md">CEO of Microsoft</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
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
                            </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Dan Schulman</h3>
                                            <p class="text-gray-500 text-md">CEO of PayPal</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                        et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="text-sm leading-6">
                        <div class="relative group">
                            <div
                                class="absolute rounded-lg opacity-25 -inset-1    transition blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                            </div><a href="https://twitter.com/satyanadella" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Satya Nadella</h3>
                                            <p class="text-gray-500 text-md">CEO of Microsoft</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
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
                            </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                                <div
                                    class="relative p-6 space-y-6 leading-none hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div class="flex items-center space-x-4"><Image width={48} height={48}
                                            src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman"/>
                                        <div>
                                            <h3 class="text-lg font-semibold text-white">Dan Schulman</h3>
                                            <p class="text-gray-500 text-md">CEO of PayPal</p>
                                        </div>
                                    </div>
                                    <p class="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
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