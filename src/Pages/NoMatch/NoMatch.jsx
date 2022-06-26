import React from 'react'
import Navbar from '../../Components/Navbar/NavBar';

import { Player, Controls } from '@lottiefiles/react-lottie-player';


const NoMatch = () => {
    const space = "https://assets10.lottiefiles.com/private_files/lf30_hdjv06hi.json"
    return (
        <>
        <Navbar/>
        <div className='flex flex-col items-center justify-center w-full h-90vh '>
            <Player
                autoplay
                loop
                src= {space}
                style={{ height: '500px', width: '500px' }}
                >
            </Player>
            <p className='text-xl font-poppins text-center'>
                The Page you are looking for does not exist
            </p>
        </div>
        </>
    )
}

export default NoMatch