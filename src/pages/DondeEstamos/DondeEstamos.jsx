import "./dondeEstamos.css";
import { useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const apiKey = "AIzaSyD2ab-jU05HKPdeAJovWho688RAjo9M09M";

function DondeEstamos() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    if (isLoaded) {
      initMap();
    }
  }, [isLoaded]);

  function initMap() {
    const position = { lat: 42.22937197021133, lng: -8.707511707094698 };

    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: position,
      mapId: "ExtensionesJohannaStudio",
    });

    new window.google.maps.Marker({
      map: map,
      position: position,
      title: "ExtensionesJohannaStudio",
    });
  }

  return (
    <div className="GoogleMaps-container">
      <p className="Text-maps">
        Encuentranos en el Horario de 10:00 hasta las 20:00 L a V
        <p>Telefonos : 605 11 38 27 | 986 192 785</p>
        <p>¿A que esperas a sentirte radiante?</p>
      </p>
      {isLoaded ? (
        <div
          id="map"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-57%)",
            margin: "26px",
            width: "80%",
            height: "400px",
            borderRadius: "15px",
            boxShadow: "0px 1px 20px #9d8289, 0px 1px 20px #9d8289",
          }}
        ></div>
      ) : (
        <div>Cargando mapa...</div>
      )}
    </div>
  );
}

export default DondeEstamos;
