// Header.js - Header component with navigation
import React from 'react';
import { routes, router } from '../routes.js';
import Icon from './icons/Mode.js';

const Header = ({ currentRoute, mode, setMode }) => {
  const handleNavigation = (routeName) => {
    router.navigate(routeName);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }

  return (
    <header className="sticky top-0 bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 shadow-lg shadow-light-wisteria-100 dark:shadow-stone-800 dark:text-light-wisteria-400 transition-colors" >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => handleNavigation('home')}
            className="text-4xl font-heading hover:text-light-wisteria-400 transition-colors "
          >
            LF.
          </button>
          {/* make dropdown for phone view */}
          <ul className="flex space-x-6 items-center">
            {Object.entries(routes).map(([key, route]) => (
              <li key={key}>
                <button
                  onClick={() => handleNavigation(key)}
                  className={`px-3 py-2 rounded transition-colors ${
                    currentRoute === key
                      ? 'font-sans bg-light-wisteria-600 text-white dark:bg-light-wisteria-400 dark:text-pale-slate-950'
                      : 'font-sans hover:bg-light-wisteria-400'
                  }`}
                >
                  {route.name}
                </button>
              </li>
            ))}
            <Icon mode={mode} onClick={() => toggleMode()}></Icon>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;