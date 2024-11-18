import React, {useEffect} from "react";
import Hero from "../components/Hero";
import AdventuresSection from "./AdventureExperience";
import TestimonialSection from "../components/Testimonial";
import Instructor from "../components/Instructors";

const Home = () => {

    useEffect(() => {
        document.title = "Home - Mountain Trek";
      }, []);
    

    return (
        <div className="container-style min-h-[70vh] py-16 overflow-x-clip">
            <Hero />
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Eco-Friendly Adventures
        </h2>
            <AdventuresSection/>
            <TestimonialSection/>
            <Instructor />
        </div>
    )
}

export default Home;
