
import React from 'react';
import PageLayout from '../../layouts/pageLayout';
import universityImage from '../../assets/university.jpeg'; 

const teamMembers = [
  { name: "Ahmed Mohammed", role: "Project Manager", bio: "Ahmed is responsible for overseeing the project and ensuring all milestones are met." },
  { name: "Solomon Sugamo", role: "BACKEND Developer", bio: "Solomon specializes in backend development and database management." },
  { name: "Gulshan Kumar", role: "FRONTEND Developer", bio: "Gulshan focuses on creating a seamless user interface and experience." },
  { name: "Kavish solanki", role: "Quality Assurance", bio: "Kavish ensures that all code is bug-free and meets quality standards." },
  { name: "Shahzaib Khan ", role: "UX/UI Designer", bio: "Shazaib designs intuitive user interfaces and conducts user research." }
];

const About = () => {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <img 
          src={universityImage} 
          alt="Högskolan Kristianstad" 
          className="w-full h-96 object-cover rounded mb-8 shadow-md"
        />
        <p className="text-lg text-center mb-12">
          We are students of Högskolan Kristianstad, and this website is part of a full stack project. 
          Our main aim is to create a social media app for the students of Högskolan. 
          This project is the result of the combined efforts of our dedicated team.
        </p>
        <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-center text-gray-600 mb-4">{member.role}</p>
              <p className="text-center text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-8">Our mission is to build a platform that connects students and fosters a vibrant campus community. Through this project, we aim to enhance communication, collaboration, and social interaction among students.</p>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">For any inquiries, please contact us at: <a href="mailto:info@hogskolankristianstad.se" className="text-blue-500">info@hogskolankristianstad.se</a></p>
        </div>
      </div>
    </PageLayout>
  );
}

export default About;
