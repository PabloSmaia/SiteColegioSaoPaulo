import CSP from "../../assets/QuemSomosHome/CSPANTIGO.png";
import segundopredio from "../../assets/QuemSomosHome/prediocsp.jpg";
import Madreflavia from "../../assets/QuemSomosHome/MadreFlaviaMonat.png";
import { motion } from "framer-motion";
import React from "react";

export const HistoriaAngelicas = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full"
      >
        <section className="bg-minhaCorb/5">
          <h1 className="font-bold text-[48px] text-minhaCorb text-center mt-8">
            História das Angelicas
          </h1>
          <div className="sm:grid sm:grid-cols-2 w-[80%] mx-auto gap-x-20 mt-10 p-5 rounded-md">
            <p className="flex font-bold text-lg items-center text-minhaCorb">
              O Colégio São Paulo foi fundado em 15 de outubro de 1927, pelas
              Irmãs Angélicas de São Paulo, na Vila Muqui, Várzea, onde
              permaneceu por 6 anos. Foi transferido para o Bairro do Alto, em
              1934, na Rua Gonçalo de Castro, 393, onde se encontra até hoje.
              Teve as instalações, várias vezes ampliadas para melhor atender à
              demanda sempre crescente.
            </p>
            <div className="relative">
              <img src={CSP} alt="" />
              <p className="absolute bottom-4  left-0 -translate-x-7 bg-minhaCorb/85 text-white p-2 text-sm">
                1927 - Colégio São Paulo, Vila Muqui - Várzea.
              </p>
            </div>
            <div className="relative mt-10">
              <img src={segundopredio} alt="" />
              <p className="absolute bottom-4 whitespace-nowrap  left-72 -translate-x-7 bg-minhaCorb/85 text-white p-2 text-sm">
                Prédio do Fundamental, na década de 80.
              </p>
            </div>
            <p className="flex font-bold text-lg items-center text-minhaCorb">
              Foi transferido para o Bairro do Alto, em 1934, na Rua Gonçalo de
              Castro, 393, onde se encontra até hoje. Teve as instalações,
              várias vezes ampliadas para melhor atender à demanda sempre
              crescente.
            </p>
            <p className=" mt-10 flex font-bold text-lg items-center text-minhaCorb">
              Superiora da Congregação a Madre Flávia Maria Monat. A primeira
              diretora do colégio foi Madre Cândida Rocha, que aqui permaneceu
              como professora do Curso de Formação de Professores. O colégio
              atravessou, nos primeiros anos de existência, grandes
              dificuldades. A situação política do país agitada com a Revolução
              de 30; os municípios com intervenção federal e, depois, a 2ª
              Guerra Mundial. Por outro lado, com a criação do Ministério da
              Educação e Saúde no governo Vargas, tornou-se oficializado,
              orientado e muito fiscalizado. O fato é que a educação foi, nesse
              período, uma grande preocupação para o desenvolvimento do país.
              Pela excelência do clima desta cidade e pela formação educacional
              das Religiosas Angélicas, o colégio era muito procurado para o
              internato feminino, por onde passaram filhas de nomes ilustres e
              famílias tradicionais do Rio de Janeiro e de outros Estados do
              Brasil. O internato terminou em 1958, e o externato crescia a cada
              ano. Muitas famílias que confiaram ao colégio a formação de seus
              filhos continuam aqui, em terceira e até quarta geração. Podemos
              registrar personalidades
            </p>
            <div className="relative mt-10">
              <img src={Madreflavia} alt="" />
              <p className="absolute bottom-4 whitespace-nowrap   -translate-x-7 bg-minhaCorb/85 text-white p-2 text-sm">
                1927 - A primeira diretora do colégio, Madre Flávia Maria Monat.
              </p>
            </div>
          </div>
          <div className="-mt-10 w-[80%] mx-auto gap-x-20  p-5 rounded-md ">
            <p className="font-bold text-lg items-center text-minhaCorb">
              teresopolitanas que ocuparam ou que ocupam cargos nos governos
              municipais, estaduais e federal que tiveram a formação nesta
              escola. Poder-se-ia mencionar um vasto elenco de profissionais:
              médicos, engenheiros, advogados, administradores, economistas e
              artistas que aqui receberam a formação e instrução básicas para se
              tornarem os cidadãos de hoje. O Colégio São Paulo tem, em seu
              Marco Doutrinal, o objetivo de participar da construção de uma
              sociedade mais justa e solidária, a serviço da vida e da
              esperança. Quer ser uma comunidade educativa que, vivenciando os
              ideais de São Paulo apóstolo, insere-se na realidade
              sociopolítica, econômico-cultural e ecológica da região. Opta por
              uma educação cristã, que agrega a formação para a solidariedade
              humana à capacidade técnica, científica, artística, filosófica e
              cultural de qualidade, buscando condições para que todos sejam
              sujeitos da história.
            </p>
          </div>
        </section>
      </motion.div>
    </>
  );
};
