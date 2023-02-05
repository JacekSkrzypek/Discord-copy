import React from 'react';
import '../modules.css'
import { HiUsers } from 'react-icons/hi'

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <section className='left-side'>
            <div className='friends'>
                <HiUsers className='icon' />
                <p className='title'> Friends </p>
            </div>

            <ul>
                <li>
                    <button className='list-element'>Online</button>
                </li>
                <li>
                    <button className='list-element'>All</button>
                </li>
                <li>
                    <button className='list-element'>Pending</button>
                </li>
                <li>
                    <button className='list-element'>Blocked</button>
                </li>
                <li>
                    <button className='list-element add-friend'>Add Friend</button>
                </li>
            </ul>
            </section>
            <section className='right-section'> 
                <p>dsaasd</p>
            </section>
        </nav>
    );
};

export default Navbar;