import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT</h1>
                <p className='py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='flex md:w-[75%] justify-between my-6 mx-1' >
                    <FaFacebookSquare size={30}></FaFacebookSquare>
                    <FaInstagram size={30}></FaInstagram>
                    <FaTwitterSquare size={30}></FaTwitterSquare>
                    <FaGithubSquare size={30}></FaGithubSquare>
                    <FaDribbbleSquare size={30}></FaDribbbleSquare>
                </div>
            </div>

            <div className='lg:col-span-2 px-2 py-10 flex justify-between'>
                <div>
                    <h1 className='font-medium text-gray-400'>Solutions</h1>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-medium text-gray-400'>Support</h1>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Solutions</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-medium text-gray-400'>Company</h1>
                    <ul>
                        <li className='py-2 text-sm'>About </li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-medium text-gray-400'>Legal</h1>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li> 
                    </ul>
                </div>
            </div>

            

        </div>
    )
}

export default Footer;