import React from "react";
import { useGlobalContext } from "../../context";
import "../modules.css";
import { LANGUAGE } from "../../texts";
import { USERS, STATUS_COLOR } from "../../constants";
import UserStatus from "../UserStatus";

const RightColumn = () => {
  const {
    data: { language },
  } = useGlobalContext();

  return (
    <section className="right-column">
      <h1 className="title">{LANGUAGE.activeNow[language]}</h1>
      {USERS.map((item, key) => {
        const { nick, time, profileImage, status, game, icon } = item;
        if(game !== undefined && status !== 0) {
        return (
          <article key={key} className="active-user">
            <div className="left-side">
              <div className="image-section">
                <img src={profileImage} alt={nick} className="profile-image" />
                <UserStatus status={status} />
              </div>
              <div className="information">
                <h2 className="nick">{nick}</h2>
                <p className="game">
                  {game} - {time[0]}
                  {time[1][language]}
                </p>
              </div>
            </div>
            <img src={icon} alt={game} className="game-icon" />
          </article>
        );}
      })}
    </section>
  );
};

export default RightColumn;
