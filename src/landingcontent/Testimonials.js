import React from 'react'

function Testimonials() {
    return (
<section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-pink dark:text-dbrown" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="text-2xl font-medium text-grey dark:text-white">"I've tried so many beauty products over the years, but I have to say that this shop has truly exceeded my expectations. Not only are the products high quality and effective, but the customer service is fantastic. The team really takes the time to listen to my needs and make personalized recommendations, which has saved me so much time and hassle. I always feel confident and beautiful when I use their products, and I can't recommend them enough!"</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
              <div class="flex items-center divide-x-2 divide-beige dark:divide-gray-700">
                  <div class="pr-3 font-medium text-dbrown dark:text-gray-900">Micheal Gough</div>
                  <div class="pl-3 text-sm font-light text-beige dark:text-gray-400">Professional Beautician</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
    )
}

export default Testimonials
