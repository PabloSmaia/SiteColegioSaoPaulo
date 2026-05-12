import { React, useState } from "react";
import Marista from "../../assets/FotosSegmento/Marista.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const EducaçaoInfantil = () => {
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
                Educação <p className="ml-2">Infantil</p>
              </h1>
              <h1>
                No Colégio São Paulo, a infância é um tempo precioso — e levado
                muito a sério. Aqui, a brincadeira, o jogo e a imaginação fazem
                parte do processo de aprendizagem, permitindo que as crianças
                explorem o mundo ao seu redor de forma leve, significativa e
                cheia de descobertas. Por meio das interações e das vivências do
                dia a dia, nossos alunos desenvolvem vínculos afetivos, aprendem
                a conviver, expressam suas emoções e constroem conhecimentos de
                maneira natural e prazerosa. Nossa proposta pedagógica coloca a
                criança no centro do processo educativo, respeitando seu ritmo,
                sua individualidade e sua forma única de pensar, agir e sentir.
                Em sintonia com a Base Nacional Comum Curricular (BNCC),
                organizamos as experiências de aprendizagem a partir dos campos
                de experiência, promovendo o desenvolvimento integral —
                cognitivo, emocional, social e espiritual. Mais do que aprender,
                aqui a criança vive, experimenta e cresce em um ambiente
                acolhedor, seguro e cheio de significado.
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
                  transition={{ duration: 0.8 }}
                >
                  <span className="grid gap-2 *:text-[20px] transition p-3 -mt-4">
                    <a
                      href="../../../public/PdfsListaMaterial/EducaçãoInfantil/MATERNAL.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      Maternal
                    </a>
                    <a
                      href="../../../public/PdfsListaMaterial/EducaçãoInfantil/JARDIM.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      Jardim
                    </a>
                    <a
                      href="../../../public/PdfsListaMaterial/EducaçãoInfantil/PRE-1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      Pre I
                    </a>
                    <a
                      href="../../../public/PdfsListaMaterial/EducaçãoInfantil/PRE-2.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      Pre II
                    </a>
                    <a
                      href="../../../public/PdfsListaMaterial/EducaçãoInfantil/1-ANO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-minhaCorb sm:w-[28%]"
                    >
                      1º ano
                    </a>
                  </span>
                </motion.div>
              )}
            </div>

            <p className="w-full bg-minhaCorb h-1 rounded-3xl -mt-5"></p>
          </div>
        </section>
        <section className="flex justify-center items-center bg-minhaCorb/20  mt-10">
          <div className="sm:grid grid-cols-2 mb-10  gap-10 w-[70%] justify-end items-center">
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
                    Desde os primeiros anos, a criança é estimulada a
                    desenvolver a linguagem oral e escrita de forma natural e
                    significativa. Por meio de histórias, conversas, desenhos e
                    contato com diferentes textos, ela amplia seu repertório e
                    constrói as bases para a leitura e a escrita, respeitando
                    seu tempo e suas descobertas.
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
                    Brincar é essencial no processo de aprendizagem. Nas
                    atividades lúdicas, a criança explora o mundo, desenvolve a
                    criatividade, aprende a conviver com regras, faz escolhas e
                    constrói sua autonomia. É no brincar que ela organiza suas
                    experiências e dá sentido à realidade
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex mt-28 sm:mt-24 flex-col">
              <div className="flex mt- ">
                <div className="  flex items-center justify-center font-sans font-bold text-minhaCorP bg-minhaCorb h-10 w-10 p-5 rounded-full  text-[15px]">
                  3
                </div>
                <div className=" ml-4 flex flex-col">
                  <h1 className="text-minhaCorb font-bold text-[25px]">
                    Imagem e Arte
                  </h1>
                  <h1 className="text-minhaCorb ">
                    A expressão artística é um caminho importante para o
                    desenvolvimento infantil. Por meio de desenhos, pinturas,
                    música e outras linguagens, as crianças exploram a
                    criatividade, desenvolvem a sensibilidade e ampliam sua
                    forma de ver e interpretar o mundo ao seu redor.
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
                    O contato com a língua inglesa acontece de forma leve,
                    natural e integrada ao cotidiano da criança. Por meio do
                    <h1 className="font-bold">
                      Programa Bilíngue em parceria com a International School
                      (IS)
                    </h1>
                    , os alunos vivenciam o idioma em experiências
                    significativas, com músicas, jogos e atividades interativas.
                    Essa imersão favorece o desenvolvimento da compreensão e da
                    comunicação em inglês desde os primeiros anos, ampliando
                    horizontes e preparando os alunos para um mundo cada vez
                    mais conectado.
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
