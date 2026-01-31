import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { router } from '../routes.js';
import posts from '../posts/index.js';

const BlogPost = ({ slug }) => {
  const [content, setContent] = useState('');
  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      // Fetch the markdown file content
      fetch(post.content)
        .then(res => res.text())
        .then(text => {
          // Remove frontmatter (content between --- and ---)
          const contentWithoutFrontmatter = text.replace(/^---[\s\S]*?---\n*/m, '');
          setContent(contentWithoutFrontmatter);
        })
        .catch(err => console.error('Error loading post:', err));
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
        <div className="container mx-auto px-6 md:px-4 py-8">
          <div className="max-w-4xl mx-auto mt-16">
            <h1 className="text-4xl font-heading mb-4">Post Not Found</h1>
            <button
              onClick={() => router.navigate('blog')}
              className="text-light-wisteria-500 hover:text-light-wisteria-600 font-semibold"
            >
              ← Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-6 md:px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="mt-16">
            <header className="mb-8">
              <h1 className="text-6xl font-heading mb-4">{post.title}</h1>
              <time className="text-light-wisteria-500 dark:text-light-wisteria-400">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {post.tags && (
                <div className="mt-4 flex gap-2">
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
            </header>
            
            <div className="prose dark:prose-dark max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {content}
              </ReactMarkdown>
            </div>
            
            <nav className="mt-12 pt-8 border-t border-light-wisteria-200 dark:border-pale-slate-800">
              <button
                onClick={() => router.navigate('blog')}
                className="text-light-wisteria-500 hover:text-light-wisteria-600 font-semibold"
              >
                ← Back to all posts
              </button>
            </nav>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;