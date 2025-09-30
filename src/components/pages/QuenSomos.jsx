import React from "react";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import CSP from "../../assets/QuemSomosHome/CSPANTIGO.png";
import { Container } from "postcss";

export const QuenSomos = () => {
  return (
    <>
      <motion.div className="div">
        <h1 className="font-bold text-minhaCorb sm:text-[40px] text-[25px] mr-[30%] sm:mr-[17%] mt-9 text-center ">
          Quem Somos
        </h1>

        <div className="bg-minhaCorb h-2 w-1/2 rounded-md">
          <br />
        </div>
        <container>
          <div className="w- grid grid-cols-2 mt-10 ">
            <div className=" ml-32 w-[50%] ">
              <h1 className="font-bold text-minhaCorb font-serif text-[40px] mb-5">
                HISTÓRIA
              </h1>
              <h1 className=" text-gray-700 ">
                O Colégio São Paulo é mantido pela Congregação das Irmãs
                Angélicas, dirigido por uma religiosa, indicada e nomeada para
                realizar tal função, juntamente com uma equipe de profissionais
                competentes e qualificados. Atualmente, a administração do
                Colégio também conta com a colaboração das Irmãs.
              </h1>
              <button>Clique aqui e saiba mais sobre a nossa história</button>
            </div>
            <div className="mr-32">
              <img src={CSP} alt="" />
            </div>
          </div>
        </container>
      </motion.div>
    </>
  );
};
