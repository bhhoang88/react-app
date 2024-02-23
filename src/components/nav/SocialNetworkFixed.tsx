import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialNetworkFixed = () => {
    return (
        <div className="fixed-social hidden md:block ">
            <ul>
                <li>
                    <Link to={`https://www.facebook.com/TechCertoOficial/`} className='flex items-center text-white gap-5 bg-[#3B5998] h-10 pl-4 pr-5'>
                        <FaFacebookF />
                        Facebook
                    </Link>
                </li>
                <li>
                    <Link to={''} className='flex items-center text-white gap-5 bg-[#C32AA3] h-10 pl-4 pr-5'>
                        <FaInstagram />
                        Instagram
                    </Link>
                </li>
                <li>
                    <Link to={''} className='flex items-center text-white gap-5 bg-[#FF0000] h-10 pl-4 pr-5'>
                        <FaYoutube />
                        Youtube
                    </Link>
                </li>
                <li>
                    <Link to={''} className='flex items-center text-white gap-5 bg-[#00B6F1] h-10 pl-4 pr-5'>
                        <img src="/img/zalo.svg" alt="" width={'20px'} />
                        Zalo
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default SocialNetworkFixed
