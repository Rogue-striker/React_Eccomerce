import React from 'react'
import ParticlesBackground from '../Particles/Particles'
const ForgotPassowrd = () => {
    return (
        <>
            <ParticlesBackground />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
       w-[512px] max-w-xs sm:max-w-lg'>
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className='flex items-center justify-center pt-6 pb-8'>
                            <h1 className="font-bold text-2xl sm:text-4xl">The Store.</h1>
                        </div>
                        <div className='flex items-center justify-center pb-2'>
                            <h3 className="font-bold text-xl">Forgot Password</h3>
                        </div>
                       
                        <div className='mb-2'>
                            <label
                                className=' block font-bold mb-2 font-lato text-gray-700'
                                htmlFor='email'
                            >
                                Email
                            </label>
                            <input
                                className='shadow appearance-none border
                                 border-gray-300 rounded w-full py-2 px-3
                                  leading-tight focus:outline-none focus:shadow-outline' id='email' type='text' placeholder='Enter Your Email'
                            />
                        </div>
                        
                        <div className='flex flex-col items-center'>
                            <div className="mt-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassowrd;