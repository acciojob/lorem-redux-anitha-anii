const initialState = {
    data: '',
    isLoading: false,
  };
  
  const loremReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LOREM_START':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_LOREM_SUCCESS':
        return {
          ...state,
          data: action.payload,
          isLoading: false,
        };
      case 'FETCH_LOREM_FAILURE':
        return {
          ...state,
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
  export default loremReducer;
  