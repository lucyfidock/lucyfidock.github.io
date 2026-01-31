// Header.js - Header component with navigation
import React, { useState } from 'react';
import { routes, router } from '../routes.js';
import Icon from './icons/Mode.js';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Header = ({ currentRoute, mode, setMode }) => {
  const handleNavigation = (routeName) => {
    router.navigate(routeName);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeText('Light Mode')
    }
    else {
      setMode('light')
      setModeText('Dark Mode')
    }
  }

  const [modeText, setModeText] = useState('Dark Mode');

  // Filter out routes that should be hidden from navigation
  const navRoutes = Object.entries(routes).filter(([key, route]) => !route.hideFromNav);

  return (
    <header className="sticky top-0 bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 shadow-lg shadow-light-wisteria-100 dark:shadow-stone-800 dark:text-light-wisteria-400 transition-colors" >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => handleNavigation('home')}
            className="text-4xl font-heading hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 transition-colors "
          >
            LF.
          </button>

          {/* dropdown for phone view */}
          <div className="block md:hidden">
            <Menu as="div" className="relative inline-block text-left font-sans">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-light-wisteria-100 dark:bg-pale-slate-900 px-3 py-2 text-sm font-semibold text-light-wisteria-600 dark:text-light-wisteria-400 hover:bg-light-wisteria-200 dark:hover:bg-pale-slate-800 transition-colors">
                Menu
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </MenuButton>

              <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded bg-light-wisteria-50 dark:bg-pale-slate-950 shadow-lg shadow-light-wisteria-100 dark:shadow-stone-800 focus:outline-none">
                {navRoutes.map(([key, route]) => (
                  <MenuItem key={key}>
                    {({ active }) => (
                      <button
                        onClick={() => handleNavigation(key)}
                        className={`block w-full text-left px-4 py-2 text-sm rounded transition-colors ${
                          currentRoute === key
                            ? 'font-sans bg-gradient-to-b from-light-wisteria-600 to-light-wisteria-400 text-white dark:bg-light-wisteria-400 dark:text-pale-slate-950'
                            : active
                            ? 'bg-light-wisteria-200 dark:bg-pale-slate-800'
                            : 'text-light-wisteria-600 dark:text-light-wisteria-400'
                        }`}
                      >
                        {route.name}
                      </button>
                    )}
                  </MenuItem>
                ))}
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={toggleMode}
                      className={`block w-full text-left px-4 py-2 text-sm rounded transition-colors ${
                        active ? 'bg-light-wisteria-200 dark:bg-pale-slate-800' : ''
                      }`}
                    >
                      {modeText}
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>

          {/* row of buttons for desktop */}
          <div className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              {navRoutes.map(([key, route]) => (
                <li key={key}>
                  <button
                    onClick={() => handleNavigation(key)}
                    className={`px-3 py-2 rounded transition-colors ${
                      currentRoute === key
                        ? 'font-sans bg-gradient-to-b from-light-wisteria-600 to-light-wisteria-400 text-white dark:bg-light-wisteria-400 dark:text-pale-slate-950'
                        : 'font-sans hover:bg-light-wisteria-400 dark:hover:bg-light-wisteria-600'
                    }`}
                  >
                    {route.name}
                  </button>
                </li>
              ))}
              <Icon mode={mode} onClick={() => toggleMode()}></Icon>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;