// BlogPage.js - Hugo-integrated blog posts list
import React, { useState, useEffect } from 'react';
import { router } from '../routes.js';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as MailIcon } from './icons/mail.svg';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Method 1: Try Hugo JSON index first (best)
    fetch('/blog/posts/index.json')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data)) setPosts(data);
      })
      .catch(() => {
        // Method 2: Fallback - parse Hugo's HTML list page
        fetch('/blog/posts/')
          .then(res => res.text())
          .then(html => {
            // Extract post links/titles from Hugo's default list template
            const titleMatches = html.match(/<a[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>/gi);
            if (titleMatches) {
              const parsedPosts = titleMatches.slice(0, 10).map(match => {
                const urlMatch = match.match(/href="([^"]+)"/);
                const titleMatch = match.match(/>([^<]+)</);
                return {
                  url: urlMatch[1],
                  title: titleMatch[1].trim()
                };
              });
              setPosts(parsedPosts);
            }
          });
      });
  }, []);

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-flex-start flex-col mt-16">
            <h1 className="text-6xl font-heading mb-8">Blog</h1>
            
            {posts.length > 0 ? (
              <div className="space-y-6">
                {posts.map((post, index) => (
                  <article key={index} className="group bg-white/70 dark:bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-light-wisteria-200/50 dark:border-slate-800/50 hover:shadow-2xl transition-all duration-300">
                    <a 
                      href={`/blog/${post.url}`} 
                      className="block hover:no-underline"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/blog/${post.url}`;
                      }}
                    >
                      <h2 className="text-3xl font-bold group-hover:text-light-wisteria-700 dark:group-hover:text-light-wisteria-300 mb-3">
                        {post.title}
                      </h2>
                      <p className="text-lg text-light-wisteria-500 dark:text-light-wisteria-400">
                        Dive into cybersecurity, low-level programming, and data analysis
                      </p>
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl opacity-75 mb-4">Loading posts...</p>
                <p className="text-sm opacity-60">
                  Run <code>npm run dev:blog</code> to copy Hugo content to <code>public/blog/</code>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
