import React, {useEffect, memo} from "react";
import PropTypes, {bool} from "prop-types";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import {placeCardProps} from "../../proptypes/place-card";
import {connect} from "react-redux";
import {hoverOfferId as hoverOfferIdFunc} from "../../store/actions";
import {cityProps} from "../../proptypes/city";

const Map = (props) => {
  const {placeCards, className, circle, hoverOfferId, resetHoverId, currentTown} = props;
  const mapRef = React.createRef();
  const markersRef = React.useRef([]);
  const mapInstanceRef = React.useRef();


  React.useEffect(() => {
    const city = circle ? [circle.latitude, circle.longitude] : [currentTown.location.latitude, currentTown.location.longitude];
    const zoom = circle ? 13 : currentTown.location.zoom;
    const map = leaflet.map(mapRef.current, {center: city, zoom, zoomControl: false, marker: true});
    mapInstanceRef.current = map;
    map.setView(city, zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `© OpenStreetMap contributors © CARTO`}).addTo(map);
    if (circle) {
      leaflet.circle([circle.latitude, circle.longitude], {
        color: `#6ea3d5`,
        fillColor: `#6ea3d5`,
        fillOpacity: 0.5,
        radius: 1500
      }).addTo(map);
    }


    placeCards.map((card) => {
      if (card.location) {
        let iconUrl = card.isMain ? `img/pin-active.svg` : `img/pin.svg`;
        const icon = leaflet.icon({iconUrl, iconSize: [30, 30]});
        const marker = leaflet.marker([card.location.latitude, card.location.longitude], {icon}).addTo(map);
        markersRef.current.push(marker); // Сохраняем ссылки на маркеры в массив ref
      }
    });


    return () => {
      mapInstanceRef.current.remove();
      markersRef.current.forEach((marker) => {
        marker.remove();
      });
      markersRef.current = [];
      resetHoverId();
    };

  }, [placeCards]);

  useEffect(() => {
    if (!circle) {
      markersRef.current.forEach((marker) => {
        marker.remove();
      });
      markersRef.current = []; // О
      placeCards.map((card) => {
        if (card.location) {
          let icon;
          if (card.id === hoverOfferId) {
            icon = leaflet.icon({iconUrl: `img/pin-active.svg`, iconSize: [30, 30]});
          } else {
            icon = leaflet.icon({iconUrl: `img/pin.svg`, iconSize: [30, 30]});
          }
          const marker = leaflet.marker([card.location.latitude, card.location.longitude], {icon}).addTo(mapInstanceRef.current);
          markersRef.current.push(marker); // Сохраняем ссылки на маркеры в массив ref
        }
      });
    }
  }, [hoverOfferId]);


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
  circle: PropTypes.object,
  hoverOfferId: PropTypes.number,
  resetHoverId: PropTypes.func,
  currentTown: PropTypes.shape(cityProps)
};

const mapStateToProps = ({process}) => ({
  hoverOfferId: process.hoverOfferId,
  currentTown: process.currentTown
});

const mapDispatchToProps = (dispatch) => ({
  resetHoverId: () => {
    dispatch(hoverOfferIdFunc(0));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(memo(Map, (prevProps, nextProps) => {
  return (prevProps.currentTown === nextProps.currentTown && prevProps.hoverOfferId === nextProps.hoverOfferId
    && prevProps.placeCards === nextProps.placeCards);
}));

