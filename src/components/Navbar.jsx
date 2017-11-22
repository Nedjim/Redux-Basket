import React from 'react';
import playIcon from '../icons/basket.png';


const Navbar = () => (
    <nav>
        <ul>
            <li className='active'><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>     
            <li><img src={playIcon} className='basket-icon'/></li> 
        </ul>     
    </nav>
);

export default Navbar;