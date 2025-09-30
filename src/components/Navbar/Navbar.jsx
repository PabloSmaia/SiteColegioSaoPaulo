import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/LogoCSP.png";
import whats from "../../assets/whats.png";
import face from "../../assets/face.png";
import insta from "../../assets/insta.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [visivel, setVisivel] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const togleVisivel = (id) => {
    setVisivel((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <div className="flex space-x-3 justify-end bg-minhaCorP *:transition *:duration-1000 ">
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
      <section className="hidden bg-minhaCorb  sm:grid grid-cols-3 h-[auto] ">
        <motion.div className="flex justify-center items-center mt-3 mb-3 focus:outline-none focus:ring-0">
          <Link to="/Home" className="flex w-[35%] ">
            <img className="w-[full]  h-full" src={logo} />
          </Link>
        </motion.div>
        <motion.div className="flex md:flex md:gap-x-0 md:-ml-16 md:text-sm lg:text-[15px] lg:ml-2 items-center lg:gap-x-8 text-white">
          <Link
            onClick={() => setVisivel(false)}
            to="/Home"
            className=" text transition hover:text-minhaCorP"
          >
            INÍCIO
          </Link>
          <Link
            onClick={() => setVisivel(false)}
            to="/QuemSomos"
            className="md:ml-2  transition hover:text-minhaCorP"
          >
            QUEM SOMOS
          </Link>
          <Link
            className="md:ml-2  transition hover:text-minhaCorP"
            onClick={() => togleVisivel("Visivel")}
          >
            ACADÊMICO
          </Link>
          <div className="">
            {visivel === "Visivel" && (
              <motion.div
                className="absolute -ml-[140px] mt-7 rounded-md  bg-minhaCorb px-9 pb-7 mr "
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="grid gap-y-1 ">
                  <a
                    onClick={() => setVisivel(false)}
                    href=""
                    className="transition hover:text-minhaCorP"
                  >
                    OneDrive
                  </a>
                  <Link
                    onClick={() => setVisivel(false)}
                    to="/Redacao"
                    className="transition hover:text-minhaCorP"
                  >
                    Redação
                  </Link>
                  <Link
                    onClick={() => setVisivel(false)}
                    to="/Simulado"
                    className="transition hover:text-minhaCorP"
                  >
                    Simulado
                  </Link>
                </span>
              </motion.div>
            )}
          </div>
          <Link
            onClick={() => setVisivel(false)}
            to="/ServicoSocial"
            className="lg:-ml-8 md:md:ml-2  transition hover:text-minhaCorP"
          >
            SERVIÇO SOCIAL
          </Link>
        </motion.div>
        <div className="flex md:ml-44 lg:ml-0 items-center justify-center mr-56">
          <a className="flex" href="https://sp.w3online.inf.br/fix2.htm">
            <button
              href="https://sp.w3online.inf.br/fix2.htm"
              className=" transition hidden md:block md:ml ml-20 lg-flex bg-minhaCorP hover:bg-yellow-500 text-minhaCorb font-bold py-3 px-6 rounded md:py-2 md:px-4  "
            >
              SISTEMA ACADÊMICO
            </button>
          </a>
        </div>
      </section>

      <section className="sm:hidden h-auto   bg-minhaCorb grid grid-cols-2">
        <Link to="/" className="p-4 pb-5">
          <img className="flex" src={logo} alt="" />
        </Link>
        <div className="flex justify-end items-start w-3 ml-[80%] mt-4  ">
          <button
            onClick={toggleMenu}
            className="flex rounded-md p-2 bg-minhaCorP  sm:hidden relative z-40"
          >
            <AnimatePresence initial={false}>
              {!isOpen ? (
                <motion.svg
                  key="open"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  className="w-6 h-6 text-minhaCorb"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="close"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  className="w-6 h-6 text-minhaCorb"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </section>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="h-300px w-auto bg-minhaCorb "
          >
            <motion.div className="flex flex-col items-center justify-center gap-y-2 text-white">
              <Link
                onClick={() => setIsOpen(false)}
                to="/"
                className="transition hover:text-minhaCorP"
              >
                INÍCIO
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="/QuemSomos"
                className="transition hover:text-minhaCorP"
              >
                QUEM SOMO
              </Link>
              <Link
                className="transition hover:text-minhaCorP"
                onClick={() => togleVisivel("Visivel")}
              >
                ACADÊMICO
              </Link>
              <div className="">
                {visivel === "Visivel" && (
                  <motion.div
                    className=" bg-minhaCorb  "
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="flex flex-col ">
                      <a
                        onClick={() => setIsOpen(false)}
                        href=""
                        className=" flex justify-center transition hover:text-minhaCorP"
                      >
                        OneDrive
                      </a>
                      <Link
                        onClick={() => setIsOpen(false)}
                        to="/Redacao"
                        className="flex justify-center transition hover:text-minhaCorP"
                      >
                        Redação
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        to="/Simulado"
                        className="flex justify-center transition hover:text-minhaCorP"
                      >
                        Simulado
                      </Link>
                    </span>
                  </motion.div>
                )}
              </div>
              <Link
                onClick={() => setIsOpen(false)}
                to="/ServicoSocial"
                className=" -mt-3 transition hover:text-minhaCorP"
              >
                SERVIÇO SOCIAL
              </Link>
              <button className="mb-5 transition md:block  bg-minhaCorP hover:bg-yellow-500 text-minhaCorb font-bold py-3 px-6 rounded md:py-2 md:px-4  ">
                <a href="">SISTEMA ACADÊMICO</a>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
