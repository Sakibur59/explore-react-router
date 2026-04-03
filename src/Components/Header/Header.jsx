import React from 'react';
import { Link, NavLink } from 'react-router';


const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                {/* <Link to='/'>Home</Link>
                <Link to='/mobiles'>Mobile</Link>
                <Link to='/laptops'>Laptop</Link> */}

                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobile</NavLink>
                <NavLink to='/laptops'>Laptop</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;