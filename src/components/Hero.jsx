// import React, { useState, useEffect } from "react";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     "https://images.pexels.com/photos/29421050/pexels-photo-29421050/free-photo-of-dramatic-aerial-view-of-lake-and-canyons-in-utah.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/29398839/pexels-photo-29398839/free-photo-of-scenic-motorcycle-ride-through-swiss-alps.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/29424931/pexels-photo-29424931/free-photo-of-majestic-rocky-canyon-with-lush-greenery.jpeg?auto=compress&cs=tinysrgb&w=600",
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen w-full overflow-x-clip">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col-reverse md:flex-row items-center gap-8 py-8">
//           {/* Left Section */}
//           <div className="w-full md:w-1/2 space-y-8">
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-wide">
//               Discover the World&apos;s Most Beautiful Mountain Trails
//             </h1>

//             <p className="text-lg md:text-xl text-gray-600">
//               Embark on unforgettable journeys through majestic peaks, pristine
//               valleys, and breathtaking landscapes. Join our community of
//               passionate trekkers and explore the world&apos;s most stunning
//               mountain paths.
//             </p>
//             <div>
//               <a href="#adventures" className="mt-4">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 ">
//                   Explore Trails
//                 </button>
//               </a>
//             </div>
//           </div>

//           {/* Right Section - Image Slider */}
//           <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
//                   currentSlide === index ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <img
//                   src={slide}
//                   alt={`Mountain trek ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}

//             {/* Slider Indicators */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-2 h-2 rounded-full transition-colors duration-300 ${
//                     currentSlide === index ? "bg-white" : "bg-white/50"
//                   }`}
//                   onClick={() => setCurrentSlide(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.pexels.com/photos/29421050/pexels-photo-29421050/free-photo-of-dramatic-aerial-view-of-lake-and-canyons-in-utah.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/29398839/pexels-photo-29398839/free-photo-of-scenic-motorcycle-ride-through-swiss-alps.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/29424931/pexels-photo-29424931/free-photo-of-majestic-rocky-canyon-with-lush-greenery.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });

    // Image slider timer
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 py-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-8">
            <h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-wide"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Discover the World&apos;s Most Beautiful Mountain Trails
            </h1>

            <p 
              className="text-lg md:text-xl text-gray-600"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Embark on unforgettable journeys through majestic peaks, pristine
              valleys, and breathtaking landscapes. Join our community of
              passionate trekkers and explore the world&apos;s most stunning
              mountain paths.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a href="#adventures" className="mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                  Explore Trails
                </button>
              </a>
            </div>
          </div>

          {/* Right Section - Image Slider */}
          <div 
            className="w-full md:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide}
                  alt={`Mountain trek ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Slider Indicators */}
            <div 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;