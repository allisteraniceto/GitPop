import axiosClient from '../utils/axiosClient';

export const getFunkos = async () => {
    try{
        const response = await axiosClient.get('/all-funkos');
        console.log("GET Funkos requested: ", response);
        return response.data;
    } catch (error) {
        console.error("Error fetching Funkos: ", error);
    }
}