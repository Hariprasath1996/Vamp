import React from 'react'
import "./Home.css"
import {Link}  from "react-router-dom"
const Home = () => {
    return (
        <>
            <div className='img-container'>
                <img className='logo' src="src/image/vamp-logo.png" alt="vamp-logo"  />
            </div>
            <div className='contain'>
                <ul className='un-order'>
                    <li>
                        <Link to={"/"} className='Home'>Home </Link>
                    </li>
                    <li>
                        <Link to={"Service"}>Service</Link>
                    </li>
                    <li>
                        <Link to={"Contact"} className='Contact_us'>Contact_us</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Home
