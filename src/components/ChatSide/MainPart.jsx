import React from "react";
import "../modules.css";
import { useGlobalContext } from "../../context";
import { LANGUAGE } from "../../texts";
import { BiSearch } from "react-icons/bi";
import { USERS } from "../../constants";
import { STATUS_COLOR } from "../../constants";
import { MdMessage } from 'react-icons/md'


const MainPart = () => {
  const {
    data: { language },
    functions: { countOnlineUsers },
  } = useGlobalContext();
  return (
    <section className="main-part">
      <aside className="search-aside">
      <div className="search-bar-section">
        <input
          type="text"
          className="search-bar"
          placeholder={LANGUAGE.search[language]}
        />
        <BiSearch className="icon" />
      </div>
      </aside>
      <h1 className="number-of-online-users">
        {`${LANGUAGE.onlineUP[language]} - ${countOnlineUsers()} `}
      </h1>
      {USERS.map((user) => {
        const { nick, profileImage, status, userID} = user;
        if (user.status != 0) {
          return (
            <aside className="active-user-aside">
            <article className='active-user'>
              <div className="image-section">
                <img src={profileImage} alt={nick} className="profile-image" />
                <div
                  className="status"
                  style={{ background: STATUS_COLOR[status] }}
                ></div>
              </div>
              <div className="information">
                <div className="user-name">
                  <h1 className="nick">{nick}</h1>
                  <p className="user-id">{userID}</p>
                </div>
                <p className="status-title"> {LANGUAGE.status[status][language]} </p>
              </div>
              <div className="buttons">
                <button className="button"> 
                  <MdMessage className="icon" />
                </button>
                <button className="button">
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </button>
              </div>
            </article>
            </aside>
          );
        }
      })}
    </section>
  );
};

export default MainPart;
