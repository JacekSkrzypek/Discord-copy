import React, { useMemo, useState } from 'react';
import '../modules.css';
import { useGlobalContext } from '../../context'
import { LANGUAGE} from '../../texts'
import { BiSearch } from 'react-icons/bi'
import { USERS } from '../../constants';

const MainPart = () => {
    const { data: { language}, functions: { countOnlineUsers } } = useGlobalContext();
    //console.log(countOnlineUsers());
    //console.log(countOnlineUsers());

    return (
        <section className='main-part'> 
                <div className="search-bar-section">
                    <input type="text" className="search-bar" placeholder={LANGUAGE.search[language]}/>
                    <BiSearch className='icon'/>
                </div>      
                <p className='number-of-online-users'>
                    {`${LANGUAGE.onlineUP[language]} - ${countOnlineUsers()}`}
                </p>
                {USERS.map((user, key) => {
                    if(user.status != 0) { //0 - offline
                        return (
                        <article className={key}>
                            <p>{user.nick}</p>
                        </article>
                       )
                    }}
                )}
        </section>
    );
};

export default MainPart;