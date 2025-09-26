import { Carousel } from "./Carousel";
import foto1 from "../../assets/fotos slide/teste5.png";
import foto2 from "../../assets/fotos slide/teste6.png";
import foto3 from "../../assets/fotos slide/teste4.png";

const slides = [foto3, foto1, foto2];

export const Slide = () => {
  return (
    <div className="w-full h-full ">
      <div className="">
        <Carousel autoSlide={true}>
          {[...slides.map((s) => <img className="w-full" src={s} />)]}
        </Carousel>
      </div>
    </div>
  );
};
