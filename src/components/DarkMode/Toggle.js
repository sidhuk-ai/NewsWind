import React from 'react'

function Toggle({checked, onChange}) {
  return (
    <div className=''>
      <span className="toggle-control">
      <input type="checkbox" className="checkbox" id="chk" checked={checked} onChange={onChange} />
      <label className="label" htmlFor="chk">
        <i className="bi bi-moon-stars"></i>
        <i className="bi bi-sun-fill"></i>
        <div className="ball"></div>
      </label>
    </span>
  </div>
  )
}

export default Toggle