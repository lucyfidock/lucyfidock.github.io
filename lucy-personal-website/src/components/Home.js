// HomePage.js - Home page component
import React from 'react';
import { router } from '../routes.js';
import headshot from './icons/headshot1.jpg';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as MailIcon } from './icons/mail.svg';

const HomePage = () => {
  const handleLearnMore = () => {
    router.navigate('about');
  };

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 gap-x-20 mb-8 mt-8">

            {/* headshot */}
            <div>
              <img src={headshot} alt='headshot' className="w-60 h60 rounded-full object-cover"/>
            </div>

            {/* name and desc */}
            <div className="text-center md:text-left flex flex-col justify-center">
              <h1 className="text-6xl font-heading mb-4">
                Lucy Fidock
              </h1>
              <p className="text-3xl font-serif mb-4">
                Software Engineer
              </p>

              <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/lucyfidock/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="fill-current light-wisteria-600 dark:light-wisteria-400 w-6 h-6" />
                </a>  
                <a href="mailto:lucy.fidock@icloud.com" target="_blank" rel="noopener noreferrer">
                  <MailIcon className="fill-current light-wisteria-600 dark:light-wisteria-400 w-6 h-6" />
                </a>
              </div>

            </div>
          </div>

          <div className="text-left mb-12 mt-12">
              <p className="text-xl font-sans mb-8">
                Final year Bachelor of Computer Science (Advanced) student at the University of Adelaide
                Incoming Graduate Software Engineer @ Atlassian
              </p>

            <button
              onClick={handleLearnMore}
              className="inline-block bg-light-wisteria-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Learn More
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Fast & Modern</h3>
              <p className="text-gray-600">
                Built with the latest React technologies for optimal performance and user experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">
                Looks great on all devices, from desktop computers to mobile phones.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Intuitive navigation and clean design make finding what you need simple.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get Started Today
            </h2>
            <p className="text-gray-600 mb-6">
              Ready to explore everything we have to offer? Browse through our content, 
              learn about our mission, and discover what makes us unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;