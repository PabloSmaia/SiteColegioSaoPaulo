import React from "react";
import CSP from "../../assets/footer/LOGO.png";
import insta from "../../assets/insta.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="mt-40 flex flex-col sm:grid sm:grid-cols-3 g bg-minhaCorb w-full h-auto sm:h-[auto]">
      <div className="ml-[15%] w-[60%] h-[auto] sm:ml-20 object-cover ">
        <img
          src={CSP}
          alt=""
          className="  w-[90%] sm:w-[auto] sm:h-auto mb-[]"
        />
      </div>
      <div className=" ml-[15%]   mt-10   *:mt-2">
        <h1 className="font-Inika text-minhaCorP">ENTRE EM CONTATO</h1>
        <h1 className="text-minhaCorP">ENDEREÇO:</h1>
        <h1 className="text-white">Rua Gonçalo Castro 393, Teresópolis, RJ</h1>
        <h1 className="text-white">25960-090.</h1>
        <h1 className="text-minhaCorP font-Inika">ENTRE EM CONTATO</h1>
        <h1 className="text-minhaCorP">TETELEFONE</h1>
        <h1 className="text-white">(21)2643-9700</h1>
        <h1 className="text-white">(21)3518-8973</h1>
        <h1 className="font-Inika text-minhaCorP">EMAIL:</h1>
        <h1 className="text-white">informatica@csptere.com.br</h1>
        <h1 className="text-white">secretaria@csptere.com.br</h1>
      </div>

      <div className="ml-[15%]  flex flex-col  mt-10  *:mt-2">
        <h1 className="font-Inika text-minhaCorP">LINKS RAPIDOS</h1>
        <Link className="text-white hover:text-minhaCorP transition">HOME</Link>
        <Link className="text-white  hover:text-minhaCorP transition">
          QUEM SOMOS
        </Link>
        <Link className="text-white  hover:text-minhaCorP transition">
          SERVIÇO SOCIAL
        </Link>
        <Link className="text-white  hover:text-minhaCorP transition">
          SISTEMA ACADEMICO
        </Link>
      </div>
    </section>
  );
};
