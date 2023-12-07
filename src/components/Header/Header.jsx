import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
        <div className="logos">
            <div className="logo">
                <h1>BLOGS</h1>
            </div>
            <nav>
                <ul>
                    <li>
                    <Link to="/home">HOME</Link>
                    </li>
                    <li>
                       <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="#">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/service">SERVICE</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </React.Fragment>
  )
}

export default Header