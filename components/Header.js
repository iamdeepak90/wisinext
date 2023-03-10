import React, { useState } from 'react';
import Link from 'next/link'
import WebPimg from './Webpimg';
import { MdPhoneInTalk } from 'react-icons/md';
import { TfiClose } from 'react-icons/tfi';
import Menuitem from "./Menuitem";
import menus from "../pages/api/menuitem.json"

const Header = ({mystyle=null}) => {

    const [isMenu, setisMenu] = useState(false);

    return (
        <>
        <header style={mystyle}>
            <div className="header_wrapper">
                <div className="header_row">
                    <div className="header_logo">
                        <Link href="/">  
                        <WebPimg src="images/logo.png" alt="logo" webpsrc="images/webp/logo.webp" />
                        </Link>  
                    </div>
                    <div className="heamburger" onClick={() => setisMenu(!isMenu)}>
                        {isMenu===true ?
                            <TfiClose style={{
                                    position: 'fixed',
                                    zIndex: 99,
                                    top: '20px',
                                    right: '20px',
                                }}
                                size="1.5em"
                            /> : <><span /><span /><span /></>}
                    </div>

                    <nav style={{ display: isMenu ? 'block' : '' }}>
                        <ul>
                            { menus.map((item, index) => <Menuitem key={index} item={item} />) }
                        </ul>
                    </nav>

                    <div className="head_cont">
                        <div className="get_purposal"><a className="common_btn" href="https://www.wisitech.com/rfq-web-solutions/">GET A PROPOSAL</a></div>
                        <div className="head_phone"><a href="tel:888.680.0174"> 888.680.0174</a></div>
                    </div>

                </div>
            </div>
        </header>
        </>
    );
}

export default Header;