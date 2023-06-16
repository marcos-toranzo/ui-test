import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="#Menu"
          >
            Menu
          </a>
        </div>
        <span className="text-white">Sales Report</span>
        <div className="flex flex-row">
          <Image
            src="/profile-placeholder.jpg"
            className="rounded-full pr-2"
            alt="profile"
            width={30}
            height={30}
          />
          <span className="text-white">User Name</span>
        </div>
      </div>
    </nav>
  );
}
