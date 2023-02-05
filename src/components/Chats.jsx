import React from 'react';
import './modules.css';
import { HiUsers } from 'react-icons/hi'
import { GiCarWheel } from 'react-icons/gi'
import { LANGUAGE } from '../texts.jsx';
import { useGlobalContext } from '../context';

const Chats = () => {
    const { data } = useGlobalContext();
    const language = data.language;
    return (
        <section className='chats'>
            <div className='message-search'>
                <button type='text' className='search-input'> {LANGUAGE.startConversation[language]}</button>
            </div>

            <article className='option-list'>
                <div className='option friends'>
                    <HiUsers />
                    <p>{LANGUAGE.friends[language]}</p>
                </div>
                <div className='option nitro'>
                    <GiCarWheel />
                    <p>{LANGUAGE.nitro[language]}</p>
                    <div className='new-banner'>
                        <h1> {LANGUAGE.new[language]} </h1>
                        <div className="star left-star"></div>
                        <div className="star right-star"></div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Chats;