import React from 'react';
import { SiDiscord } from 'react-icons/si';
import { FaCompass, FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import './modules.css';


const ServerList = () => {
    return (
        <section className='servers-list'>
            <button className='server-icon private'>
                <SiDiscord className='logo' />
            </button>

            <div className='my-servers'>
                <button className='server-icon bottom-button add-server'>
                    <HiPlus className='icon' />
                </button>
                <button className='server-icon bottom-button'>
                    <FaCompass className='icon' />
                </button>   
            </div>
            
        </section>
    );
};

export default ServerList;