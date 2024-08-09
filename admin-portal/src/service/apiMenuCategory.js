//import axios from 'axios';
import axios from './axiosService';

export const addMenuCategory = async (data) => {
  try {
    const response = await axios.apis("POST",'/api/addMenuCategory',data);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getMenuCategoryList = async () => {
  try {
    const response = await axios.apis("GET",'/api/getAllMenuCategory');
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const updateMenuCategory = async (data,id) => {
  try {
    const response = await axios.apis("POST",`/api/updateMenuCategory/${id}`,data);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const deleteMenuCategory = async (id) => {
  try {
    const response = await axios.apis("POST",`/api/deleteMenuCategory/${id}`,{});
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};