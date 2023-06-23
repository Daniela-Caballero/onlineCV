import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Menu({aboutRef, educationRef, skillsRef, experienceRef}) {

    const [menuClicked, setMenuClicked] = useState(false)
    
    const toggleMenu = () => setMenuClicked(!menuClicked)
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop-75,
        });
    };

    const scrollToSectionMenu = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
        });
        console.log(elementRef.current.offsetTop)
        setMenuClicked(!menuClicked)
    };

    return (
        <div className='navigation'>
            <div className='menubar'>
                <li className='text'><a href="#0" onClick={() => scrollToSection(aboutRef)}>About</a></li>
                <li className='text'><a href="#0" onClick={() => scrollToSection(educationRef)}>Education</a></li>
                <li className='text'><a href="#0" onClick={() => scrollToSection(skillsRef)}>Skills</a></li>
                <li className='text'><a href="#0" onClick={() => scrollToSection(experienceRef)}>Experience</a></li>
            </div>
            {/* Add a div with class tag menubar then add list like below */}
            <div className='side-menu'>
                {/* Burger menu icon */}
                <div className= {menuClicked ? 'hamburger active' : 'hamburger'}>
                    <FontAwesomeIcon icon={faAngleDown} onClick={toggleMenu} />
                </div>
            </div>
            <nav className= {menuClicked ? 'menu active' : 'menu'}>
                {/* List items */}
                <ul className='text-list' onClick={toggleMenu}>
                    <li className='text'><a href="#0" onClick={() => scrollToSection(aboutRef)}>About</a></li>
                    <li className='text'><a href="#0" onClick={() => scrollToSection(educationRef)}>Education</a></li>
                    <li className='text'><a href="#0" onClick={() => scrollToSection(skillsRef)}>Skills</a></li>
                    <li className='text'><a href="#0" onClick={() => scrollToSection(experienceRef)}>Experience</a></li>
                </ul>
            </nav>
        </div>
    );
}