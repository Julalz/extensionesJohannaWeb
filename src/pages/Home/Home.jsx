import Slider from "react-slick";
import Header from "../../components/shared/Header/Header";
import QuienesSomos from "../Quienes/Quienes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";

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
        <p className="parrafos">Nuestros Trabajos mas recientes</p>
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
        </div>
      </body>
      <footer></footer>
    </>
  );
}

export default Home;
