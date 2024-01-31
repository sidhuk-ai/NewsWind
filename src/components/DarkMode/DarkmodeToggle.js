import React from 'react'
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode'

function DarkmodeToggle() {
    const darkMode = useDarkMode(false);
  return (
    <div className="dark-mode-toggle ml-5">
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  )
}

export default DarkmodeToggle