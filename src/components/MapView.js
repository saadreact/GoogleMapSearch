import React from "react";
import styled from "styled-components";

const MapViewWrapper = styled.div`
  .map-title {
    margin-bottom: 10px;
  }
`;

const MapView = ({ selectedPlace }) => {
  return (
    <MapViewWrapper>
      <h2 className="map-title">Map View</h2>
      <iframe
        width="100%"
        height="1000"
        style={{ border:"0" }}
        loading={"lazy"}
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDtbjnn3pakSK2dG0jd6sEcFY5qxmnY-GU&q=${selectedPlace}`}
      ></iframe>
    </MapViewWrapper>
  );
};

export default MapView;
