import React from 'react'

function Toggle({checked, onChange}) {
  return (
    <div className='mt-[10px]'>
      <span className="toggle-control">
      <input
        className="dmcheck"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
      />
      <label htmlFor="dmcheck" />
    </span>
  </div>
  )
}

export default Toggle