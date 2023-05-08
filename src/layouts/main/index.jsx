import { Header } from "./Header/index.jsx";
import { Footer } from "./Footer/index.jsx";
import Link from "next/link.js";

export const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-300 font-quatro overflow-y-scroll overflow-x-hidden">
      <Header />
      <div className="grid grid-cols-3 h-full bg-gradient-to-br from-primary  from-20% to-[140%] to-secondary-light text-white">
        <div className="absolute w-screen h-screen bg-transparent  backdrop-blur-sm "></div>
        <div className="col-span-2  z-10 flex flex-col ml-24 h-screen justify-start pt-4">
          <div className="h-[20%]">
            <h1 className="text-[6rem] my-0 p-0 leading-[6rem] font-monoton uppercase">
              Abimael Neto
            </h1>
            <h3 className="text-[3rem] font-gruppo uppercase">
              Software Developer
            </h3>
          </div>
          <div className="h-[80%]">{children}</div>
        </div>

        <div className="flex relative flex-col h-full justify-end text-4xl font-gruppo">
          <div className="absolute w-full h-full bg-[url('/abima.png')] bg-cover bg-blend-luminosity bg-primary-light "></div>
          <div className=" z-10  mb-40 text-4xl font-gruppo ">
            <Link href="/skills">
              <p className="hover:text-secondary-light">Skills</p>
            </Link>
            <Link href="/formation">
              <p className="hover:text-secondary-light">Formation</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-secondary-light">About</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-secondary-light">Contact</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
