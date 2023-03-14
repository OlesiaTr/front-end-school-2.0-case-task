// Utils
import axios from 'axios';

// Setups
axios.defaults.baseURL = 'https://api.wisey.app/api/v1';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

// HTTP requests
export const getToken = async () => {
  try {
    const { data } = await axios.get('/auth/anonymous?platform=subscriptions');
    setToken(data.token);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCoursesFeed = async () => {
  try {
    const { data } = await axios.get('/core/preview-courses');
    return data.courses;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCourseDetails = async id => {
  try {
    const { data } = await axios.get(`/core/preview-courses/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
