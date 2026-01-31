// HomePage.js - Home page component
import React from 'react';
import headshot from './icons/headshot1.jpg';
import photo1 from './icons/homepage2.jpg';
import photo2 from './icons/homepage1.jpg';
import photo3 from './icons/homepage3.jpg';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as MailIcon } from './icons/mail.svg';
import { router } from '../routes.js';
import posts from '../posts/index.js';
import { LinkedInEmbed } from 'react-social-media-embed';

const HomePage = () => {
    const handleNavigation = (routeName) => {
      router.navigate(routeName);
    };

    const handlePostClick = (slug) => {
      router.navigate('blogPost', { slug });
    };
  
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => 
      new Date(b.date) - new Date(a.date)
      .slice(0,3)
    );

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-8 sm:px-6 md:px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 gap-x-20 mb-8 mt-8">

            {/* headshot */}
            <div class="rounded-full p-[2px] bg-gradient-to-b from-light-wisteria-300 to-light-wisteria-600">
              <img src={headshot} alt='headshot' className="w-60 rounded-full object-cover"/>
            </div>

            {/* name and desc */}
            <div className="text-center md:text-left flex flex-col justify-center">
              <h1 className="text-6xl font-heading mb-4">
                Lucy Fidock
              </h1>
              <p className="text-3xl font-serif mb-4">
                Software Engineer
              </p>

              <div className="flex items-center space-x-4 md:self-start self-center">
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
                Bachelor of Computer Science (Advanced) Graduate at the University of Adelaide <br/>
                Incoming Graduate Software Engineer at Atlassian
              </p>
          </div>

          <h2 className="text-4xl font-heading mb-4">
              Latest updates 
          </h2>

          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 md:gap-8">
            <div className="mb-12" style={{ display: 'flex', justifyContent: 'center' }}>
              <LinkedInEmbed 
                url="https://www.linkedin.com/embed/feed/update/urn:li:activity:7364262958580813824"
                postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                width="100%"
                height={400} 
              />
            </div>

            <div className="mb-12" style={{ display: 'flex', justifyContent: 'center' }}>
              <LinkedInEmbed 
                url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7303593293953540096"
                postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                width="100%"
                height={400} 
              />
            </div>

            <div className="mb-12" style={{ display: 'flex', justifyContent: 'center' }}>
              <LinkedInEmbed 
                url="https://www.linkedin.com/embed/feed/update/urn:li:share:7214181219213721600"
                postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                width="100%"
                height={400} 
              />
            </div>
          </div>

          <h2 className="text-4xl font-heading mb-4">
              Recent Uploads
          </h2>

          <div className="space-y-8 mb-12">
              {sortedPosts.map(post => (
                <article 
                  key={post.id}
                  className="border-b border-light-wisteria-200 dark:border-pale-slate-800 pb-6"
                >
                  <h2 className="text-2xl font-heading mb-2">
                    <button
                      onClick={() => handlePostClick(post.slug)}
                      className="hover:text-light-wisteria-500 transition-colors text-left"
                    >
                      {post.title}
                    </button>
                  </h2>
                  <time className="text-sm text-light-wisteria-500 dark:text-light-wisteria-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <p className="mt-3">{post.summary}</p>
                  <button
                    onClick={() => handlePostClick(post.slug)}
                    className="inline-block mt-3 text-light-wisteria-500 hover:text-light-wisteria-600 font-semibold"
                  >
                    Read more →
                  </button>
                </article>
              ))}
            </div>

          <h2 className="text-4xl font-heading mb-4">
              Want to learn more? 
          </h2>

          <div className="text-left mb-12">
            <p className="text-xl font-sans mb-8">
              Check out my    
              <span onClick={() => handleNavigation('about')} className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> about </span> section
              or 
              <span onClick={() => handleNavigation('about')} className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> CV</span>.
              Looking to get in touch? Contact me on 
              <a href="https://www.linkedin.com/in/lucyfidock/" target="_blank" rel="noopener noreferrer" className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> LinkedIn </a>
              or via my
              <a href="mailto:lucy.fidock@icloud.com" target="_blank" rel="noopener noreferrer" className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> email</a>
            </p>
        </div>

        <div className="flex flex-row justify-center md:justify-between mb-16">
          <img src={photo1} alt='melbourne streets' className="w-60 rounded-sm object-cover hidden md:block"/>
          <img src={photo2} alt='lucy in arashiyama' className="w-60 rounded-sm object-cover"/>
          <img src={photo3} alt='bamboo forest' className="w-60 rounded-sm object-cover hidden md:block"/>
        </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;