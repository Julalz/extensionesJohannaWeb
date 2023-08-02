import Slider from "react-slick";
import Header from "../../components/shared/Header/Header";
import QuienesSomos from "../Quienes/Quienes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
console.log(Slider);

import "./home.css";
import Personal from "../../components/Personal/Personal";
import BarraSeparador from "../../components/shared/BarraSeparador/Barraseparador";
import Servicios from "../Servicios/Servicios";
import DondeEstamos from "../DondeEstamos/DondeEstamos";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <body>
        <p className="parrafos">Nuestros Trabajos más recientes</p>
        <div className="backgroundHome-carrusel">
          <Slider {...settings}>
            <div className="img">
              <img
                src="../../../public/images/cambio radical 5.JPG"
                alt="Imagen 1"
              />
            </div>
            <div className="img">
              <img
                src="../../../public/images/1670954794732.png"
                alt="Imagen 2"
              />
            </div>
            <div className="img">
              <img
                src="../../../public/images/AB353190-0CCF-47C6-A3CD-C83A18A448AD.PNG"
                alt="Imagen 3"
              />
            </div>
            <div className="img">
              <img src="../../../public/images/IMG_1171.jpg" alt="Imagen 4" />
            </div>
          </Slider>

          <QuienesSomos />
          <Personal />
          <BarraSeparador />
          <Servicios />
          <BarraSeparador />
          <DondeEstamos />
        </div>
      </body>
      <footer></footer>
    </>
  );
}

export default Home;
