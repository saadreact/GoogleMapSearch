const initialState = {
    places: [],
    selectedPlace: null,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_PLACES_SUCCESS':
        return { ...state, places: action.payload, error: null };
      case 'SEARCH_PLACES_FAILURE':
        return { ...state, places: [], error: action.payload };
      case 'SELECT_PLACE':
        return { ...state, selectedPlace: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;