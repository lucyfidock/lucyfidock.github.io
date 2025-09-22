// AboutPage.js - About page component
import React from 'react';
import { router } from '../routes.js';

const AboutPage = () => {
  const handleBackToHome = () => {
    router.navigate('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              About Us
            </h1>
            <p className="text-xl text-gray-600">
              Learn more about our story, mission, and the team behind MyWebsite
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              MyWebsite was born out of a passion for creating exceptional digital experiences. 
              We believe that great websites should be both beautiful and functional, providing 
              users with exactly what they need in an intuitive and engaging way.
            </p>
            <p className="text-gray-600 mb-4">
              Since our founding, we've been committed to pushing the boundaries of web technology 
              while maintaining a focus on user experience and accessibility. Every project we 
              undertake is an opportunity to learn, grow, and create something meaningful.
            </p>
            <p className="text-gray-600">
              Today, we continue to evolve and adapt to the changing digital landscape, always 
              keeping our users at the center of everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create digital experiences that inspire, inform, and connect people 
                around the world. We strive to make the web a better place through 
                thoughtful design and innovative technology.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• User-centered design</li>
                <li>• Quality and attention to detail</li>
                <li>• Continuous learning and improvement</li>
                <li>• Transparency and honesty</li>
                <li>• Accessibility for everyone</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="mb-6">
              We'd love to hear from you! Whether you have a question, a project idea, 
              or just want to say hello, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Contact Us
              </button>
              <button
                onClick={handleBackToHome}
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;