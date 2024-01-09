"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { user } = useUser();
  const pathName = usePathname();
  return (
    <div className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link href={"/"} className="font-bold text-xl text-indigo-600">
              MindMap Flow
            </Link>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <Link
              href={"/"}
              scroll={true}
              className={
                pathName === "/"
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              }
            >
              Trang chủ
            </Link>
            <Link
              href={"/about"}
              className={
                pathName === "/about"
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              }
            >
              Giới thiệu
            </Link>
            <Link
              href={"/features"}
              className={
                pathName === "/features"
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              }
            >
              Tính năng
            </Link>
            <Link
              href={"/pricing"}
              className={
                pathName === "/pricing"
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              }
            >
              Bảng giá
            </Link>
            <Link
              href={"/contact"}
              className={
                pathName === "/contact"
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                  : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              }
            >
              Liên hệ
            </Link>
            {user ? (
              <>
                <Link
                  href={"#"}
                  className={
                    pathName === ""
                      ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                      : "p-2 lg:px-4 md:mx-2 text-indigo-600 rounded hover:bg-indigo-100  transition-colors duration-300"
                  }
                >
                  Hi, {user.name}
                </Link>
                <Link
                  href={"/mindmap"}
                  className={
                    pathName === "/mindmap"
                      ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                      : "p-2 lg:px-4 md:mx-2 text-indigo-600 rounded hover:bg-indigo-100  transition-colors duration-300"
                  }
                >
                  Mindmap
                </Link>
                <Link
                  href={"/api/auth/logout"}
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                >
                  Đăng xuất
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/api/auth/login"}
                  className={
                    pathName === "/login"
                      ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                      : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  }
                >
                  Đăng nhập
                </Link>
                <Link
                  href={"/api/auth/login"}
                  className={
                    pathName === "/signup"
                      ? "p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-indigo-600 rounded transition-colors duration-300 mt-1 md:mt-0 md:ml-1 bg-indigo-600"
                      : "p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                  }
                >
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
