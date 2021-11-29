import React from 'react'
import { NavLink } from 'react-router-dom'
import "../saecss/navbar.css"
import img from "../../../images/sae_logo.png"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark sticky-top" style={{ background: "#000" }}>
                <NavLink className="navbar-brand" to="/"><img style={{ width: "100px", height: "40px" }} src={img} alt="ing" /></NavLink>
                <button className="navbar-toggler collapsed" style={{ color: "red", }} type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample01">
                    <ul className="navbar-nav" style={{ background: "#000" }}>
                        <li className="nav-item active w-75 m-auto ">
                            <NavLink className="nav-link  text-center text-light" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item w-75 m-auto">
                            <NavLink className="nav-link text-center text-light" to="/members">Members</NavLink>
                        </li>

                        <li className="nav-item  w-75 m-auto">
                            <NavLink className="nav-link  text-center text-light" to="/events">Events</NavLink>
                        </li>
                        <li className="nav-item  w-75 m-auto">
                            <NavLink className="nav-link  text-center text-light" to="/baja">Baja</NavLink>
                        </li>
                        <li className="nav-item w-75 m-auto">
                            {
                                (window.innerWidth > 500) ?
                                    <NavLink className="nav-link text-center text-light" to="/autopia">Autopia</NavLink>
                                    :
                                    <a className="nav-link text-center text-light" href="http://www.pdf995.com/samples/pdf.pdf">Autopia</a>
                            }
                        </li>




                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar
