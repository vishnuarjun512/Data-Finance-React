import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='p-4 max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-2xl text-xl font-bold py-2 '> Want tips and tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type='email' className='p-3 w-full  rounded-md text-black ' placeholder='Enter Email'/>
                        <button className=' bg-[#00df9a] text-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        
                    </div>
                    <p>We care about the protection of your data. Read our<span className='text-[#00df9a]'> Privacy Policy </span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;