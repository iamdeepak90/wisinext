import React, { useState, useEffect } from 'react';
import axios from "axios"
import Link from 'next/link'
import WebPimg from './Webpimg';
import { MdPhoneInTalk } from 'react-icons/md';
import { TfiClose } from 'react-icons/tfi';
import Menuitem from "./Menuitem";
import menus from "../pages/api/menuitem.json"

const Header = ({mystyle=null}) => {

    const [isMenu, setisMenu] = useState(false);
    const [country, setCountry] = useState({code:""});
    
    const getGeoInfo = async () => {
        await axios.get('https://ipinfo.io/json').then((response) => {
            let data = response.data;
            setCountry({
                code:data.country
            });
        }).catch((error) => {
        console.log(error);
        });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);

    const countryWisePhone = () => {
        if(country.code == 'US' || country.code == 'CA'){
            return <a href="tel:888.680.0174"> 888.680.0174</a>
        } else if(country.code == 'IN'){
            return <a href="tel:95828.49600"> 95828.49600</a>
        } else{
            return <a href="tel:0091.95828.49600"> 0091.95828.49600</a>
        }
    }

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
                        <div className="head_phone">
                            {countryWisePhone()} {country.code}
                        </div>
                    </div>

                </div>
            </div>
        </header>
        </>
    );
}

export default Header;