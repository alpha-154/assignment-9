import React from 'react';
import { motion } from 'framer-motion';


const testimonials = [
  {
    id: 1,
    name: "John Parker",
    designation: "Adventure Enthusiast",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "The Mount Everest Base Camp trek was life-changing. The guides were exceptional and the views were breathtaking."
  },
  {
    id: 2,
    name: "Mike Chen",
    designation: "Professional Photographer",
    image: "https://images.pexels.com/photos/29421350/pexels-photo-29421350/free-photo-of-pensive-bearded-man-in-black-and-white-portrait.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "Captured the most amazing shots during the Annapurna Circuit. The team's knowledge of photography spots was impressive."
  },
  {
    id: 3,
    name: "Jonathan Thompson",
    designation: "Fitness Trainer",
    image: "https://images.pexels.com/photos/17388092/pexels-photo-17388092/free-photo-of-smiling-man-with-moustache.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "The Kilimanjaro expedition pushed my limits. The preparation guidance and support were outstanding."
  },
  {
    id: 4,
    name: "David Wilson",
    designation: "Nature Conservationist",
    image: "https://images.pexels.com/photos/10412892/pexels-photo-10412892.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "Trekking through the Andes was incredible. The focus on sustainable hiking practices really resonated with me."
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    designation: "Travel Blogger",
    image: "https://images.pexels.com/photos/17594386/pexels-photo-17594386/free-photo-of-portrait-of-man-with-mustache-and-beard-in-studio.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "The Mont Blanc circuit exceeded all expectations. Perfect blend of challenge and comfort throughout the journey."
  },
  {
    id: 6,
    name: "James Kim",
    designation: "Mountain Guide",
    image: "/api/placeholder/64/64",
    testimonial: "As a fellow guide, I'm impressed by their professionalism. The Alpine routes were expertly planned and executed."
  }
];

const TestimonialSection = () => {
  return (
    <div className="w-full py-16 bg-slate-50 mt-14 md:mt-20 px-6 border rounded-xl overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trail Stories from Fellow Adventurers
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover inspiring experiences from our community of mountain enthusiasts who have embarked on unforgettable journeys across the world&apos;s most magnificent peaks.
          </p>
        </div>

        {/* Testimonial Carousel */}

        <div className="max-md:max-w-[400px]  overflow-hidden mt-5">
          <motion.div
            className="relative flex gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {/* First set of cards */}
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                    <p className="text-sm text-slate-600">{testimonial.designation}</p>
                  </div>
                </div>
                <p className="text-slate-700 line-clamp-2">{testimonial.testimonial}</p>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial) => (
              <div
                key={`${testimonial.id}-duplicate`}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                    <p className="text-sm text-slate-600">{testimonial.designation}</p>
                  </div>
                </div>
                <p className="text-slate-700 line-clamp-2">{testimonial.testimonial}</p>
              </div>
            ))}
          </motion.div>
        </div> 

     
      </div>
    </div>
  );
};

export default TestimonialSection;