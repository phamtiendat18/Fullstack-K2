"use client";
import { getSession, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Login, { handleClickGithub, handleClickGoogle } from "../login/page";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import Cookies from "js-cookie";
const Profile = () => {
  const router = useRouter();
  const { data, status } = useSession();
  let accountType = useRef("");
  useLayoutEffect(() => {
    accountType.current = Cookies.get("accountType");
    if (data) {
      router.push("/profile");
    }
    if (!data) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="w-[80%] mx-auto mt-[120px]">
      <div className="flex gap-x-[10px] items-center border-b-[1px] border-b-gray-900 pb-[30px]">
        <img
          src={data?.user?.image}
          alt=""
          className="w-[40px] h-[40px] rounded-full"
        />
        <div>
          <h4>{data?.user?.name}</h4>
          <p className="text-[13px] font-thin">{data?.user?.email}</p>
        </div>
      </div>
      <div className="flex justify-between py-[30px] border-b-[1px] border-b-gray-900">
        <div className="flex">
          {accountType.current === "google" ? (
            <button className="flex rounded-s-[10px] bg-green-400 p-[10px] gap-x-[5px]">
              <img
                src={data?.user?.image}
                alt=""
                className="w-[20px] h-[20px] rounded-full"
              />
              <p className="italic text-[13px]">{data?.user?.name}</p>
            </button>
          ) : (
            <button
              className="flex rounded-s-[10px] bg-green-400 p-[10px] gap-x-[5px]"
              onClick={handleClickGoogle}
            >
              <i class="fa-brands fa-google text-[20px]"></i>
              <p className="italic text-[13px]">No register</p>
            </button>
          )}
          {accountType.current === "github" ? (
            <button className="flex rounded-e-[10px] bg-gray-300 p-[10px] gap-x-[5px]">
              <img
                src={data?.user?.image}
                alt=""
                className="w-[20px] h-[20px] rounded-full"
              />
              <p className="italic text-[13px]">{data?.user?.name}</p>
            </button>
          ) : (
            <button
              className="flex rounded-e-[10px] bg-gray-300 p-[10px] gap-x-[5px]"
              onClick={handleClickGithub}
            >
              <i class="fa-brands fa-github text-[20px]"></i>
              <p className="italic text-[13px]">No register</p>
            </button>
          )}
        </div>
        <div className="flex">
          <button className="flex rounded-s-[10px] border-[2px] border-orange-500 p-[10px] gap-x-[5px]">
            Edit profile
          </button>
          <button
            className="flex rounded-e-[10px] bg-red-500 p-[10px] gap-x-[5px]"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Logout
          </button>
        </div>
      </div>
      <div className=" py-[30px] border-b-[1px] border-b-gray-900">
        <h2 className="text-3xl font-bold ">Bài viết đã xem</h2>
        <p className="italic text-center">{`:( You haven't seen on a post yet`}</p>
      </div>
      <div className=" py-[30px]">
        <h2 className="text-3xl font-bold ">Bình luận đã viết</h2>
        <p className="italic text-center">{`:( You haven't commented on a post yet`}</p>
      </div>
    </div>
  );
};

export default Profile;
