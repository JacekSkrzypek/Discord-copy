import React from 'react';
import { useGlobalContext } from '../../context';
import '../modules.css'
import { LANGUAGE } from '../../texts';
import { USERS, STATUS_COLOR } from '../../constants';

const RightColumn = () => {
<<<<<<< HEAD
    const { data: { language } } = useGlobalContext();

    return (
        <section className='right-column'>
            <h1 className='title'>{LANGUAGE.activeNow[language]}</h1>
            {USERS.map((item, key) => {
                const {nick, time, profileImage, status, game, icon} = item
                return (
                <article key={key} className='active-user' >
=======
    const { data } = useGlobalContext();
    const { language } = data;

    console.log(USERS)
    return (
        <section className='right-column'>
            <h1 className='title'>{LANGUAGE.activeNow[language]}</h1>
            {USERS.map((item) => {
                const {nick, time, profileImage, status, game, icon} = item
                return (
                <article className='active-user'>
>>>>>>> 6917f242288cd0612879386ac1e592f6989a4d80
                    <div className='left-side'>
                        <div className='image-section'>
                            <img src={profileImage} alt={nick} className='profile-image' />
                            <div className='status' style={{background: STATUS_COLOR[status]}}></div>
                        </div>  
                        <div className='information'>
                            <h2 className='nick'>{nick}</h2>
                            <p className='game'>{game} - {time[0]}{time[1][language]}</p>
                        </div>
                    </div>  
                    
                    <img src={icon} alt={game} className='game-icon'/>
                </article>)
            })}
            
        </section>
    );
};

export default RightColumn;