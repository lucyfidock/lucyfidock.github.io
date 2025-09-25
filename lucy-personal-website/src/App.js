// App.js - Main application component
import React, { useState, useEffect } from 'react';
import { router, routes } from './routes.js';
import Header from './components/Header.js';
import HomePage from './components/Home.js';
import AboutPage from './components/About.js';
import CvPage from './components/CV.js';
import BlogPage from './components/Blog.js';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [mode, setMode] = useState('light');

  // Component mapping
  const components = {
    HomePage,
    AboutPage,
    CvPage,
    BlogPage
  };

  useEffect(() => {
    // Initialize router
    router.init();
    setCurrentRoute(router.getCurrentRoute());

    // Listen for route changes
    const handleRouteChange = (newRoute) => {
      setCurrentRoute(newRoute);
    };

    router.addListener(handleRouteChange);

    // Cleanup listener on unmount
    return () => {
      router.removeListener(handleRouteChange);
    };
  }, []);

  // Get the current component to render
  const getCurrentComponent = () => {
    const route = routes[currentRoute];
    if (route && components[route.component]) {
      const Component = components[route.component];
      return <Component />;
    }
    // Fallback to HomePage if route not found
    return <HomePage />;
  };

  return (
    <div className="App" data-theme={mode}>
      <Header currentRoute={currentRoute} mode={mode} setMode={setMode}/>
      
      <main>
        {getCurrentComponent()}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            Built with React and styled with Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;