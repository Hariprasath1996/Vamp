import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa";
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
                            <Link to={"/"} className='Home'>Home </Link>
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
            <div></div>

        </>
    )
}
export default Home
