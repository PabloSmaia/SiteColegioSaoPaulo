import { React, useState } from "react";
import FUN1 from "../../assets/FotosSegmento/FUN1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const FundamentalFinais = () => {
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
                Anos Finais
              </h1>
              <h1>
                Nos Anos Finais do Ensino Fundamental, o Colégio São Paulo
                amplia o desenvolvimento acadêmico e fortalece a formação
                crítica dos alunos, preparando-os para novos desafios e para a
                continuidade de sua trajetória escolar. Nesta etapa, o estudante
                é incentivado a aprofundar conhecimentos, desenvolver autonomia
                nos estudos e construir um pensamento mais analítico e
                reflexivo. As diferentes áreas do saber são trabalhadas de forma
                integrada, promovendo a capacidade de argumentação,
                interpretação e resolução de problemas. Ao mesmo tempo,
                valorizamos o acompanhamento próximo e o cuidado com o
                desenvolvimento socioemocional e espiritual, fundamentais para
                essa fase de transição e amadurecimento. Em sintonia com a Base
                Nacional Comum Curricular (BNCC), buscamos formar alunos
                protagonistas, responsáveis e preparados não apenas para o
                Ensino Médio, mas para a vida em sociedade.
              </h1>
            </div>
            <div>
              <img className="rounded-xl mt-5" src={FUN1} alt="" />
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
                    <a
                      href="/6ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      6º ANO
                    </a>
                    <a
                      href="/7ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      7º ANO
                    </a>
                    <a
                      href="/8ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      8º ANO
                    </a>
                    <a
                      href="/9ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      9º ANO
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
                    <a
                      href="/1ETAPA6ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      6º ANO
                    </a>
                    <a
                      href="/1ETAPA7ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      7º ANO
                    </a>
                    <a
                      href="/1ETAPA8ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      8º ANO
                    </a>
                    <a
                      href="/1ETAPA9ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      9º ANO
                    </a>
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center bg-minhaCorb/20  mt-10">
          <div className="sm:grid grid-cols-2 mb-32 w-[70%] ">
            <div className="flex flex-col mt-10">
              <div className="flex ">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  1
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Aprofundamento Acadêmico
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Nos Anos Finais, os alunos ampliam seus conhecimentos nas
                    diferentes áreas, desenvolvendo pensamento crítico,
                    capacidade de análise e autonomia nos estudos. O trabalho
                    pedagógico prepara o estudante para desafios mais complexos
                    e para a continuidade no Ensino Médio.
                  </h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  2
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Simulados
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Os simulados são uma ferramenta de avaliação que permite aos
                    alunos praticar e consolidar seus conhecimentos,
                    desenvolvendo habilidades de resolução de problemas e
                    preparando-se para desafios acadêmicos mais complexos.
                  </h1>
                </div>
              </div>
              <div className="flex mt-24">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  3
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Inteligência Socioemocional (LIV)
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Com o programa LIV – Laboratório Inteligência de Vida, os
                    alunos desenvolvem competências essenciais como
                    autoconhecimento, empatia, responsabilidade e tomada de
                    decisões. O LIV contribui para o equilíbrio emocional e para
                    a construção de relações saudáveis dentro e fora da escola.
                  </h1>
                </div>
              </div>
              <div className="flex mt-10 ">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  4
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Inglês
                  </h1>
                  <h1 className="text-minhaCorb ">
                    O ensino da língua inglesa acontece de forma contínua e
                    estruturada, desenvolvendo as habilidades de leitura,
                    escrita, escuta e fala. O aluno amplia seu repertório
                    linguístico e se prepara para contextos acadêmicos e sociais
                    cada vez mais conectados ao mundo globalizado.
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col  ">
              <div className="flex mt-10">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  5
                </div>
                <div className=" ml-4 flex flex-col ">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Ensino Religioso
                  </h1>
                  <h1 className="text-minhaCorb ">
                    O Ensino Religioso promove a reflexão, o diálogo e a
                    vivência de valores cristãos. Nesta etapa, os alunos são
                    convidados a aprofundar sua consciência ética, espiritual e
                    social, fortalecendo atitudes de respeito, solidariedade e
                    responsabilidade.
                  </h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  6
                </div>
                <div className=" ml-4 flex flex-col ">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Projeto Sorriso Solidário
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Por meio do projeto de voluntariado Sorriso Solidário, os
                    alunos vivenciam na prática valores como empatia,
                    solidariedade e compromisso com o próximo. As ações promovem
                    o encontro com diferentes realidades, despertando o senso de
                    responsabilidade social e formando jovens mais conscientes e
                    sensíveis às necessidades do outro.
                  </h1>
                </div>
              </div>
              <div className="flex mt-12">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  7
                </div>
                <div className=" ml-4 flex flex-col ">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Formação Integral
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Aliamos excelência acadêmica à formação humana,
                    socioemocional e espiritual. Nosso objetivo é formar jovens
                    protagonistas, conscientes de seu papel no mundo e
                    preparados para os desafios da vida.
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
