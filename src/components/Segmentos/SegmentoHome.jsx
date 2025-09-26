import React from "react";
import { Link } from "react-router-dom";
import foto1 from "../../assets/segmento/Bento.jpg";
import foto2 from "../../assets/segmento/Alice.jpg";
import foto3 from "../../assets/segmento/Ana Clara.jpg";
import foto4 from "../../assets/segmento/Davi.jpg";
import { EducaçaoInfantil } from "../pages/EducaçaoInfantil";

export const SegmentoHome = () => {
  return (
    <section>
      <div className="flex mb-10 ">
        <div className="bg-minhaCorb h-4  mt-14 w-1/2 rounded-md">
          <br />
        </div>
        <h1 className="font-bold text-minhaCorb lg:text-5xl text-3xl ml-5 mt-9  ">
          Segmento e Infraestrutura
        </h1>
      </div>
      <div className="grid  sm:flex gap-20 justify-center *:rounded-md">
        <Link to="/EducaçaoInfantil">
          <div className="object-cover relative group bg-cyan-300 h-[300px] w-[250px] ">
            <img
              className="group-hover:blur-[2px] h-full w-full object-cover"
              src={foto1}
              alt=""
            />
            <div className=" absolute w-full h-[68px] bg-minhaCorb rounded-b-sm -mt-[65px]">
              <div
                className="absolute bottom-0 left-0 w-full bg-minhaCorb  text-white p-4
               group-hover:-translate-y-16 transition-transform duration-700 ease-in-out "
              >
                <h1 className="font-bold text-xl ml-[55px]  ">EDUCAÇÃO</h1>
                <h1 className="font-bold text-xl ml-[65px]">INFANTIL</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/FundamentalInicial">
          <div className="object-cover relative group bg-cyan-300 h-[300px] w-[250px] ">
            <img
              className="group-hover:blur-[2px] h-full w-full object-cover"
              src={foto2}
              alt=""
            />
            <div className=" absolute w-full h-[68px] bg-minhaCorb rounded-b-sm -mt-[65px]">
              <div
                className="absolute bottom-0 left-0 w-full bg-minhaCorb  text-white p-4
               group-hover:-translate-y-16 transition-transform duration-700 ease-in-out "
              >
                <h1 className="font-bold text-[15px] ml-[25px]  ">
                  ENSINO FUNDAMENTAL
                </h1>
                <h1 className="font-bold text-xl ml-[45px]">ANOS INICIAIS</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/FundamentalFinais">
          <div className="object-cover relative group bg-cyan-300 h-[300px] w-[250px] ">
            <img
              className="group-hover:blur-[2px] h-full w-full object-cover"
              src={foto4}
              alt=""
            />
            <div className=" absolute w-full h-[68px] bg-minhaCorb rounded-b-sm -mt-[65px]">
              <div
                className="absolute bottom-0 left-0 w-full bg-minhaCorb  text-white p-4
               group-hover:-translate-y-16 transition-transform duration-700 ease-in-out "
              >
                <h1 className="font-bold text-[15px] ml-[25px]  ">
                  ENSINO FUNDAMENTAL
                </h1>
                <h1 className="font-bold text-xl ml-[48px]">ANOS FINAIS</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/EnsinoMedio">
          <div className="object-cover relative group bg-cyan-300 h-[300px] w-[250px] ">
            <img
              className="group-hover:blur-[2px] h-full w-full object-cover"
              src={foto3}
              alt=""
            />
            <div className=" absolute w-full h-[68px] bg-minhaCorb rounded-b-sm -mt-[65px]">
              <div
                className="absolute bottom-0 left-0 w-full bg-minhaCorb  text-white p-4
               group-hover:-translate-y-16 transition-transform duration-700 ease-in-out "
              >
                <h1 className="font-bold text-xl ml-[35%]  ">ENSINO</h1>
                <h1 className="font-bold text-xl ml-[37%]">MÉDIO</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
