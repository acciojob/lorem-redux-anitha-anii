import axios from 'axios';

const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const LOREM_API_URL = 'https://loripsum.net/api/';

const fetchLoremStart = () => ({
  type: 'FETCH_LOREM_START',
});

const fetchLoremSuccess = (data) => ({
  type: 'FETCH_LOREM_SUCCESS',
  payload: data,
});

const fetchLoremFailure = () => ({
  type: 'FETCH_LOREM_FAILURE',
});

export const fetchLorem = (paragraph_count) => {
  return (dispatch) => {
    dispatch(fetchLoremStart());
    axios
      .get(`${CORS_PROXY_URL}${LOREM_API_URL}${paragraph_count}`)
      .then((response) => {
        dispatch(fetchLoremSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(fetchLoremFailure());
      });
  };
};

 