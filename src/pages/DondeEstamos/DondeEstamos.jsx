// import "./dondeEstamos.css";
// import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

// const position = { lat: 42.22959137264901, lng: -8.707421542624628 };

// function DondeEstamos() {
//   const apiKey = "AIzaSyD2ab-jU05HKPdeAJovWho688RAjo9M09M";
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: apiKey,
//   });

//   if (!isLoaded) {
//     return <div>Cargando mapa...</div>;
//   }

//   return (
//     <div className="GoogleMaps-container">
//       <GoogleMap
//         center={position}
//         zoom={15}
//         mapContainerClassName={{ with: "100%", height: "100%" }}
//       ></GoogleMap>
//     </div>
//   );
// }

// export default DondeEstamos;

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
    <div>
      {isLoaded ? (
        <div id="map" style={{ width: "100%", height: "400px" }}></div>
      ) : (
        <div>Cargando mapa...</div>
      )}
    </div>
  );
}

export default DondeEstamos;
