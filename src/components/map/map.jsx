import React from "react";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import {placeCardProps} from "../../proptypes/place-card";

const Map = (props) => {
  const {placeCards, className, circle} = props;
  const mapRef = React.createRef();

  React.useEffect(() => {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({iconUrl: `img/pin.svg`, iconSize: [30, 30]});
    const zoom = 12;
    const map = leaflet.map(mapRef.current, {center: city, zoom, zoomControl: false, marker: true});
    map.setView(city, zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `© OpenStreetMap contributors © CARTO`}).addTo(map);
    if (circle) {
      leaflet.circle(circle, {
        color: `#6ea3d5`,
        fillColor: `#6ea3d5`,
        fillOpacity: 0.5,
        radius: 1500
      }).addTo(map);
    }

    placeCards.map((card) => {
      if (card.location) {
        leaflet.marker([card.location.latitude, card.location.longitude], {icon}).addTo(map);
      }
    });

    return () => {
      map.remove();
    };

  });


  return (
    <section
      ref={mapRef}
      className={`${className} map`}
    >
    </section>
  );

};

Map.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape(placeCardProps)),
  className: PropTypes.string,
  circle: PropTypes.arrayOf(PropTypes.string),
};

export default Map;
