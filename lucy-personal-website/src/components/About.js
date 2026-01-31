// HomePage.js - Home page component
import React from 'react';
import { router } from '../routes.js';
import photo1 from './icons/about1.jpg';
import photo2 from './icons/about2.jpg';
import photo3 from './icons/about3.jpg';

const AboutPage = () => {
  const handleNavigation = (routeName) => {
    router.navigate(routeName);
  };

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-8 sm:px-6 md:px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="flex justify-flex-start flex-col mt-16">
            <h1 className="text-6xl font-heading mb-8">
              About Me
            </h1>

            <p className="text-xl font-sans mb-16">
                Hi! I'm Lucy, a Computer Science graduate interested in Software Engineering and Cybersecurity. 
                I love problem solving and anything creative. If you'd like to hear about my previous experience and projects, please read   
                <span onClick={() => handleNavigation('cv')} className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> here</span>.
            </p>

            <div className="flex flex-row justify-center md:justify-between mb-16">
              <img src={photo1} alt='melbourne streets' className="w-60 rounded-sm object-cover hidden md:block"/>
              <img src={photo2} alt='lucy in arashiyama' className="w-60 rounded-sm object-cover"/>
              <img src={photo3} alt='bamboo forest' className="w-60 rounded-sm object-cover hidden md:block"/>
            </div>

            <div className="flex flex-row justify-between mb-10">
              <div>
                <p className="text-3xl font-heading mb-4">
                  Hobbies & Interests
                </p>
                <p className="text-xl font-sans mb-10 mr-6">
                  I love photography, design and travel. As a Design Officer for the University of Adelaide's Computer Science Club in my final year, 
                  I had the opportunity to work on my graphic design skills, creating designs for club events.
                </p>
              </div>

              {/* <img src={design1} alt='cocktail night poster' className="w-60 h-50 rounded-sm object-cover mr-2"/>
              <img src={design2} alt='women in tech panel poster' className="w-60 h-50 rounded-sm object-cover"/> */}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;