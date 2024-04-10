import React from "react";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import PlaceCard from "../placeCard/placeCard";

const Map = (props) => {
  const {placeCards} = props;
  const mapRef = React.createRef();

  React.useEffect(() => {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({iconUrl: `img/pin.svg`, iconSize: [30, 30]});
    const zoom = 12;
    const map = leaflet.map(mapRef.current, {center: city, zoom, zoomControl: false, marker: true});
    map.setView(city, zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `© OpenStreetMap contributors © CARTO`}).addTo(map);
    placeCards.map((card, i) => {
      if (card.coords) {
        leaflet.marker(card.coords, {icon}).addTo(map);
      }
    });
  });


  return (
    <section
      ref={mapRef}
      className="cities__map map"
    >
    </section>
  );

};

Map.propTypes = {};

export default Map;
