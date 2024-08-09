//import axios from 'axios';
import axios from './axiosService';

export const getHotelDetails = async (setUserData) => {
  try {
    const response = await axios.apis("GET",'/api/userDetails');
    const formattedData = response.map((user, index) => ({
      ...user,
      id: index + 1,
    }));
    setUserData(formattedData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const submitHotelDetails = async (values, resetForm) => {
  try {
    const response = await axios.apis("POST",'/api/userRegistration', values);
    resetForm();
    return response
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const updateHotelDetails = async (id,value) => {
  try {
    const res = await axios.apis("PUT",`/api/userDetails/${id}`,value);
    return res;
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const changeStatus = async (id) => {
  try {
    const res = await axios.apis("PUT",`/api/changeStatus/${id}`,{});
    return res
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const updatePassword = async (data) => {
  try {
    const res = await axios.apis("POST",`/api/changePassword`,data);
    return res;
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const uploadFile = async (data) => {
  try {
    const res = await axios.apis("POST",`/api/upload`,data);
    return res;
  } catch (error) {
    console.error('Error updating user:', error);
  }
};