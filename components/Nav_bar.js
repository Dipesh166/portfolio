import React, { useState } from 'react'
import { Transition, transition } from '@headlessui/react' // for the smoth transitions
import Link from 'next/link'


function Nav_bar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <nav className='fixed z-20 bg-white w-full'>
                <div className='w-full '>
                    <div className='flex items-center h-20 w-full'>
                        <div className='flex items-center sm:mx-20 justify-between w-full'>
                            <div className='flex justify-center items-center flex-shrink-0 ml-10'>
                                <h1 className='font-bold text-xl cursor-pointer text-purple-600'>
                                    Eliza
                                </h1>

                            </div>

                            <div className='hidden md:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    <Link href='/' ><a  className="cursor-pointer text-rose-900 px-3 py-2 font-semibold  text-md">Home</a></Link>
                                   
                                    
                                    <Link href='/Blog'  ><a className="cursor-pointer text-blue-900 hover:text-purple-700 px-3 py-2 font-semibold text-md">Blog</a></Link>

                                   

                                </div>

                            </div>
                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className='font-semibold text-lg cursor-pointer hidden md:block'>
                                    Say<span className='text-purple-600'>hi</span>
                                </h1>

                            </div>

                        </div>

                        <div className='mr-4 flex md:hidden'>
                            <button onClick={() => setIsOpen(!isOpen)}
                                type="button" className='bg-purple-600 
                        inline-flex 
                        items-center 
                        justify-center 
                        p-2 rounded-md
                         text-white
                          hover:bg-black 
                          focus:ouline-none
                           focus:ring-white'
                                aria-controls='mobile-menu' aria-expanded="false">
                                <span className='sr-only'>Open main menu</span>
                                {!isOpen ?
                                    (<svg className='block h-6 w-6 '
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none' viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        aria-hidden="true">
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16 " /></svg>) : (<svg className='block h-6 w-6 '
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none' viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            aria-hidden="true">
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12 " /></svg>)}

                            </button>

                        </div>





                    </div>

                </div>

                { /* small size for the mobile devices */}
                <Transition show={isOpen} 
                 enter='transition ease-out duration-100 transform '
                 enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' 
                 leave='transition ease-in duration-7 transform ' 
                 leaveFrom='opacity-100 scale-100'  
                 leaveTo='opacity-0 scale-95'>

                    {(ref) => (
                        <div className='md:hidden' id='mobile-menu'>
                            <div ref={ref} className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1">
                             
                             
                             <Link href='/'  ><a className="cursor-pointer hover:bg-purple-600 text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a></Link>
                             <Link href='/Blog'  ><a className="cursor-pointer hover:bg-purple-600 text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a></Link>
                             

                            </div>

                        </div>
                    )}

                </Transition>

            </nav>
        </div>
    )
}

export default Nav_bar