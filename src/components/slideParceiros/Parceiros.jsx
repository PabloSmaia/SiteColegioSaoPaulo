import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../../assets/parceiros/School.jpg";
import slide2 from "../../assets/parceiros/FTD.jpeg";
import slide3 from "../../assets/parceiros/InterSchool.png";
import slide4 from "../../assets/parceiros/Liv.png";
import slide5 from "../../assets/parceiros/Robotica.png";
import slide6 from "../../assets/parceiros/VilaBoas.png";

const imagens = [slide1, slide2, slide3, slide4, slide5, slide6];

export const Parceiros = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <div className="flex mb-10 ">
        <div className="bg-minhaCorb h-4  mt-14 w-1/2 rounded-md">
          <br />
        </div>
        <h1 className="font-bold text-minhaCorb lg:text-5xl text-3xl ml-5 mt-9  ">
          PARCEIROS
        </h1>
      </div>
      <motion.div
        ref={carousel}
        className="overflow-hidden flex w-auto h-auto py-10 ml-30  mt-9"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex "
          whileHover={{ scale: 1.0 }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initia={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="flex select-none ">
            {[
              ...imagens.map((s) => (
                <img
                  draggable="false"
                  className="select-none w-[30%] h-[40%s] sm:w-full gap-8 ml-14 sm:ml-20 sm:h-full transition-transform duration-300 hover:scale-125"
                  src={s}
                />
              )),
            ]}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
