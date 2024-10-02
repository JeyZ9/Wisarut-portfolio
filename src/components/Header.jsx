import React from 'react'

function Header() {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    }else{
      menuBtn.className = "nav-menu";
    }
  }
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className='nav-name'>Wisarut</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id='myNavMenu'>
        <ul className='nav_menu_list'>
          <li className='nav_list'>
            <a className='nav-link active-link' href="#home">Home</a>
          </li>
          <li className='nav_list'>
            <a className='nav-link' href="">About</a>
          </li>
          <li className='nav_list'>
            <a className='nav-link' href="">Project</a>
          </li>
          <li className='nav_list'>
            <a className='nav-link' href="">Contract</a>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className='btn'>Download CV <i className='uil uil-import'></i></button>
      </div>
      <div className="nav-menu-btn">
        <i className='uil uil-bars' onClick={menuFunction}></i>
      </div>
    </nav>
  )
}

export default Header