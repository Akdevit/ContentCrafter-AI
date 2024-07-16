import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review: "I love how easy it is to create high-quality content with this tool. It saves me so much time!",
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4.5,
    review: "The content generated is excellent! Sometimes needs minor tweaks, but overall very impressed.",
  },
  {
    id: 3,
    name: "Michael Brown",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4.8,
    review: "Great tool for generating SEO-friendly content. Highly recommended!",
  },
];

const Testimonials = () => {
  const totalRatings = testimonials.length;
  const averageRating = testimonials.reduce((sum, { rating }) => sum + rating, 0) / totalRatings;

  return (
    <div className="max-w-5xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="w-full h-auto flex flex-wrap gap-8 justify-center items-center ">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white w-[300px] shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4 ">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                src={testimonial.photo}
                alt={testimonial.name}
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <div className="flex items-center mt-1 text-yellow-400">
                  {Array.from({ length: Math.floor(testimonial.rating) }, (_, index) => (
                    <FaStar key={index} />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <FaStar half />
                  )}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.review}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-gray-600">
        Rated {averageRating.toFixed(1)}/5 by over {totalRatings} users
      </div>
    </div>
  );
};

export default Testimonials;
