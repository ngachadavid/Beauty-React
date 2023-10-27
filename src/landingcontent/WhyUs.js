import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';


function WhyUs() {
    return (
    //     <section className="bg-white dark:bg-gray-900">
    //     <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    //         <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
    //             <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Powering innovation at <span class="font-extrabold">200,000+</span> companies worldwide</h2>
    //             <p className="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
    //             <p className="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
    //             <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
    //                 Learn more
    //                 <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    //             </a>
    //         </div>
    //     </div>
    //   </section>
<section class="bg-brown dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">WHY US?</h2>
          <p class="text-dbrown sm:text-xl dark:text-gray-400">Here at Beauty Bliss, we're all about that beauty life. We know that when you look good, you feel good – and that's why we're passionate about providing high-quality cosmetics that help you slay all day, every day.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-12 h-12  lg:h-14 lg:w-14 dark:bg-primary-900">
              <FontAwesomeIcon icon={faRankingStar} beatFade style={{color: "#00000",}} size="lg"/>              
              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">Quality</h3>
              <p class="text-dbrown dark:text-gray-400">Our cosmetics are made with the finest ingredients and are free of harmful chemicals, so you can feel good about what you're putting on your skin.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-12 h-12 lg:h-14 lg:w-14 dark:bg-primary-900">
              <FontAwesomeIcon icon={faPeopleGroup} beatFade style={{color: "#00000",}} size="lg"/>              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">Inclusivity</h3>
              <p class="text-dbrown dark:text-gray-400">Beauty for all! Our inclusive selection of shades and products ensures that everyone can feel confident and beautiful – no matter their skin tone or type.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10  lg:h-14 lg:w-14 dark:bg-primary-900">
              <FontAwesomeIcon icon={faTruck} beatFade style={{color: "#00000",}} size="lg"/>             
             </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">Convenience</h3>
              <p class="text-dbrown dark:text-gray-400">Shop with ease and slay with confidence! Our ecommerce store offers fast shipping, easy returns, and personalized recommendations – making it easy for you to get the beauty products you need, when you need them.</p>
          </div>
      </div>
  </div>
</section>
    )
}

export default WhyUs
