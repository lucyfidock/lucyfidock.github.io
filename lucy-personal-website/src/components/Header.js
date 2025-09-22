// Header.js - Header component with navigation
import React from 'react';
import { routes, router } from '../routes.js';

const Header = ({ currentRoute }) => {
  const handleNavigation = (routeName) => {
    router.navigate(routeName);
  };

  return (
    <header className="sticky top-0 bg-light-wisteria-50 text-light-wisteria-600 shadow-lg shadow-light-wisteria-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => handleNavigation('home')}
            className="text-4xl font-heading hover:text-light-wisteria-400 transition-colors"
          >
            LF.
          </button>
          {/* make dropdown for phone view */}
          <ul className="flex space-x-6">
            {Object.entries(routes).map(([key, route]) => (
              <li key={key}>
                <button
                  onClick={() => handleNavigation(key)}
                  className={`px-3 py-2 rounded transition-colors ${
                    currentRoute === key
                      ? 'font-sans bg-light-wisteria-600 text-white'
                      : 'font-sans hover:bg-light-wisteria-400'
                  }`}
                >
                  {route.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;