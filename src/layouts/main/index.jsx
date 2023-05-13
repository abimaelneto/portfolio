import { Header } from "./Header/index.jsx";
import { Footer } from "./Footer/index.jsx";
import Link from "next/link.js";
import { NavLink } from "./NavLink/index.jsx";

const links = [
  { link: "/experience", label: "Experience" },
  { link: "/skills", label: "Skills" },
  { link: "/formation", label: "Formation" },
  { link: "/about", label: "About" },
  { link: "/contact", label: "Contact" },
];

export const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-300 font-quatro overflow-y-scroll overflow-x-hidden">
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
          <div className="h-[80%] overflow-hidden">{children}</div>
        </div>

        <div className="flex relative flex-col h-full justify-end text-4xl font-gruppo">
          <div className="absolute w-full h-full bg-[url('/abima.png')] bg-cover  "></div>
          <div className=" z-10  pb-40 text-4xl font-gruppo backdrop-blur-sm  h-screen flex flex-col justify-end pl-8">
            {links.map((l) => (
              <NavLink {...l} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
