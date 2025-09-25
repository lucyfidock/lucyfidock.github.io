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
          <div className="flex justify-flex-start flex-col mt-16">
            <h1 className="text-6xl font-heading mb-8">
              Blog
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;