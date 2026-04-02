import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/mobiles'>Mobile</Link>
                <Link to='/laptops'>Laptop</Link>
            </nav>
        </div>
    );
};

export default Header;