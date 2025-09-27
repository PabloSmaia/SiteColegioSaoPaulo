import { React, useState } from "react";
import Marista from "../../assets/FotosSegmento/Marista.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const FundamentalInicial = () => {
  const [visivel, setVisivel] = useState(null);

  const togleVisivel = (id) => {
    setVisivel((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <section className="flex justify-center transition-all duration-500">
          <div className="sm:grid grid-cols-2 mt-14 gap-10 w-[70%] justify-end items-center">
            <div>
              <h1 className="flex text-[35px] sm:text-[40px] text-minhaCorb font-bold">
                Ensino Fundamental
              </h1>
              <h1 className="flex text-[30px] -mt-5 sm:text-[35px] text-minhaCorb font-bold">
                Anos Iniciais
              </h1>
              <h1>
                No Marista, brincadeira, jogo e imaginação são coisas sérias no
                desenvolvimento das crianças. Com eles, interagem entre si e a
                realidade, estabelecem vínculos afetivos e sociais, fazem
                descobertas e aprendem a lidar com as emoções, a socializar e a
                adquirir o conhecimento de maneira prazerosa e criativa. O
                currículo da Educação Infantil favorece as práticas pedagógicas
                voltadas para o conjunto de experiências que colocam a criança
                no centro do projeto educativo, como protagonistas no seu modo
                singular de fazer, agir e pensar. Em consonância com a Base
                Nacional Comum Curricular (BNCC), promove os campos de
                experiência para a aprendizagem.
              </h1>
            </div>
            <div>
              <img className="rounded-xl mt-5" src={Marista} alt="" />
            </div>
          </div>
          <div></div>
        </section>
        <section className="flex justify-centers ">
          <div className="grid ml-12 sm:ml-60 mt-12 gap-3 w-[70%]  *:text-[30px] font-Inika text-zinc-600">
            <Link
              onClick={() => togleVisivel("ativo")}
              className=" hover:text-minhaCorb transition transiton sm:w-[35%] -mt-5"
            >
              Lista de Material
            </Link>
            <div className="transition duration-300">
              {visivel === "ativo" && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="grid gap-2 *:text-[20px] transition p-3 -mt-4">
                    <a className="transition hover:text-minhaCorb sm:w-[28%]">
                      2º ANO
                    </a>
                    <a className="transition hover:text-minhaCorb sm:w-[28%]">
                      3º ANO
                    </a>
                    <a className="transition hover:text-minhaCorb sm:w-[28%]">
                      4º ANO
                    </a>
                    <a className="transition hover:text-minhaCorb sm:w-[28%]">
                      5º ANO
                    </a>
                  </span>
                </motion.div>
              )}
            </div>

            <p className="w-full bg-minhaCorb h-1 rounded-3xl -mt-5"></p>
            <Link
              onClick={() => togleVisivel("Prova")}
              className=" hover:text-minhaCorb transition transiton sm:w-[35%] -mt-5"
            >
              Calendário de Prova
            </Link>
            <div className="transition duration-300">
              {visivel === "Prova" && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="grid gap-2 *:text-[20px] transition p-3 -mt-4">
                    <a className="transition hover:text-minhaCorb sm:w-[28%]">
                      2º ANO
                    </a>
                    <a className="transition hover:text-minhaCorb sm:w-[28%]">
                      3º ANO
                    </a>
                    <a className="transition hover:text-minhaCorb sm:w-[28%]">
                      4º ANO
                    </a>
                    <a className="transition hover:text-minhaCorb sm:w-[28%]">
                      5º ANO
                    </a>
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center bg-minhaCorb/20  mt-10">
          <div className="sm:grid grid-cols-2 mb-10 mt-14 gap-10 w-[70%] justify-end items-center">
            <div className="flex flex-col">
              <div className="flex ">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  1
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Letramento
                  </h1>
                  <h1 className="text-minhaCorb ">
                    No contato com os outros, a criança desenvolve linguagens e
                    pensamento, expressando-os de várias formas, como a fala,
                    desenhos, reconhecimento de letras e palavras. Com a prática
                    pedagógica, terão vivências que promoverão a apropriação das
                    funções sociais da leitura e escrita
                  </h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  2
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Brincar
                  </h1>
                  <h1 className="text-minhaCorb ">
                    É pela brincadeira que a criança apreende seu universo
                    social e organiza a realidade. O brincar desenvolve a
                    identidade, a autonomia, a socialização, o contato com
                    regras sociais, possibilidades de escolhas, resolução de
                    situações-problemas e o desenvolvimento da imaginação
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex ">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  3
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Imagem e Arte
                  </h1>
                  <h1 className="text-minhaCorb ">
                    As possibilidades de experiências incorporam as diferentes
                    linguagens: o desenho e a pintura, a fotografia, o cinema, a
                    escultura, o vídeo, os processos de expressão e criação e os
                    instrumentos artísticos, de maneira a estimular a atividade
                    intelectual, a sensibilidade e a habilidade manual.
                  </h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  4
                </div>
                <div className=" ml-4 flex flex-col ">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Inglês
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Com o Programa Marista Bilíngue, os estudantes têm a
                    oportunidade de vivenciar a aquisição da língua inglesa, por
                    meio de experiências e projetos que utilizam o Inglês como
                    ferramenta para a construção do conhecimento. Assim,
                    articula o aprendizado do idioma com outras áreas.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};
