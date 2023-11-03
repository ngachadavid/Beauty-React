import React from 'react';
import shukri from "../images/mypic.jpeg"
const About = () => {


  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-grey-900 sm:text-4xl">
            About Our Beauty Products Ecommerce Website
          </h2>
          <p className="mt-4 text-lg text-">
          Welcome to our website! We're a team of passionate individuals who believe that everyone deserves to feel good about themselves. That's why we've made it our mission to provide the best beauty products for our customers, no matter their skin type, hair texture, or budget.

          We know that the beauty industry can be intimidating and confusing, but don't worry, we've got you covered. Our team of experts is always here to answer your questions, give you advice, or just chat about the latest makeup trends.

          At the end of the day, our goal is simple: to help you look and feel your best. Whether you're a makeup pro or a beauty newbie, we've got something for you. So go ahead, treat yourself to a new lipstick, a face mask, or whatever makes you feel like a million bucks. You deserve it!

          And if you're ever feeling down, just remember: a little bit of mascara and a good sense of humor can go a long way. Trust us, we've tried it.

          </p>
          <h3 className="text-2xl font-extrabold text-gray-900 mt-8 mb-4">
            How to Use Our Beauty Products Ecommerce Website
          </h3>
          <ol className="list-decimal list-inside">
            <li>Browse our wide selection of beauty products by category or brand.</li>
            <li>Read detailed product descriptions and reviews to find the perfect product for you.</li>
            <li>Add products to your cart and proceed to checkout.</li>
            <li>Enter your shipping and payment information and confirm your order.</li>
            <li>Enjoy your new beauty products!</li>
          </ol>
          <h3 className="text-2xl font-extrabold text-gray-900 mt-8 mb-4">
            Want to Contribute to Our Beauty Products Ecommerce Website?
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            We're always looking for talented developers to help us improve our ecommerce website. If you're interested in contributing, please visit our GitHub repository and submit a pull request. We appreciate all contributions, big or small!
          </p>
          <div className="mt-8 text-center text-xl underline">
            <a href="https://github.com/ngachadavid/Beauty-React" className="font-medium text-pink hover:text-pink-500">
              View our GitHub repository
            </a>
          </div>
        </div>
      </div>


      <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet the Developer
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            I'm a passionate developer dedicated to creating the best beauty products ecommerce website possible.
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-dbrown">
                    David Mwangi
                  </h3>
                  
                  <p className="mt-2 max-w-2xl text-sm text-brown">
                    Full Stack Developer
                  </p>
                 
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  A skilled full-stack developer passionate about creating user-friendly websites and delivering high-quality work that exceeds client expectations.
                 </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
