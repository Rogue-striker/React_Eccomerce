import React from 'react'
import ParticlesBackground from '../Particles/Particles'
import {EyeIcon, EyeOffIcon} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      <ParticlesBackground/>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
       w-[512px] max-w-xs sm:max-w-lg'>
        <div className="w-full max-w-md">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className='flex items-center justify-center pt-6 pb-8'>
             
              <h1 className="font-bold text-2xl sm:text-4xl cursor-pointer">The Store.</h1>
             
            </div>
            <div className='flex items-center justify-center pb-2'>
              <h3 className="font-bold text-xl">Login</h3>
            </div>
            <div className='mb-4'>
              <label
                className=' block font-bold mb-2 font-lato text-gray-700'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' id='email' type='text' placeholder='Enter Your Email'
              />
            </div>
            <div className='mb-4'>
              <label
                className=' block font-bold mb-2 font-lato text-gray-700'
                htmlFor='Password'
              >
                Password
              </label>
              <div className='w-full relative'>
              <input
                className='shadow appearance-none border border-gray-300  rounded w-full py-2 pl-3 pr-8  leading-tight focus:outline-none focus:shadow-outline' id='email' type={showPassword ? 'text': 'password'} placeholder='********'
              />
              {
                showPassword ? <EyeIcon className='h-4 w-4 absolute right-3 top-3 items-center text-gray-600' 
                  onClick={handleShowPassword}
                /> :
                <EyeOffIcon className='h-4 w-4 absolute right-3 top-3  text-gray-600' 
                  onClick={handleShowPassword}
                />
              }
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className="mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
              </div>
              <div className='mt-2 flex flex-col items-center justify-center' >
                <Link to="/forgotpassword">
                  <p className='text-sm text-gray-600 hover:text-blue-800 mt-2 cursor-pointer'>
                    Forgot Your Password
                  </p>
                </Link>
                <Link to="/register">
                  <p className='text-sm text-gray-600 hover:text-blue-800 mt-2 cursor-pointer' >
                    Not Yet Registered? Register.
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage