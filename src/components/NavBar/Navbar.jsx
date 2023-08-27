import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import headTwitter from "../../assets/twitter.png";
import headYoutube from "../../assets/youtube.png";
import headSoo from "../../assets/so.png";
import headDiscord from "../../assets/discord.png";
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className={`HeaderContainer ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className='HeaderLeftSideContainer'>
                    <div className="HeaderLogo">
                        <img className="image-1156-icon" alt="" src={logo} />
                    </div>
                    <div className="HeaderMenuContainer">
                        <ul>
                            <li><a href="#">PLAY</a></li>
                            <li><a href="#">NFTS</a></li>
                            <li><a href="#">GAMEPLAY</a></li>
                            <li><a href="#">ECOSYSTEM</a></li>
                            <li><a href="#">WHITEPAPER</a></li>
                        </ul>
                    </div>
                </div>
                <div className="HeaderRightSideContainer">
                    <div className="HeaderSocialIconContainer">
                        <ul>
                            <li><a href=""><img className="image-1156-icon" alt="" src={headDiscord} /></a></li>
                            <li><a href=""><img className="image-1156-icon" alt="" src={headTwitter} /></a></li>
                            <li><a href=""><img className="image-1156-icon" alt="" src={headSoo} /></a></li>
                            <li><a href=""><img className="image-1156-icon" alt="" src={headYoutube} /></a></li>
                        </ul>
                        {/* <button className="GetWhiteListedBtn">GET WHITELISTED</button> */}
                        <div class="GetWhiteListedBtn">
                            <a href="#"><span>GET WHITELISTED</span></a>
                        </div>

                    </div>
                    <div className='humburgerConatiner' onClick={toggleMenu}>
                        <div className='humburgerLine'></div>
                        <div className='humburgerLine'></div>
                        <div className='humburgerLine'></div>
                    </div>
                    <div className={`SideMenu ${isMenuOpen ? 'menu-open' : ''}`}>
                        <div className="CloseButton" onClick={toggleMenu}>
                            <div className="CloseIcon"></div>
                            <div className="CloseIcon"></div>
                        </div>
                        <div className="HeaderLogo">
                            <img className="image-1156-icon" alt="" src={logo} />
                        </div>
                        <ul>
                            <li><a href="#">PLAY</a></li>
                            <li><a href="#">NFTS</a></li>
                            <li><a href="#">GAMEPLAY</a></li>
                            <li><a href="#">ECOSYSTEM</a></li>
                            <li><a href="#">WHITEPAPER</a></li>
                        </ul>
                        <div class="GetWhiteListedBtn small-btn">
                            <a href="#"><span>GET WHITELISTED</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar