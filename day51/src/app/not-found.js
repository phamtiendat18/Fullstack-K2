import Link from "next/link";
const NotFound = () => {
  return (
    <div className="bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')]  h-[100vh] bg-no-repeat bg-center relative">
      <h1 className="absolute top-[50px] text-3xl text-bold left-[50%] -translate-x-[50%]">
        Page Not Found 404
      </h1>
      <Link
        href={"/"}
        className="uppercase bg-green-500 hover:bg-green-700 p-[10px] flex items-center justify-center w-[100px] text-white absolute bottom-[100px] left-[50%] -translate-x-[50%]"
      >
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
