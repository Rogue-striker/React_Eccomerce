import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagramSquare,FaLink,FaHome } from 'react-icons/fa'

//* Need to redesign this component 

const Footer = () => {

    const divStyles = 'flex-1';
    const h1Style = 'text-white text-md font-bold';
    const linkStyle = 'flex mr-2 flex items-center';
    return (
        <div className='bg-black text-white box-border py-10 sm:py-20 leading-10'>
            <div className='container mx-auto w-full flex flex-nowrap'>
                <div className={divStyles} >
                    <h1 className={h1Style}>About</h1>
                    <p className='leading-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, suscipit.
                    </p>
                </div>
                <div className={divStyles}>
                    <h1 className={h1Style}>Social</h1>
                    <div className = {linkStyle}>
                        <FaFacebookF className='text-white' size={30} />
                        <p className='pl-1' >Facebook</p>
                    </div>
                    <div className={linkStyle}>
                        <FaInstagramSquare className='text-white' size={30} />
                        <p  className='pl-1' >Instagram</p>
                    </div>
                    <div className={linkStyle}>
                        <FaTwitter className='text-white' size={30} />
                        <p className='pl-1' >Twitter</p>
                    </div>

                </div>
                <div className={divStyles}>
                    <h1 className={h1Style}>Links</h1>
                    <div className={linkStyle}>
                        <FaHome className='text-white' size={20} />
                        <p className='pl-1' >Home</p>
                    </div>
                    <div className={linkStyle}>
                        <FaLink className='text-white' size={20} />
                        <p  className='pl-1' >Categories</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;