import React from "react";
import CspBibli from "../../assets/QuemSomosHome/DS01-6836.JPG.jpg";
import CSP from "../../assets/QuemSomosHome/CSPTRANSPARENTE.png";

export const QuemSomosHome = () => {
  return (
    <>
      <main className="mx-full">
        <section>
          <div className="flex w-full h-[681px] items-center ">
            <img src={CspBibli} className="h-full w-full object-cover" />
            <div className="py-14 break-words w-[60%] sm:w-[50%]  ml-12 text-white absolute bg-black/40 backdrop-blur-sm p-7 rounded-md  ">
              <h1 className="font-sans font-bold mb-5 text-[20px] sm:text-[30px]">
                Seja bem-vindo(a) ao Colégio São Paulo
              </h1>
              <h2 className="font-sans font-bold  text-[15px] sm:text-[20px]">
                O Colégio São Paulo tem por finalidade promover uma educação
                evangelizadora através da comunidade educativa, tendo por base o
                Evangelho que desperta para a fraternidade cristã e que leva
                cada pessoa a assumir o seu destino histórico e a empenhar-se na
                transformação da sociedade, tendo em vista o seu bem pessoal e o
                da comunidade humana
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className="flex w-full justify-end">
            <div className="absolute *:ml-3 *:font-Inika -mt-16 z-10  w-[400px] sm:w-[500px] h-[140px] h bg-slate-300 p-3 rounded-s-xl ">
              <h1 className="text-minhaCorb text-[20px]">Anúncio</h1>
              <h1 className=" text-[35px] sm:text-[45px] -mt-2">
                Matrículas abertas
              </h1>
              <h1 className=" -mt-3 text-[20px] sm:text-[30px]">EDITAL 2026</h1>
            </div>
          </div>
          <div className="flex w-full h-[400px] bg-minhaCorb">
            <div className="absolute">
              <h1 className=" mt-14 ml-14  text-white text-[70px] font-Inika">
                " O Amor
              </h1>
              <h1 className=" -mt-6 ml-14 sm:ml-40 font-Inika text-white text-[35px] sm:text-[60px]">
                nasce do conhecimento."
              </h1>
              <h1 className="font-Inika ml-60 sm:ml-[600px] text-white text-[15px] sm:text-[20px]">
                Sto. Antônio Maria Zaccaria
              </h1>
            </div>
            <div className="flex justify-end w-full">
              <img
                className="mr-7 scale-125 sm:mr-32 opacity-10 object-contain h-[100%]"
                src={CSP}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
