import React from 'react';
import { ReactComponent as DarkModeIcon } from './moon.svg';
import { ReactComponent as LightModeIcon } from './sun.svg';

export default function Icon({ mode, onClick }) {
  return mode === "dark" ? (
    <LightModeIcon className="fill-current light-wisteria-400 w-6 h-6" onClick={onClick} />
  ) : (
    <DarkModeIcon className="fill-current light-wisteria-600 w-6 h-6" onClick={onClick} />
  );
}