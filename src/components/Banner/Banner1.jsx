import React from 'react';
import play_store from "../../assets/google-play.png";
import app_store from "../../assets/app-store.png"
const Banner1 = () => {
    return (
        <div className='p-5 lg:p-10'>
            <div className='text-center'>
                <h1 className='font-bold text-[#001931] text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:mb-2'>We Build</h1>
                <h1 className='font-bold text-[#001931] text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='lg:w-3/5 mx-auto mb-7 md:mb-10 text-[#627382] text-sm md:text-base lg:text-lg xl:text-xl'>At App-Galaxy , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='text-center space-y-3 md:flex md:justify-center md:gap-5'>
                <a className='btn btn-lg lg:btn-lg xl:btn-xl font-bold w-3/5 md:w-auto p-5 gap-3' href=""><img src={play_store} alt="" />Play Store</a>
                <a className='btn btn-lg lg:btn-lg xl:btn-xl font-bold w-3/5 md:w-auto p-5 gap-2' href=""><img src={app_store} alt="" /> App Store</a>
            </div>
        </div>
    );
};

export default Banner1;