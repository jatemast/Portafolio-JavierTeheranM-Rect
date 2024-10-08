import React from "react";
import developerHeader from "../assets/developer.webp";
import header from "../assets/header.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img alt="header" src={header} className="md:hidden w-screen" />
      <div className="md:h-20 min-[700px]:hidden bg-[#2B2B29]"></div>

      <div className="absolute md:text-[40px] xl:left-[-20px] xl:text-[40px] md:left-[0] md:w-screen p-6 md:static left-[1cm] top-[2cm] w-[619px] h-[250px] text-black text-[64px] font-normal">
        <p>Hola, soy Javier Teheran Magallanez</p>
        <Link
          className="cursor-pointer text-[20px] text-white bg-slate-500 mt-2 p-4"
          to="Projects"
          smooth="500"
        >
          Portfolio
        </Link>
      </div>

      <img
        alt="developer"
        src={developerHeader}
        className="absolute left-[50%] top-[400px] transform -translate-x-1/2 w-[300px] h-[300px] md:w-[200px] md:h-[200px] rounded-md rotate-90"
        style={{ position: "absolute", left: "50%", top: "400px", transform: "translateX(-50%) rotate(90deg)", borderRadius: "10px" }} // Added borderRadius property to make the corners less pointy
      />
    </div>
  );
};

export default Home;
