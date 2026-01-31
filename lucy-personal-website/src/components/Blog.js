import React from 'react';
import { router } from '../routes.js';
import posts from '../posts/index.js';

const BlogPage = () => {
  const handlePostClick = (slug) => {
    router.navigate('blogPost', { slug });
  };

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-8 sm:px-6 md:px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-flex-start flex-col mt-16">
            <h1 className="text-6xl font-heading mb-8">
              Personal Blog
            </h1>

            <p className="text-xl font-sans mb-16">
                Welcome to my personal blog! It's just getting started but I plan to use this space to share what I've been up to lately in my life outside of work. 
            </p>
            
            <div className="space-y-8">
              {sortedPosts.map(post => (
                <article 
                  key={post.id}
                  className="border-b border-light-wisteria-200 dark:border-pale-slate-800 pb-6"
                >
                  <h2 className="text-3xl font-heading mb-2">
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
                  {post.tags && (
                    <div className="mt-2 flex gap-2">
                      {post.tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-light-wisteria-100 dark:bg-pale-slate-900 text-light-wisteria-600 dark:text-light-wisteria-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;