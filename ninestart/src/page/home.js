import React from 'react'
import photo1 from '../assets/foto1.svg'
import photo2 from '../assets/foto2.svg'
import photo3 from '../assets/app1.jpg'
import photo4 from '../assets/app2.jpg'
import photo5 from '../assets/app3.jpg'
import photo6 from '../assets/card1.jpg'
import photo7 from '../assets/card2.jpg'
import photo8 from '../assets/card3.jpg'
import photo9 from '../assets/web1.jpg'
import photo10 from '../assets/web2.jpg'
import photo11 from '../assets/web3.jpg'
import photo12 from '../assets/team-1.jpg'
import photo13 from '../assets/team-2.jpg'
import photo14 from '../assets/team-3.jpg'
import photo15 from '../assets/team-4.jpg'

const Home = () => {
  return (
    <div>
        <div className="bg-floralWhite dark:bg-raisinBlack w-full pt-7">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6">
            <h2 className='py-3  mb-4 tracking-wides leading-none md:text-5xl sm:text-5xl xl:text-5xl text-darkPuce dark:text-white text-4xl font-bold'>Bettter digital experience with Ninestars</h2>
            <p className=' text-grullo mb-6 font-light  lg:mb-4  lg:text-2xl sm:text-2xl dark:text-white'>LWe are team of talented designers making websites with <br /> Bootstrap</p>

            <a href="#" className="inline-flex items-center px-10 py-1.5 my-5 text-lg font-thin text-center text-white bg-halloweenOrange rounded-sm hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Get Started

            </a>

          </div>
          <div className=" lg:mt-0  lg:col-span-6 lg:flex">
            <img src={photo1} alt="/" />
          </div>
        </div>
      </div>

      <div className=" dark:bg-raisinBlack w-full">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-20 lg:grid-cols-12">
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={photo2} alt="/" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className='py-3  mb-4 tracking-wides leading-none md:text-5xl sm:text-5xl xl:text-4xl text-darkPuce dark:text-white text-4xl font-bold'>Voluptatem dignissimos provident <br /> quasi</h2>
            <p className=' text-blackCoral mb-6 font-normal  lg:mb-4  xl:text-sm sm:text-2xl dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>

            <div className='flex'>
              <div>
                <i class="las la-file-invoice text-lightSolman text-5xl"></i>
                <h2 className='text-xl font-bold text-deepTaupe pt-2'>Corporis voluptates sit</h2>
                <p className='text-blackCoral pt-2'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div>
                <i className="las la-cube text-lightSolman text-5xl"></i>
                <h2 className='text-xl font-bold text-deepTaupe pt-2'>Ullamco laboris nisi</h2>
                <p className='text-blackCoral pt-2'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className='w-full bg-floralWhite'>
        <div className='text-center pt-5'>
          <h2 className='text-blackShadows text-2xl font-bold'>Services</h2>
          <p className='text-darkPuce text-3xl font-bold'>Check out the great services we offer</p>
          <hr class="w-16 h-0.5 mx-auto my-5 bg-halloweenOrange border-0 rounded dark:bg-gray-700" />
        </div>
        <div className='flex items-center justify-center container mx-auto pb-20 pt-10'>
          <div className='gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-center'>
            <div className='bg-white max-w-xs p-6 rounded-xl shadow-md hover:border-b-2 border-b-halloweenOrange  hover:-translate-y-2 ease-in duration-500  '>
              <i class="lab la-dribbble text-5xl text-mandarin "></i>
              <h2 className='text-darkPuce text-lg font-bold pt-2'>Lorem Ipsum</h2>
              <p className='text-blackCoral pt-2'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
            </div>
            <div className='bg-white max-w-xs p-6 rounded-xl shadow-md hover:-translate-y-2 ease-in duration-500 hover:border-b-2 border-b-halloweenOrange'>
              <i class="las la-file-invoice text-5xl text-mandarin "></i>
              <h2 className='text-darkPuce text-lg font-bold pt-2'>Sed ut perspiciatis</h2>
              <p className='text-blackCoral pt-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
            </div>
            <div className='bg-white max-w-xs p-6 rounded-xl shadow-md hover:-translate-y-2 ease-in duration-500 hover:border-b-2 border-b-halloweenOrange'>
              <i class="las la-tachometer-alt text-5xl text-mandarin"></i>
              <h2 className='text-darkPuce text-lg font-bold pt-2'>Magni Dolores</h2>
              <p className='text-blackCoral pt-2'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
            </div>
            <div className='bg-white max-w-xs p-6 rounded-xl shadow-md hover:-translate-y-2 ease-in duration-500 hover:border-b-2 border-b-halloweenOrange'>
              <i class="las la-globe text-5xl text-mandarin"></i>
              <h2 className='text-darkPuce text-lg font-bold pt-2'>Nemo Enim</h2>
              <p className='text-blackCoral pt-2'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Home