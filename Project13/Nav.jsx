import React, { useState } from 'react';
import './nav.css';
import {FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';


export default function Nav(){

    const [show,setShow]=useState(false);
   
    return(
        <>
            <nav className="mainNav">
                <div className="logo">
                    <h2>
                        <span>K</span>umar
                        <span>M</span>ight
                    </h2>
                </div>

                <div className={ show ? "mobileMenuLink" : "menuLink"}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="socialMedia">
                    <ul className="socialMediaDesktop">
                        <li>
                            <FaFacebookSquare className='facebook'/>
                        </li>
                        <li>
                            <FaInstagramSquare className='instagram'/>
                        </li>
                        <li>
                            <FaWhatsappSquare className='whatsapp'/>
                        </li>
                    </ul>
                    <div className="hamburgerMenu">
                        <a href="" onClick={()=>setShow(!show)}>
                            <GiHamburgerMenu/>
                        </a>
                    </div>
                </div>
            </nav>

            <section className="heroSection">
                <p>Welcome to</p>
                <h1>Kumar Might</h1>
            </section>
        </>
    )
}