import Image from "next/image";

function Sidebar() {
  return (
    <div className="flex flex-col w-62.5 h-lvh bg-blue-100">
      <div className="flex ml-4 gap-3 p-4">
        <Image src={"/favicon.ico"} width={20} height={20} alt={""} />
        <p className="text-black">Admin Dashboard</p>
      </div>
      <div className="flex w-full bg-gray-400 h-px"></div>
      <div className=" flex-col mt-8 ml-8 ">
        <div className="flex gap-4 mr-5  p-3 rounded-sm">
          <Image src={"/favicon.ico"} width={20} height={20} alt={""} />
          <p className="text-gray-700 mr-4 ">Dashboard</p>
        </div>
        <div className="flex gap-4 mt-2 mr-5 p-3 rounded-sm ">
          <Image src={"/favicon.ico"} width={20} height={20} alt={""} />
          <p className="text-gray-700 mr-4 ">Analytics</p>
        </div>
        <div className="flex gap-4 mt-2 mr-5  p-3 rounded-sm">
          <Image src={"/favicon.ico"} width={20} height={20} alt={""} />
          <p className="text-gray-700 mr-4 ">Tasks</p>
        </div>
        <div className="flex gap-4 mt-2 mr-5  p-3 rounded-sm">
          <Image src={"/favicon.ico"} width={20} height={20} alt={""} />
          <p className="text-gray-700 mr-4 ">Setting</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
