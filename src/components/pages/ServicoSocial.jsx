import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ServicoSocial = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Exibe o popup ao montar o componente
    setShowPopup(true);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full"
      >
        <h1 className="font-bold text-minhaCorb sm:text-[40px] text-[25px] mr-[30%] sm:mr-[17%] mt-9 text-center ">
          Serviço Social
        </h1>

        <div className="bg-minhaCorb h-2 w-1/2 rounded-md">
          <br />
        </div>

        <section className="px-16  sm:mt-12 sm:mb-60 ">
          <div className=" flex flex-col sm:grid sm:grid-cols-2 sm:gap-20  ">
            <div className="sm:h-auto break-words rounded-md sm:p-12  *:mt-7">
              <h1 className="font-bold  sm:text-[30px] text-minhaCorb">
                RENOVAÇÃO DE BOLSAS DE ESTUDOS.
              </h1>
              <h2>
                Já está em andamento o processo de renovação das Bolsas de
                Estudo para o ano letivo de 2026, destinado aos alunos
                contemplados com o benefício durante o ano de 2025
              </h2>
              <h2>
                O Serviço Social enviará, por e-mail, a Ficha Socioeconômica e a
                Lista de Documentos necessários para a renovação da Bolsa de
                Estudo. Aconselhamos aos interessados em participar do processo
                de renovação de Bolsa de Estudo a leitura do Edital, disponível
                na recepção e no Site da escola.
              </h2>
              <h2 className="font-bold">
                Período para entrega de documentação será de 08/09/2025 a
                30/09/2025, no horário das 9h30 as 11h30.
              </h2>
              <h2>
                Informamos que não haverá ampliação do número de concessões de
                gratuidade para o ano letivo de 2026
              </h2>
              <h2>
                Em caso de dúvidas, nos colocamos à disposição pelo e-mail:
                servicosocial@csptere.com.br
              </h2>
            </div>
            <div className="  rounded-md sm:p-12 sm:justify-center sm:items-center  ">
              <h1 className="font-bold sm:text-[25px] text-minhaCorb text-center mt-6">
                PROCESSO SELETIVO DE BOLSAS DE ESTUDOS
              </h1>
              <h1 className="font-bold sm:text-[30px] text-minhaCorb text-center">
                2026
              </h1>
              <h2 className="sm:text-[20px] font-bold mt-5">
                Informamos que haverá concessão de bolsas de estudos, através do
                processo de seleção de alunos da Rede Pública do Município de
                Teresópolis, para a 1ª Série do Ensino Médio.
              </h2>
              <button className=" text-white hover:scale-110 transition hover:bg-minhaCorb bg-minhaCorb p-2 rounded-md mt-11 ml-[30%] sm:ml-[40%]">
                <Link to="/Matricula">CLIQUE AQUI</Link>
              </button>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};
