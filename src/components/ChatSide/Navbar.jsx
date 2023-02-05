import React from "react";
import "../modules.css";
import { HiUsers } from "react-icons/hi";
import { LANGUAGE } from "../../texts";
import { useGlobalContext } from "../../context";
import { RiChatNewLine } from "react-icons/ri";
import { CgInbox } from "react-icons/cg";
import { MdHelp } from 'react-icons/md'

const Navbar = () => {
  const { data } = useGlobalContext();
  const language = data.language;
  return (
    <nav className="nav-bar">
      <section className="left-side">
        <div className="friends">
          <HiUsers className="icon" />
          <p className="title"> {LANGUAGE.friends[language]} </p>
        </div>

        <ul>
          <li>
            <button className="list-element active">
              {LANGUAGE.online[language]}
            </button>
          </li>
          <li>
            <button className="list-element"> {LANGUAGE.all[language]}</button>
          </li>
          <li>
            <button className="list-element">
              {LANGUAGE.pending[language]}
            </button>
          </li>
          <li>
            <button className="list-element">
              {LANGUAGE.blocked[language]}
            </button>
          </li>
          <li>
            <button className="list-element add-friend">
              {LANGUAGE.addFriend[language]}
            </button>
          </li>
        </ul>
      </section>
      <section className="right-side">
        <button className="new-message">
          <RiChatNewLine />
        </button>
        <div className="right-buttons">
          <button>
            <CgInbox />
          </button>
          <button>
            <MdHelp />
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
