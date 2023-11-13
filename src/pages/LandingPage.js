import React from 'react'
import { Link } from "react-router-dom";
import landingImage from"../images/landingpage.jpg"
import WhyUs from '../landingcontent/WhyUs';
import Testimonials from '../landingcontent/Testimonials';
import SocialProof from '../landingcontent/SocialProof';
import Slideshow from '../components/Slideshow';

function LandingPage() {
  return (

    <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-12  tracking-tight leading-none text-5xl font-bold h-8  w-full font-['Poppins'] md:text-5xl xl:text-6xl dark:text-white">Cosmetics That</h1>
            <h2 className="max-w-2xl mb-6  tracking-tight leading-none Poppins text-4xl italic h-16 w-[514px]">Everyone loves!</h2>
            <p class="max-w-2xl mb-6 font-normal text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">"Elevate your beauty game with our premium cosmetics. Shop now and indulge in the ultimate beauty experience!"</p>
            <Link to="/products">
              <button className="px-10 py-3 text-3xl text-white font-bold rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-pink hover:bg-pink-600 duration-300 inline-flex items-center justify-center  text-center border border-pink  hover:bg-pink focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-pink dark:hover:bg-pink dark:focus:ring-pink">
                Shop Now 
              </button>
            </Link> 
        </div>
        <div className="drop-shadow-lg backdrop-blur-[4px] hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <img 
            className='rounded-2xl'
            src={landingImage}
            alt="mockup"
            />
        </div>                
    </div>
       <Slideshow/>
       <SocialProof/>
       <WhyUs/>
       <Testimonials/>

</section>
    
  );
}

export default LandingPage
