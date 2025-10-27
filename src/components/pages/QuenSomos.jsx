import { motion } from "framer-motion";

import CSP from "../../assets/QuemSomosHome/CSPANTIGO.png";

export const QuenSomos = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full"
      >
        <h1 className="font-bold text-minhaCorb sm:text-[40px] text-[25px] mr-[40px] sm:mr-[60px] mt-9 text-center ">
          Quem Somos
        </h1>

        <div className="bg-minhaCorb h-2 w-1/2 rounded-md">
          <br />
        </div>
        <container>
          <div className="sm:grid grid-cols-2 sm:*:mt-10 ">
            <div className=" mt-10 sm:ml-32 sm:w-[50%] ">
              <h1 className="text-center font-bold text-minhaCorb font-serif text-[30px] sm:text-[40px] sm:mb-5">
                HISTÓRIA
              </h1>
              <h1 className=" text-gray-700 p-3 ">
                O Colégio São Paulo é mantido pela Congregação das Irmãs
                Angélicas, dirigido por uma religiosa, indicada e nomeada para
                realizar tal função, juntamente com uma equipe de profissionais
                competentes e qualificados. Atualmente, a administração do
                Colégio também conta com a colaboração das Irmãs.
              </h1>
              <button className="border items-center  w-[50%] sm:w-full border-transparent hover:border-minhaCorP ml-20 sm:ml-1 mt-3 py-2 p-3 rounded-lg text-white  bg-minhaCorb transition-transform duration-300 transform hover:scale-110 ">
                Clique aqui e saiba mais sobre a nossa história
              </button>
            </div>
            <div className="sm:mr-32 mt-9">
              <img src={CSP} alt="" />
            </div>
          </div>
          <div className="bg-minhaCorb mt-4 h-2 w-[60%] rounded-md"></div>
          <div
            className="bg-minhaCorb mt-4
           h-2 w-[45%] rounded-md"
          ></div>
          <div className="sm:grid sm:grid-cols-3 sm:px-80 ml-9 mt-7">
            <div className=" w-72 ">
              <h1 className="font-bold text-center text-[30px] text-minhaCorb text">
                MISSÃO
              </h1>
              <h1 className="text-center text-wrap text-gray-800">
                Educar e Evangelizar crianças e jovens, realizando-se como
                comunidade formativa evangelizadora, sob a luz da fé cristã,
                formando cidadãos comprometidos com a vivência dos valores
                evangélicos na sociedade.{" "}
              </h1>
            </div>
            <div className="w-72">
              <h1 className="w-72 text-center font-bold text-[30px] text-minhaCorb text">
                VISÃO
              </h1>
              <h1 className="text-center text-wrap text-gray-800">
                Ser promotor de uma educação de qualidade, calcada na solidez da
                formação integral do ser humano, contribuindo para o
                desenvolvimento da sociedade.
              </h1>
            </div>
            <div className="w-72">
              <h1 className="font-bold w-72 text-center text-[30px] text-minhaCorb text">
                VALORES
              </h1>
              <h1 className="text-center">
                Educação | Religião Acolhida Comprometimento Social Família |
                Ética Qualidade | Disciplina
              </h1>
            </div>
          </div>
        </container>
      </motion.div>
    </>
  );
};
