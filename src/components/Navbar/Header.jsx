import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/LogoCSP.png";
import whats from "../../assets/whats.png";
import face from "../../assets/face.png";
import insta from "../../assets/insta.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className="flex space-x-3s justify-end bg-minhaCorP *:transition *:duration-1000 ">
        <a href="">
          <img className="w-8 h-8 ml-4" src={whats} alt="" />
        </a>
        <a href="">
          <img className="w-8 h-8 ml-2" src={face} alt="" />
        </a>
        <a href="">
          <img className="w-8 h-8 ml-2 me-6" src={insta} alt="" />
        </a>
      </div>
      <div className=" bg-minhaCorb text-white p-2 w-full">
        <nav>
          <div className="max-w-7xl mx-auto">
            <div className="flex mx-auto justify-between w-5/3 ">
              <Link to="/Home">
                <img className="w-44 h-38" src={logo} alt="" />
              </Link>
              {/* Primary menu and logo */}
              <div className="flex items-center gap-5                                                                                                                                                                                                                                                                      N my-5">
                <div className="hidden lg:flex gap-5 ">
                  <Link className="hover:text-minhaCorP" to="/Home">
                    INÍCIO
                  </Link>
                  <Link className="hover:text-minhaCorP" to="/QuemSomos">
                    QUEM SOMOS
                  </Link>
                  <div
                    onClick={toggleDropdown}
                    className="hover:text-minhaCorP items-center cursor-pointer transition duration-500"
                  >
                    {" "}
                    ACADÊMICO
                  </div>
                  <Link className="hover:text-minhaCorP" to="/ServicoSocial">
                    SERVIÇO SOCIAL
                  </Link>
                  {dropdown && (
                    <>
                      <motion.div
                        nitial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 1.9 }}
                        ref={dropdownRef}
                        className={`absolute mt-10 ml-40 mr-24 z-10 h-50 W w-40  shadow rounded-md bg-minhaCorb duration-1000 ${
                          dropdown
                            ? "opacity-100 scale-100 translate-y-0 transition duration-700"
                            : "opacity-0 scale-15 -translate-y-5 transition duration-700"
                        }`}
                      >
                        <div className=" items-center z-50 py-1 flex flex-col gap-4 duration-700">
                          <Link
                            className="  hover:text-minhaCorP"
                            to="https://onedrive.live.com/login"
                          >
                            Onedrive
                          </Link>
                          <Link
                            className="  hover:text-minhaCorP"
                            to="/Redacao"
                          >
                            Redação
                          </Link>
                          <Link
                            className="  hover:text-minhaCorP"
                            to="/Simulado"
                          >
                            Simulado
                          </Link>
                          <Link
                            className="  hover:text-minhaCorP"
                            to="/CalendarioDeProva"
                          >
                            Calendario De Provas
                          </Link>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>

                <a href="https://sp.w3online.inf.br/fix2.htm">
                  <button
                    href="https://sp.w3online.inf.br/fix2.htm"
                    className=" transition hidden md:block ml-20 lg-flex bg-minhaCorP hover:bg-yellow-500 text-minhaCorb font-bold py-3 px-6 rounded md:py-2 md:px-4  "
                  >
                    SISTEMA ACADÊMICO
                  </button>
                </a>
              </div>

              {/* secondary */}
              <div className="flex gap-6 items-center justify-end">
                <div className="hidden xs:flex items-center gap-1">
                  <div className="hidden lg:flex items-center gap-2 bg-minhaCorP"></div>
                </div>
                {/* Mobile navigation toggle */}
                <div className="lg:hidden flex items-center p-7">
                  <button onClick={() => setToggleMenu(!toggleMenu)}>
                    <Bars3Icon className="h-9 text-minhaCorP " />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* mobile navigation */}
          <div
            className={`absolute z-40 w-full  bg-minhaCorb overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-full"
            }`}
          >
            <div className="px-8 ml-8 mt-8">
              <div className="flex flex-col gap-8 font-bold tracking-wider">
                <Link>QUEM SOMOS</Link>
                <Link to="/Home">INÍCIO</Link>
                <button className="mr-72" onClick={toggleDropdown}>
                  ACADÊMICO
                </button>
                {dropdown && (
                  <>
                    <div
                      className={`shadow rounded-md w-[50%]  ${
                        dropdown
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-15 -translate-y-5"
                      }`}
                    >
                      <div className="spy-1 flex flex-col gap-4">
                        <a
                          className="  hover:text-minhaCorP"
                          href="https://onedrive.live.com/login"
                        >
                          Onedrive
                        </a>
                        <Link className="  hover:text-minhaCorP" to="/Redacao">
                          Redação
                        </Link>
                        <Link className="  hover:text-minhaCorP" to="/Simulado">
                          Simulado
                        </Link>
                        <a className="  hover:text-minhaCorP" href="">
                          Calendario de provas
                        </a>
                      </div>
                    </div>
                  </>
                )}
                <a href="#">SERVIÇO SOCIAL</a>
                <button className=" ml-1 rounded-md lg-flex bg-minhaCorP hover:bg-yellow-500 text-minhaCorb w-36">
                  SISTEMA ACADÊMICO
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
