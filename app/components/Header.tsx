import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-wrap h-14 justify-between items-center w-full bg-blue-300 rounded-se-3xl">
      <div className="flex ml-5 justify-center">
        <p className=" text-gray-600">Hello,</p>
        <p className="font-bold">moradiweb</p>
      </div>
      <div className="flex  mr-5 justify-around items-center w-40 h-10 ">
        <div className="flex justify-center items-center  rounded-2xl w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21 12.79A9 9 0 1111.21 3
           7 7 0 0021 12.79z"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center rounded-2xl w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>
        <div className="flex bg-blue-800 rounded-2xl w-8 h-8">
          <Image
            src={"/moradi.jpg"}
            width={32}
            height={32}
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
    </div>
    
  );
}

export default Header