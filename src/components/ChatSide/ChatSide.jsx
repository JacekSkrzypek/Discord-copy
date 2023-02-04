import React from 'react';
import RightColumn from '../RightColumn';
import MainPart from './MainPart';
import Navbar from './Navbar';

const ChatSide = () => {
    return (
       <section className='chat-side'>
            <Navbar />
            <MainPart />
            <RightColumn />
         
       </section>
    );
};

export default ChatSide;