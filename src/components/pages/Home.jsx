import { useState, useEffect } from "react";
import { SlideObmep } from "../SlideObmep/SlideObmep";
import { SlideEnem } from "../SlideEnem/SlideEnem";
import { QuemSomosHome } from "../QuemSomosHome/QuemSomosHome";
import { LinksUtilitario } from "./LinksUtilitario";
import { Footer } from "../Navbar/Footer";
import { Parceiros } from "../slideParceiros/Parceiros";
import { SegmentoHome } from "../Segmentos/SegmentoHome";
import matricula from "../../assets/matricula/popup.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Exibe o popup ao montar o componente
    setShowPopup(true);
  }, []);

  return (
    <>
      <div>
        <QuemSomosHome />
        <SegmentoHome />
        <LinksUtilitario />
        <SlideObmep />
        <SlideEnem />
        <Parceiros />
        <Footer />
      </div>
      {showPopup && (
        <div className="rounded-lg fixed scrol-none top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-40">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute  -mt-[75%] sm:-mt-[36%] sm:ml-[35%] ml-[75%]  rounded-full z-50 bg-minhaCorP text-minhaCorb px-4 font-bold  py-2 transition"
          >
            x
          </button>
          <Link to="/Matricula" className="flex justify-center">
            <div className="bg-white  rounded-xl shadow-lg text-center max-w-[90%] sm:max-w-[60%]">
              <img className="h-full w-ful rounded-lg" src={matricula} alt="" />
            </div>
          </Link>
        </div>
      )}
    </>
  );
};
