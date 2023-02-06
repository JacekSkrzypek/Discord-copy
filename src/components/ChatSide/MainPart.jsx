import React from 'react';
import '../modules.css';
import { useGlobalContext } from '../../context'
import { LANGUAGE} from '../../texts'
import { BiSearch } from 'react-icons/bi'
import { USERS } from '../../constants';

const MainPart = () => {
    const { data: { language} } = useGlobalContext();
    return (
        <section className='main-part'> 
                <div className="search-bar-section">
                    <input type="text" className="search-bar" placeholder={LANGUAGE.search[language]}/>
                    <BiSearch className='icon'/>
                </div>               

                {USERS.map((user) => {
                    <p>{user.nick}</p>
                    if(user.status != 0) { //0 - offline
                        <article>
                            <p>{user.nick}</p>
                        </article>
                    }
                })}
        </section>
    );
};

export default MainPart;