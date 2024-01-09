"use client";
import { signIn, useSession } from "next-auth/react";
import Profile from "../profile/page";
import Cookies from "js-cookie";
export const handleClickGithub = () => {
  Cookies.set("accountType", "github", { expires: 365 });
  signIn("github", { callbackUrl: "/profile" });
};
export const handleClickGoogle = () => {
  Cookies.set("accountType", "google", { expires: 365 });
  signIn("google", { callbackUrl: "/profile" });
};
const Login = () => {
  const session = useSession();
  if (session.status === "authenticated") return <Profile />;
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-fit flex flex-col p-[30px] rounded-[10px] gap-y-[10px]">
        <button
          onClick={handleClickGoogle}
          className="bg-green-300 w-[300px] h-[50px] flex items-center justify-center rounded-[10px]"
        >
          <div className="w-fit flex gap-x-[5px] items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            Login with Google
          </div>
        </button>
        <button
          onClick={handleClickGithub}
          className=" w-[300px] h-[50px] flex items-center justify-center rounded-[10px] border-[1px] divide-green-300"
        >
          <i class="fa-brands fa-github mr-[5px] text-[20px]"></i>Login with
          Github
        </button>
      </div>
    </div>
  );
};

export default Login;
