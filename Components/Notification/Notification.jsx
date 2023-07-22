import React from "react";

//: INTERNAL STYLE IMPORT
import Style from "./Notification.module.css";

const Notification = ({setNotification, notification}) => {
  return (
    <div onClick={() => setNotification("")} className={Style.alert}>
      {notification} Notification  
      <span className={Style.close_button}>&times;</span>
    </div>
  );
};

export default Notification;
