import "../css/LoginPage.css";
import { useAuth0 } from "@auth0/auth0-react";

import React from "react";
import Loader from "./Loader";

const LoginPage = () => {
  const { isLoading, loginWithPopup, isAuthenticated } = useAuth0();
  if (isLoading) {
    <Loader />;
  }
  return (
    <>
      {!isAuthenticated && (
        <div className="intro">
          <h2>Cảm ơn bạn đã sử dụng dịch vụ của F8</h2>
          <p>
            Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
            tại đây
          </p>

          <button className="login-btn" onClick={() => loginWithPopup()}>
            Đăng nhập || Đăng ký
          </button>
        </div>
      )}
    </>
  );
};

export default LoginPage;
