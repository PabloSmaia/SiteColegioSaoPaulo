import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Simulado = () => {
  const [visivel, setVisivel] = useState(null);

  const togleVisivel = (id) => {
    setVisivel((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <h1 className="font-bold text-minhaCorb sm:text-[40px] text-[25px] mr-[30%] sm:mr-[12%] mt-9 text-center ">
        Simulado
      </h1>
      <div className="bg-minhaCorb h-2 w-1/2 rounded-md">
        <br />
      </div>
      {/*section que segura tudo  */}
      <section className="mb-16">
        {/*section primeiro dia  */}
        <section className="felx justify-center items-center">
          <div className="ml-[30%] w-[50%]">
            <div>
              <h1 className=" mt-10 text-minhaCorb font-Inika sm:text-[40px] text-[30px]">
                1º SIMULADO
              </h1>
              <div className="grid gap-3 w-[70%]  *:text-[30px] font-sans font-bold text-zinc-600">
                <Link
                  onClick={() => togleVisivel("provas")}
                  className="hover:text-minhaCorb transition sm:w-[38%]"
                >
                  1º dia
                </Link>
                <div>
                  {visivel === "provas" && (
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="grid sm:flex *:cursor-pointer *:text-[20px] transition p-3 -mt-4">
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          6º ano
                        </a>
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          7º ano
                        </a>
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          8º ano
                        </a>
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          9º ano
                        </a>
                      </span>
                    </motion.div>
                  )}
                  <p className="w-full bg-minhaCorb rounded-3xl h-1 "></p>
                  <div className="grid  gap-3 w-[70%]  *:text-[30px] font-sans font-bold text-zinc-600">
                    <Link
                      onClick={() => togleVisivel("2dia")}
                      className="hover:text-minhaCorb transition sm:w-[38%]"
                    >
                      2º dia
                    </Link>
                    <div>
                      {visivel === "2dia" && (
                        <motion.div
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -50, opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="grid sm:flex *:cursor-pointer *:text-[20px] transition p-3 -mt-4">
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              6º ano
                            </a>
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              7º ano
                            </a>
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              8º ano
                            </a>
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              9º ano
                            </a>
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*section segundo dia  */}
        <section className="felx justify-center items-center">
          <div className="ml-[30%] w-[50%]">
            <div>
              <h1 className=" mt-10 text-minhaCorb font-Inika sm:text-[40px] text-[30px]">
                2º SIMULADO
              </h1>
              <div className="grid gap-3 w-[70%]  *:text-[30px] font-sans font-bold text-zinc-600">
                <Link
                  onClick={() => togleVisivel("provas2")}
                  className="hover:text-minhaCorb transition sm:w-[38%]"
                >
                  1º dia
                </Link>
                <div>
                  {visivel === "provas2" && (
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="grid sm:flex *:cursor-pointer *:text-[20px] transition p-3 -mt-4">
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          6º ano
                        </a>
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          7º ano
                        </a>
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          8º ano
                        </a>
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          9º ano
                        </a>
                      </span>
                    </motion.div>
                  )}
                  <p className="w-full bg-minhaCorb rounded-3xl h-1 "></p>
                  <div className="grid  gap-3 w-[70%]  *:text-[30px] font-sans font-bold text-zinc-600">
                    <Link
                      onClick={() => togleVisivel("2dia2")}
                      className="hover:text-minhaCorb transition sm:w-[38%]"
                    >
                      2º dia
                    </Link>
                    <div>
                      {visivel === "2dia2" && (
                        <motion.div
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -50, opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="grid sm:flex *:cursor-pointer *:text-[20px] transition p-3 -mt-4">
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              6º ano
                            </a>
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              7º ano
                            </a>
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              8º ano
                            </a>
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              9º ano
                            </a>
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*section terceiro dia  */}
        <section className="felx justify-center items-center">
          <div className="ml-[30%] w-[50%]">
            <div>
              <h1 className=" mt-10 text-minhaCorb font-Inika sm:text-[40px] text-[30px]">
                3º SIMULADO
              </h1>
              <div className="grid gap-3 w-[70%]  *:text-[30px] font-sans font-bold text-zinc-600">
                <Link
                  onClick={() => togleVisivel("provas3")}
                  className="hover:text-minhaCorb transition sm:w-[38%]"
                >
                  1º dia
                </Link>
                <div>
                  {visivel === "provas3" && (
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="grid sm:flex *:cursor-pointer *:text-[20px] transition p-3 -mt-4">
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          6º ano
                        </a>
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          7º ano
                        </a>
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          8º ano
                        </a>
                        <a className="transition hover:text-minhaCorb sm:w-[28%]">
                          9º ano
                        </a>
                      </span>
                    </motion.div>
                  )}
                  <p className="w-full bg-minhaCorb rounded-3xl h-1 "></p>
                  <div className="grid  gap-3 w-[70%]  *:text-[30px] font-sans font-bold text-zinc-600">
                    <Link
                      onClick={() => togleVisivel("2dia3")}
                      className="hover:text-minhaCorb transition sm:w-[38%]"
                    >
                      2º dia
                    </Link>
                    <div>
                      {visivel === "2dia3" && (
                        <motion.div
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -50, opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="grid sm:flex *:cursor-pointer *:text-[20px] transition p-3 -mt-4">
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              6º ano
                            </a>
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              7º ano
                            </a>
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              8º ano
                            </a>
                            <a className="transition hover:text-minhaCorb sm:w-[28%]">
                              9º ano
                            </a>
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
