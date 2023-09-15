import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
    return (
        <div className='w-full md:h-[620px] sm:h-[200px]  py-[8rem] px-4 bg-white'> 
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 sm:grid-rows-3 gap-8 '>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white'></img>
                    <h2 className='text-center text-4xl font-bold py-6'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className=' text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md font-medium my-6 w-[200px] mx-auto p-1'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300'>
                    <img src={Double} className='w-20 mx-auto mt-[-3rem] bg-white'></img>
                    <h2 className='text-center text-4xl font-bold py-6'>Double User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className=' text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#000300] text-[#00df9a] rounded-md font-medium my-6 w-[200px] mx-auto p-1'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Triple} className='w-20 mx-auto mt-[-3rem] bg-white'></img>
                    <h2 className='text-center text-4xl font-bold py-6'>Triple User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className=' text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md font-medium my-6 w-[200px] mx-auto p-1'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;