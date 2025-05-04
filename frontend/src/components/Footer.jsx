import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div  className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
        {/*left section */}
        <div>
            <img  className='md-5 5 w-40' src={assets.logo} alt=""/>
            <p  className='w-full md:w-2/3 text-gray-600 leading-6'>Lorea, ghofi bofoej jberjb bjbi jeriugbkj uewvjd aeuvjkd bjev rvkjdbgo bgsodvjdfjgorj jgrouigbfgj guiwerdihgd igfbiughighih idrgighihdfmnvbcn nxiwdeimnurbgtb qwertyuio dfghjk xcvbnm kjhgfd iujhbv mnbgfre iuhygf efb  knbv vfd.</p>
    
        </div>
        {/*center section */}

        <div>
            <p  className='text-xl font-medium md-5'>COMPANY</p>
            <ul  className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        {/*right section */}
        <div>
            <p  className='text-xl font-medium md-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 96772345</li>
                <li>thearushi16@gmail.com</li>
            </ul>

        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ itzarushi -All Right Reserved.</p>
      </div>
    </div>

    
  )
}

export default Footer
