import React from 'react';

const instructors = [
  {
    id: 1,
    name: "Alex Thompson",
    image: "https://images.pexels.com/photos/7148727/pexels-photo-7148727.jpeg?auto=compress&cs=tinysrgb&w=800",
    role: "Lead Mountain Guide",
    certifications: ["IFMGA/UIAGM Certified", "Wilderness First Responder"],
    expertise: ["High Altitude Climbing", "Technical Ice Climbing", "Alpine Navigation"],
    experience: "15+ years",
    achievements: [
      "Summited Everest 3 times",
      "Led 200+ successful expeditions",
      "Rescued 12 climbers in critical conditions"
    ],
    languages: ["English", "Nepali", "Spanish"],
    bio: "Former competitive climber turned professional mountain guide, Alex has dedicated his life to helping others experience the majesty of high-altitude adventures safely."
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    image: "https://images.pexels.com/photos/22890185/pexels-photo-22890185/free-photo-of-a-man-in-a-black-shirt-sitting-in-a-chair.jpeg?auto=compress&cs=tinysrgb&w=800",
    role: "Senior Trekking Guide",
    certifications: ["AMGA Certified", "Advanced First Aid"],
    expertise: ["Mountain Navigation", "Wildlife Expertise", "Sustainable Trekking"],
    experience: "12+ years",
    achievements: [
      "Completed all Seven Summits",
      "Published author on mountain safety",
      "Environmental conservation award winner"
    ],
    languages: ["English", "Spanish", "French"],
    bio: "A passionate environmentalist and experienced mountaineer, Maria specializes in creating sustainable and educational trekking experiences."
  },
  {
    id: 3,
    name: "Pemba Sherpa",
    image: "https://images.pexels.com/photos/9406573/pexels-photo-9406573.jpeg?auto=compress&cs=tinysrgb&w=800",
    role: "Technical Climbing Specialist",
    certifications: ["Nepal Mountaineering Association Certified", "High Altitude Expert"],
    expertise: ["High Altitude Support", "Route Setting", "Weather Forecasting"],
    experience: "18+ years",
    achievements: [
      "Summited K2 without supplemental oxygen",
      "Led 150+ Himalayan expeditions",
      "Mountain rescue team leader"
    ],
    languages: ["Nepali", "English", "Hindi"],
    bio: "Born in the Khumbu region, Pemba brings unparalleled local knowledge and technical expertise to high-altitude expeditions."
  }
];

const Instructor = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-14 md:mt-20 border rounded-xl">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Meet Our Instructors
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Our world-class team of certified mountain guides brings decades of experience 
          from the world&apos;s most challenging peaks. Each instructor is committed to your 
          safety, growth, and success in the mountains.
        </p>
      </div>

      {/* Instructor Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <div 
            key={instructor.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Instructor Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{instructor.name}</h3>
                <p className="text-white/90">{instructor.role}</p>
              </div>
            </div>

            {/* Instructor Details */}
            <div className="p-6 space-y-4">
              {/* Experience & Languages */}
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Experience: {instructor.experience}</span>
                <span className="text-slate-600">
                  Languages: {instructor.languages.join(", ")}
                </span>
              </div>

              {/* Expertise */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {instructor.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Certifications</h4>
                <ul className="list-disc list-inside text-sm text-slate-600">
                  {instructor.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Key Achievements</h4>
                <ul className="list-disc list-inside text-sm text-slate-600">
                  {instructor.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {/* Bio */}
              <p className="text-slate-700 text-sm">{instructor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;