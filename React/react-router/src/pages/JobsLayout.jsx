import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const JobsLayout = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/jobs/1" />Job 1<Link />
                    </li>
                    <li>
                        <Link to="/jobs/2" />Job 2<Link />
                    </li>
                    <li>
                        <Link to="/jobs/new" />New Job<Link />
                    </li>
                    <li>
                        <Link to="/jobs/new" />New Job<Link />
                    </li>
                    <div key={index} className='relative'>
                        <button>
                            <span className="mr-1">
                                Dropdown
                            </span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>



                        </button>
                        <ul >
                            <li className=""><a className="hover:hover:bg-emerald-700 py-2 px-4 block whitespace-no-wrap" href="#">Hi</a></li>
                            <li className=""><a className="hover:hover:bg-emerald-700 py-2 px-4 block whitespace-no-wrap" href="#">Hi</a></li>
                            <li className=""><a className="hover:hover:bg-emerald-700 py-2 px-4 block whitespace-no-wrap" href="#">Hi</a></li>
                        </ul>
                    </div>

                </ul>
            </nav>
            <hr />
            <Outlet />
        </>
    )
}

export default JobsLayout