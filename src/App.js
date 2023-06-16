import React from "react";
import SearchBar from "./components/SearchBar";
import PlaceList from "./components/PlaceList";
import MapView from "./components/MapView";
import { useSelector, useDispatch } from "react-redux";
import { searchPlaces, selectPlace } from "./redux/action";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { places, selectedPlace } = useSelector((state) => state);

  const handleSearch = (searchText) => {
    dispatch(searchPlaces(searchText));
  };
  const handlePlaceSelect = (place) => {
    dispatch(selectPlace(place));
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <PlaceList places={places} handlePlaceSelect={handlePlaceSelect} />
      <MapView selectedPlace={selectedPlace} />
    </div>
  );
};

export default App;
