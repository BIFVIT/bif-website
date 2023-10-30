import React from 'react'

const ContactSection = () => {
  return (
        <section class="bg-background px-4 lg:px-36 text-gray-400 dark:bg-darkbackground body-font relative ">
            <h2 class="mb-4 text-4xl text-center tracking-tight font-extrabold text-primary dark:text-darkprimary">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-text dark:text-darktext dark:opacity-90 sm:text-xl">Seeking information about our collaboration opportunities? Looking to Volunteer with Us? Talk to us.</p>
            <div class="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
                <div class=" lg:w-2/3 md:w-1/2 bg-gray-500 border-2 border-primary dark:border-darkprimary border-opacity-50 dark:bg-darkbackground rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0410799826486!2d79.15335331146026!3d12.969223187293183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2ssa!4v1698340835184!5m2!1sen!2ssa" style={{filter: "grayscale(1) contrast(1) opacity(0.30)" }}></iframe>
                <div class="bg-secondary dark:bg-darkbackground relative flex flex-wrap py-6 rounded shadow-md">
                    <div class="lg:w-1/2 px-6 ">
                    <h2 class="title-font font-semibold text-gray-800 dark:text-darktext tracking-widest text-xs">ADDRESS</h2>
                    <p class="text-text dark:text-darktext dark:opacity-80 mt-1">VIT, Vellore Campus, Tiruvalam Rd, Katpadi, Vellore, Tamil Nadu 632014, India</p>
                    </div>
                    <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-semibold text-gray-800 dark:text-darktext tracking-widest text-xs">EMAIL</h2>
                    <a class="text-primary dark:text-primary leading-relaxed"><a href="mailto:bif@vit.ac.in">bif@vit.ac.in</a></a>
                    <h2 class="title-font font-semibold text-gray-800 dark:text-darktext tracking-widest text-xs mt-4">PHONE</h2>
                    <p class="text-primary dark:text-primary leading-relaxed"> <a href="tel:+919752150070">+91 97521 50070</a> </p>
                    </div>
                </div>
                </div>



                <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <form action="#" class="space-y-8">
                     <div>
                         <label for="email" class="block mb-2 text-sm font-medium text-text dark:text-darktext">Your email</label>
                         <input type="email" id="email" class="shadow-sm bg-secondary dark:bg-darksecondary  text-text text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-darktext dark:placeholder-opacity-50 dark:text-darktext dark:focus:ring-primary-500 dark:focus:border-darkhighlight dark:shadow-sm-light" placeholder="name@mail.com" required/>
                     </div>
                     <div>
                         <label for="subject" class="block mb-2 text-sm font-medium text-text dark:text-darktext">Subject</label>
                         <input type="text" id="subject" class="block p-3 w-full text-sm text-text bg-secondary dark:bg-darksecondary rounded-lg  shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:placeholder-darktext dark:placeholder-opacity-50 dark:text-darktext dark:focus:ring-darkhighlight dark:focus:border-darkhighlight dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                     </div>
                     <div>
                        <label for="countries" class="block mb-2 text-sm font-medium text-text dark:text-darktext">Topic</label>
                            <select id="countries" class="shadow-sm bg-secondary dark:bg-darksecondary text-text text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3  dark:placeholder-darktext dark:placeholder-opacity-50 dark:text-darktext dark:focus:ring-darkhighlight dark:focus:border-darkhighlight dark:shadow-sm-light">
                            <option selected>Select a topic</option>
                            <option value="Student">I am a student with an enquiry</option>
                            <option value="School">We are a School who want to collaborate</option>
                            <option value="Brand">We are a brand looking to collaborate</option>
                            <option value="Other">Other...</option>
                            </select>
                    </div>
                     <div class="sm:col-span-2">
                         <label for="message" class="block mb-2 text-sm font-medium text-text dark:text-darktext">Your message</label>
                         <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-text bg-secondary dark:bg-darksecondary rounded-lg shadow-sm dark:bg-gray-700  dark:placeholder-darktext dark:placeholder-opacity-50 dark:text-darktext" placeholder="Leave a comment..."></textarea>
                     </div>
                    <div class="flex items-center">
                         <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 "/>
                         <label for="link-checkbox" class="ml-2 text-sm font-medium text-text dark:text-darktext">By submitting this form, you confirm that you have read and agree to our <a href="#" class="text-primary dark:text-darkprimary hover:underline">Terms & Conditions</a>.</label>
                     </div>
                     <a href="#" className="bg-primary hover:-translate-y-1 shadow-3xl hover:shadow-darkprimary dark:bg-darkprimary inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-darktext rounded-lg dark:text-darkbackground dark:border-gray-700">
                    Send Message
                    </a> 
                 </form>
                 </div>
            </div>
        </section>
  )
}

export default ContactSection