import "./servicios.css";
function Servicios() {
  return (
    <div className=" Services-Container">
      <h2>Nuestros Servicios</h2>
      <ul className="ulServices-container">
        <li>
          <img
            src="../../../public/images/cambio radical 5.JPG"
            alt="extensionesPelo"
          />
          <h3>Extensiones de pelo</h3>
          <p>
            Calidad 100% natural, pelo hindu. Venta de clip, cortinas o postura
          </p>
        </li>
        <li>
          <img
            src="../../../public/images/AB353190-0CCF-47C6-A3CD-C83A18A448AD.PNG"
            alt="extensionesPestañas"
          />{" "}
          <h3>Extensiones de pestañas</h3>
          <p>Todo tipo de Volumenes, diseños.</p>
        </li>
        <li>
          <img src="../../../public/images/queratina.jpg" alt="Queratinas" />{" "}
          <h3>Queratinas</h3>
          <p>Especialistas en queratinas y tratamientos para el pelo afro</p>
        </li>
        <li>
          <img src="" alt="Limpieza Faciales" />
          <h3>Limpieza Faciales</h3>
          <p>Tratamientos especiales para el cuidado facial</p>
        </li>
        <li>
          <img
            src="../../../public/images/boxeadoras.jpg"
            alt="Trenzas Boxeadoras"
          />
          <h3>Trenzas Boxeadoras</h3>
          <p>Trenzas para ellas y ellos.</p>
        </li>
        <li>
          <img src="../../../public/images/henna.jpg" alt="Diseño de Cejas" />
          <h3>Diseño de Cejas</h3>
          <p>Diseño de las cejas en base a la anatomía del rostro</p>
        </li>
        <li>
          <img src="" alt="Microblanding" />
          <h3>Microblanding</h3>
          <p>Diseño hiperrealista</p>
        </li>
      </ul>
    </div>
  );
}
export default Servicios;
