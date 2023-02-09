import React from "react";
import './modules.css'
import { STATUS_COLOR, STATUS_NAMES } from "../constants";


const UserStatus = ({ status }) => {

  return (
    <div>
      <div className={`status ${STATUS_COLOR[status]}`}
            style={{ 
                background: STATUS_COLOR[status]
                }}>


            <span className={STATUS_NAMES[status]}></span>
      </div>
    </div>
  );
};

export default UserStatus;
