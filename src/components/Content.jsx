import React from 'react';
import ServerList from './ServersList';
import './modules.css';
import Chats from './Chats';
import ChatSide from './ChatSide/ChatSide';
import RightColumn from './RightColumn';


const Content = () => {
    return (
        <main className='content'>
            <ServerList />
            <Chats />
            <ChatSide />
        </main>
    );
};

export default Content;