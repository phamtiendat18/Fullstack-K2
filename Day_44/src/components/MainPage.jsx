import "../css/MainPage.css";
import { useAuth0 } from "@auth0/auth0-react";
import React, { memo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
const MainPage = () => {
  const form = useRef();
  const { isLoading, user, logout, isAuthenticated } = useAuth0();

  const [message, setMessage] = useState(
    "Còn gì tuyệt vời hơn nếu như cùng nhau thưởng thức ly apple meomeo trong tiết trời giá rét này!"
  );

  const [value, setValue] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      {isAuthenticated && (
        <div className="info">
          <div className="wrapper">
            <div className="profile">
              <div className="avatar">
                <img src={user.picture} alt="" />
              </div>
              <div className="greeting">
                <span>Xin chào {user.name ? user.name : user.nickname} !</span>
              </div>
              <div className="local">
                <span>
                  vị trí: {user.locale === "vi" ? "Việt Nam" : "Nước Ngoài"}
                </span>
              </div>
              <div className="email">
                <p>
                  Email: <a href="#">{user.email ? user.email : user.sub}</a>
                </p>
              </div>
            </div>
            <form action="" onSubmit={sendEmail} className="form-send-email">
              <label htmlFor="user-email">Email của bạn*</label>
              <input
                type="text"
                name="user-email"
                className="user-email"
                defaultValue={user.email || user.sub}
              />
              <label htmlFor="message">Tin nhắn</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="message"
                defaultValue="Còn gì tuyệt vời hơn nếu như cùng nhau thưởng thức ly apple meomeo trong tiết trời giá rét này!"
              ></textarea>
              <button className="send-btn">Yêu cầu hỗ trợ</button>
            </form>
            <button onClick={() => logout()} className="logout-btn">
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(MainPage);
