import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
const Home = () => {
    return (
        <>
            <nav className='nav-bar'>
                <div className='img-container'>
                    <img className='logo' src="src/image/vamp-icon.png" alt="vamp-logo" style={{ width: 150, borderRadius: 10 }} />
                </div>
                <div className='contain'>
                    <ul className='un-order'>
                        <li>
                            <Link to={"/"} className='Home'>About_us </Link>
                        </li>
                        <li>
                            <Link to={"/Service"}>Service</Link>
                        </li>
                        <li>
                            <Link to={"/Contact"} className='Contact_us '>Contact_us</Link>
                        </li>
                    </ul>
                </div>
                <div className='log-in'>
                    <Link><span style={{ right: 10, top: 2, position: 'relative' }}><FaUser className='user-icon' /></span>Log-In</Link>
                </div>
            </nav>
            {/* side nav bar */}
            <div className='side-nav-bar'>
                <p className='close-btn'>
                    <IoMdCloseCircleOutline />
                </p>
                <div className='side-nav-para'>
                    <p className='side-para'> <Link to={"/"} className='Home'>About_us </Link></p>
                    <p className='side-para'><Link to={"/Service"}>Service</Link></p>
                    <p className='side-para'><Link to={"/Contact"} className='Contact_us '>Contact_us</Link></p>
                    <p className='side-para'>
                        <Link><span ><FaUser className='user-icon' />Log-In</span></Link>
                    </p>
                </div>
            </div>
        </>
    )
}
export default Home
