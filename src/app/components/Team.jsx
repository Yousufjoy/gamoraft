import React from 'react';
import TeamMember from './TeamMember';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Tanveer Ahmed",
      role: "UI/UX Artist",
      imgSrc: "/assets/1.jpg",  // Correct file names, and update other srcs
      linkedinUrl: "#", // Add actual LinkedIn URLs if available
      twitterUrl: "#"   // Add actual Twitter URLs if available
    },
    {
      id: 2,
      name: "Md Sifat",
      role: "Owner & CEO | Programmer | Level Designer | 3D Artist", // Shorten the role for better layout
      imgSrc: "/assets/1.jpg", 
      linkedinUrl: "#",
      twitterUrl: "#"
    },
    {
      id: 3,
      name: "Rashid Naive",
      role: "3D Hard Surface and Product Modeler",
      imgSrc: "/assets/1.jpg", 
      linkedinUrl: "#",
      twitterUrl: "#"
    }
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16 relative">
          Our Team
          <span className="block w-20 h-1 bg-purple-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></span>
        </h2>

        {/* Modified grid for better responsiveness and spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
          {teamMembers.map(member => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              imgSrc={member.imgSrc}
              linkedinUrl={member.linkedinUrl}  // Pass down social media URLs
              twitterUrl={member.twitterUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;