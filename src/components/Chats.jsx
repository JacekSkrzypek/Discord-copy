import React from 'react';
import './modules.css';
import { HiUsers } from 'react-icons/hi'
import { GiCarWheel } from 'react-icons/gi'

const Chats = () => {
    return (
        <section className='chats'>
            <div className='message-search'>
                <button type='text' className='search-input'> Find or start a conversation</button>
            </div>

            <article className='option-list'>
                <div className='option friends'>
                    <HiUsers />
                    <p>Friends</p>
                </div>
                <div className='option nitro'>
                    <GiCarWheel />
                    <p>Nitro</p>
                    <div className='new-banner'>
                        <h1>NEW </h1>
                        <div className="star left-star"></div>
                        <div className="star right-star"></div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Chats;