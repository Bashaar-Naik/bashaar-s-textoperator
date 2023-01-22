import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom"

// We are importing link so that we can use the link to syntax


export default function Navbar(props) {
    return (
        
        <div>
            
            {/* Here I will insert the remaining part of the code */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/S">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* This is an alternative syntax basically by using the Link to stuff */}
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/about">About</a> */}
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode === 'light' ? "dark" : "light"} mx-3`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}</label>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

// Navbar proptypes properties setting-assigning can be done in this way

// Navbar.proptypes = {
//     title: proptypes.string,
//     // abouttext: Proptypes.string
// }


// You can even set up some normal and default Props like this
//So basically if i don't pass any props, so it will automatically use these props as given..
Navbar.defaultProps = {
    name: 'Stranger',
    title: 'Set title here'
};

