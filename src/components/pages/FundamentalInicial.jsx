import { React, useState } from "react";
import FUN1 from "../../assets/FotosSegmento/FUN1.png";
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
                Nos Anos Iniciais do Ensino Fundamental, o Colégio São Paulo
                consolida as bases do conhecimento e amplia as descobertas
                iniciadas na Educação Infantil. Nesta etapa, o aluno é
                incentivado a desenvolver habilidades essenciais como leitura,
                escrita, raciocínio lógico e autonomia, sempre em um ambiente
                acolhedor e estimulante. O processo de aprendizagem acontece de
                forma significativa, conectando conteúdos à realidade do
                estudante e promovendo o pensamento crítico desde cedo. Com uma
                proposta pedagógica que valoriza o desenvolvimento integral,
                unimos formação acadêmica, socioemocional e espiritual, ajudando
                cada criança a crescer com segurança, responsabilidade e
                confiança em seu próprio potencial. Em sintonia com a Base
                Nacional Comum Curricular (BNCC), trabalhamos competências e
                habilidades que preparam o aluno não apenas para os próximos
                desafios escolares, mas para a vida.
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
                      href="/2ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      2º ANO
                    </a>
                    <a
                      href="/3ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      3º ANO
                    </a>
                    <a
                      href="/4ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      4º ANO
                    </a>
                    <a
                      href="/5ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
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
                    <a
                      href="/1ETAPA2ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      2º ANO
                    </a>
                    <a
                      href="/1ETAPA3ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      3º ANO
                    </a>
                    <a
                      href="/1ETAPA4ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      4º ANO
                    </a>
                    <a
                      href="/1ETAPA5ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      5º ANO
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
                    Letramento e Raciocínio Lógico
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Nos Anos Iniciais, fortalecemos as habilidades de leitura,
                    escrita e matemática, essenciais para o desenvolvimento
                    acadêmico. O aluno é estimulado a compreender, interpretar e
                    resolver situações-problema, construindo uma base sólida
                    para sua trajetória escolar
                  </h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  2
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Robótica Educacional
                  </h1>
                  <h1 className="text-minhaCorb ">
                    A robótica é uma ferramenta de aprendizagem que desenvolve o
                    pensamento lógico, a criatividade e a resolução de
                    problemas. Por meio de atividades práticas, os alunos
                    aprendem a trabalhar em equipe, planejar soluções e explorar
                    conceitos tecnológicos de forma dinâmica e significativa.
                  </h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  3
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Inteligência Socioemocional (LIV)
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Com o programa LIV – Laboratório Inteligência de Vida, os
                    alunos desenvolvem habilidades socioemocionais fundamentais,
                    como empatia, autoconhecimento e responsabilidade. A partir
                    dos 5 anos, o LIV contribui para a formação integral,
                    preparando os estudantes para lidar com desafios dentro e
                    fora da escola.
                  </h1>
                </div>
              </div>
              <div className="flex mt-10 ">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  4
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Inglês com Programa Bilíngue
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Por meio do Programa Bilíngue em parceria com a
                    International School (IS), os alunos vivenciam o inglês de
                    forma integrada ao currículo. As aulas são dinâmicas e
                    contextualizadas, favorecendo o desenvolvimento da
                    comunicação no idioma desde cedo.
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
                    Música
                  </h1>
                  <h1 className="text-minhaCorb ">
                    A música contribui para o desenvolvimento da sensibilidade,
                    da expressão e da criatividade. Por meio de atividades
                    rítmicas, canto e vivências musicais, os alunos ampliam sua
                    percepção artística e fortalecem habilidades cognitivas e
                    socioemocionais.
                  </h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  6
                </div>
                <div className=" ml-4 flex flex-col ">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Ensino Religioso
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Em sintonia com os valores do Colégio São Paulo, o Ensino
                    Religioso promove a formação espiritual e humana dos alunos.
                    São trabalhados valores como respeito, solidariedade,
                    empatia e responsabilidade, contribuindo para a construção
                    de uma consciência ética e cristã.
                  </h1>
                </div>
              </div>
              <div className="flex mt-16">
                <div className=" flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  7
                </div>
                <div className=" ml-4 flex flex-col ">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Ensino Religioso
                  </h1>
                  <h1 className="text-minhaCorb ">
                    Nosso ensino vai além dos conteúdos acadêmicos. Valorizamos
                    o desenvolvimento completo do aluno — intelectual,
                    emocional, social e espiritual — formando cidadãos
                    preparados para a vida.
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
