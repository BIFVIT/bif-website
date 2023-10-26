import React from 'react';
import Image from 'next/image';

const Reviews = () => {
  const reviews = [
    {
      title: "A Lifesaver for Our School",
      review: "BIF - VIT has been a lifesaver for our school. They've provided us with dedicated and passionate teachers for our understaffed and under-equipped school, making a significant impact on our students' education. We couldn't be more grateful for their support.",
      name: "Rajesh Kumar",
      role: "Principal", 
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Transforming Lives Through Education",
      review: "The dedication of BIF - VIT in providing teachers for underprivileged schools is truly commendable. Their efforts have transformed the lives of countless children, giving them access to quality education and brighter futures. We're proud to be associated with such a noble cause.",
      name: "Neha Sharma",
      role: "School Administrator",
      image: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600" 
    },
    {
      title: "Education Equality Achieved",
      review: "BIF - VIT is making education equality a reality. They've connected us with skilled teachers, making a significant difference in our school. With their help, we've overcome staffing challenges and improved the quality of education we provide to our students.",
      name: "Amit Singh",
      role: "Head of Education",
      image: "https://images.pexels.com/photos/793253/pexels-photo-793253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "A Beacon of Hope for Schools",
      review: "BIF - VIT is a beacon of hope for schools like ours. Their commitment to providing teachers for underserved schools is truly inspiring. They've made it possible for us to offer quality education to our students, despite the challenges we've faced. We're grateful for their unwavering support.",
      name: "Sarita Patel",
      role: "School Director",
      image: "https://images.pexels.com/photos/4407625/pexels-photo-4407625.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <figure key={index} className={`flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 ${index % 2 === 0 ? 'lg:border-r' : ''} dark:bg-gray-800 dark:border-gray-700`}>
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{review.title}</h3>
                <p className="my-4">{`"${review.review}"`}</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Image width={36} height={36} className="w-9 h-9 rounded-full" src={review.image} alt={`${review.name}'s profile picture`} />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{review.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">{review.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        {/* <div className="text-center">
          <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a>
        </div> */}
      </div>
    </section>
  );
};

export default Reviews;
