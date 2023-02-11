import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-blue-600'>
                <div className="flex items-center justify-between container mx-auto  text-white">
                    <div className='flex justify-between items-center gap-8'>
                        <img className='w-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/5/52/Logo_de_Free.png" alt="" />
                        <ul className='flex gap-10'>
                            <li>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='contact'>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to='/about'>
                                    Abaout
                                </Link>
                            </li>
                            <div className='group'>
                                <div className=' bg-black group relative w-full'>
                                    <button className='flex justify-between items-center'>
                                        <span className="mr-1">
                                            Dropdown
                                        </span>
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>



                                    </button>
                                    <ul className='hidden group-hover:block absolute bg-blue-600'>
                                        <li className=""><a className="hover:hover:bg-emerald-700 py-2 px-4 block whitespace-no-wrap" href="#">Hiadadadadada</a></li>
                                        <li className=""><a className="hover:hover:bg-emerald-700 py-2 px-4 block whitespace-no-wrap" href="#">Hi</a></li>
                                        <li className=""><a className="hover:hover:bg-emerald-700 py-2 px-4 block whitespace-no-wrap" href="#">Hi</a></li>
                                    </ul>
                                </div>
                            </div>
                        </ul>

                    </div>
                    <div>
                        Logo
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar