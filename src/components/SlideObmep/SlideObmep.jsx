import { useEffect, useState, useRef } from "react";
import foto1 from "../../assets/fotos Obmep/1.jpg";
import foto2 from "../../assets/fotos Obmep/2.jpg";
import foto3 from "../../assets/fotos Obmep/3.jpg";
import foto4 from "../../assets/fotos Obmep/4.jpg";
import foto5 from "../../assets/fotos Obmep/5.jpg";
import foto6 from "../../assets/fotos Obmep/6.jpg";
import foto7 from "../../assets/fotos Obmep/7.jpg";
import foto8 from "../../assets/fotos Obmep/8.jpg";
import foto9 from "../../assets/fotos Obmep/9.jpg";
import foto10 from "../../assets/fotos Obmep/10.jpg";
import { motion } from "motion/react";

const slides = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
];

export const SlideObmep = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <div className="flex ">
        <div className="bg-minhaCorb h-4  mt-14 w-1/2 rounded-lg">
          <br />
        </div>
        <h1 className="font-bold text-minhaCorb lg:text-5xl text-4xl ml-5 mt-9 ">
          OBMEP 2024
        </h1>
      </div>
      <motion.div
        ref={carousel}
        className=" overflow-hidden flex w-auto h-auto py-10 ml-30  mt-9"
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
          <motion.div className="flex   h-full  ">
            {[
              ...slides.map((s) => (
                <img
                  className=" w-80 py-3 ml-20 transition-transform duration-300 hover:scale-125"
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
