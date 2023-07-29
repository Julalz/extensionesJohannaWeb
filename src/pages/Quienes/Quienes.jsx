import Button from "../../components/shared/button/Button";

import "./quienes.css";
function QuienesSomos() {
  return (
    <>
      <div className="Parrafo-quienes">
        <p>
          Hemos diseñado un ambiente en el que te puedas relajar totalmente
          mientras recibes los mejores tratamientos para reponer a tu cuerpo y
          tu mente.
        </p>
        <p>
          En Extensiones Johanna Estudio encontrarás un{" "}
          <strong>personal altamente cualificado</strong> , somos pioneros en{" "}
          <strong>Extensiones de pelo natural</strong>, con dilatada experiencia
          en <strong>Extensiones de pestañas</strong> y muchos mas servicios,
          estamos dispuestos a ofrecerte los mejores tratamientos
        </p>
      </div>
      <div>
        <Button text="Instagram" />
        <Button text={"Facebook"} />
      </div>
      <div className="BarraSeparador"></div>
    </>
  );
}
export default QuienesSomos;
