import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const LinksUtilitario = () => {
  const [visivel, setVisivel] = useState(null);

  const togleVisivel = (id) => {
    setVisivel((prevId) => (prevId === id ? null : id));
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <section className="flex justify-centers">
        <div className="grid ml-4 sm:ml-20 mt-12 gap-3 w-[70%]  *:text-[30px] font-Inika text-zinc-600">
          <Link
            onClick={() => togleVisivel("provas")}
            className="hover:text-minhaCorb transition sm:w-[38%]"
          >
            Caledário de Provas
          </Link>
          <div>
            {visivel === "provas" && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="grid gap-2 *:text-[20px] transition p-3 -mt-4">
                  <Link className="transition hover:text-minhaCorb sm:w-[28%]">
                    Ensino Fundameltal I
                  </Link>
                  <Link className="transition hover:text-minhaCorb sm:w-[28%]">
                    Ensino Fundamental II
                  </Link>
                  <Link className="transition hover:text-minhaCorb sm:w-[28%]">
                    Ensino Médio
                  </Link>
                </span>
              </motion.div>
            )}
          </div>
          <p className="w-full bg-minhaCorb rounded-3xl h-1 -mt-5"></p>
          <Link
            onClick={() => togleVisivel("ativo")}
            className=" hover:text-minhaCorb transition transiton sm:w-[28%] -mt-5"
          >
            Lista de Material
          </Link>
          <div className="transition duration-300">
            {visivel === "ativo" && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="grid gap-2 *:text-[20px] transition p-3 -mt-4">
                  <Link className="transition hover:text-minhaCorb sm:w-[28%]">
                    Educação Infantil
                  </Link>
                  <Link className="transition hover:text-minhaCorb sm:w-[28%]">
                    Ensino Fundameltal I
                  </Link>
                  <Link className="transition hover:text-minhaCorb sm:w-[28%]">
                    Ensino Fundamental II
                  </Link>
                  <Link className="transition hover:text-minhaCorb sm:w-[28%]">
                    Ensino Médio
                  </Link>
                </span>
              </motion.div>
            )}
          </div>

          <p className="w-full bg-minhaCorb h-1 rounded-3xl -mt-5"></p>
          <Link
            className="transition hover:text-minhaCorb sm:w-[38%] -mt-5"
            to="/Matricula"
          >
            Matricula 2026
          </Link>
          <p className="w-full bg-minhaCorb h-1 rounded-3xl -mt-2"></p>
          <a
            className="transition hover:text-minhaCorb sm:w-[38%] -mt-2"
            href=""
          >
            Edital de novos alunos
          </a>
        </div>
      </section>
    </motion.div>
  );
};
