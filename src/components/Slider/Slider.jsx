import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react';

const Slider = (props) => {
    const Images = props.images;
    //const show = props.show;
    var show = false;
    const [previndex, setIndex] = useState(0);
    useEffect(() => {

        const intId = setInterval(() => {
            console.log("in useEffect")
            setIndex((previndex) => {
                return (previndex + 1) % Images.length
            });
        }, 4000)
        return () => { clearInterval(intId) };
    }, [])
    const handleLeftArrow = () => {
        setIndex(Math.abs(previndex - 1) % Images.length);
    }
    const handleRightArrow = () => {
        setIndex(Math.abs(previndex + 1) % Images.length);
    }
    return (
        <><div className="w-full flex items-center justify-center relative transition-all md:mt-12 mt-6">
            <div className='h-7 w-7 sm:bg-white sm:h-11 sm:w-11 sm:border rounded-full hover:cursor-pointer absolute left-3 flex justify-center items-center'>
                <ArrowLeftIcon className='h-5 w-5 items-center' onClick={handleLeftArrow} />
            </div>
            <div>
                <img src={Images[previndex]} alt="images" className='sm:h-90vh sm:w-screen object-cover w-full' />
                <button className={show === true ? `absolute left-1/2 bottom-3
                sm:bottom-32
                transform
                -translate-x-1/2
                -translate-y-1/2
                w-fit
                px-1.5
                py-1
                sm:w-48
                bg-white
                md:px-3
                md:py-3
                rounded
                shadow-2xl
                sm:text-xl
                border-slate-800
                font-lato
                hover:scale-110
                transition
                ease-in-out
                delay-150
                duration-200
                hover:bg-blue-600
                hover:text-white
                ` : "hidden"}>Shop Now</button>
            </div><div className='h-7 w-7 sm:bg-white sm:h-11 sm:w-11 sm:border  rounded-full hover:cursor-pointer absolute right-3 flex justify-center items-center'>
                <ArrowRightIcon className='h-5 w-5 items-center' onClick={handleRightArrow} />
            </div>

        </div>
        </>
    );
}
export default Slider;
