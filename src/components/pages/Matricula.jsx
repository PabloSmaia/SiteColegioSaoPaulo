import React from "react";

export const Matricula = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="font-bold text-minhaCorb sm:text-[40px] text-[25px] mr-[30%] sm:mr-[12%] mt-9 text-center ">
          Admissão
        </h1>
        <div className="bg-minhaCorb h-2 w-1/2 rounded-md">
          <br />
        </div>

        {/* Parte de Admissão */}
        <section className="flex justify-center mt-16  mb-32">
          <div className="flex w-[60%] p-5">
            <div>
              <h1 className="text-center text-minhaCorb font-Inika text-[40px] ">
                CANDITATO FUTURO
              </h1>
              <h2 className="text-gray-600 font-bold text-[20px]">
                O Colégio São Paulo Teresópolis, está sempre pronto para acolher
                novos egressos e seus familiares para somar com a nossa grande
                comunidade educativa. Para iniciar seu Processo de Admissão para
                2026, clique nos locais indicados abaixo e siga as instruções
                existentes. Em caso de dúvidas, setor de matrícula (21)
                99227-1699.
              </h2>
              <h1 className="text-center text-minhaCorb font-Inika text-[35px] mt-9">
                Admissão de Novos Alunos:
              </h1>
              <a
                className="font-bold text-gray-700 text-[25px] hover:text-minhaCorb transition-all"
                href="https://csptere.com.br/wp-content/uploads/2025/09/Edital-Geral-2026.pdf"
              >
                -- LEIA O EDITAL 2026
              </a>
              <h1 className="font-bold">
                Leia atentamente o edital, que contém todas as informações sobre
                critérios, prazos e documentação necessária.
              </h1>
              <a
                className="font-bold text-gray-700 text-[25px] hover:text-minhaCorb transition-all"
                href="https://forms.office.com/pages/responsepage.aspx?id=1OILfmB_cUWaMt3YiXm9B7ixl2EC4k1Gt8wgweMU0JlUOUtZRFY5MzM1M0U4N0xIWk5DSFk4QkRRSS4u&route=shorturl"
              >
                --FORMULÁRIO DE INSCRIÇÃO PARA NOVOS ALUNOS.
              </a>

              <h1 className="text-center text-minhaCorb font-Inika text-[35px] mt-12">
                Concurso de Bolsas
              </h1>
              <a
                className="font-bold text-gray-700 text-[25px] hover:text-minhaCorb transition-all"
                href="https://csptere.com.br/wp-content/uploads/2025/09/Edital-de-Bolsa-2026.pdf"
              >
                -- LEIA O EDITAL DO CONCURSO DE BOLSAS
              </a>
              <h1 className="font-bold">
                Leia atentamente o edital, que contém todas as informações sobre
                critérios, prazos e documentação necessária.
              </h1>
              <a
                className="font-bold text-gray-700 text-[25px] hover:text-minhaCorb transition-all"
                href="https://forms.office.com/pages/responsepage.aspx?id=1OILfmB_cUWaMt3YiXm9B7ixl2EC4k1Gt8wgweMU0JlURUVUUjJHRE5GUDQyVVVWUEVLMUZVVzY3Si4u&route=shorturl"
              >
                --FORMULÁRIO DE INSCRIÇÃO PARA O CONCURSO DE BOLSAS..
              </a>
              <h1 className="font-bold">
                Caso se enquadre nos critérios do edital, preencha o formulário.
              </h1>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};
