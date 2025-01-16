import axiosClient from '../utils/axiosClient';

export const getAllFunkos = async () => {
	try {
		const response = await axiosClient.get('/all-funkos');
		console.log('GET All Funkos requested: ', response);
		return response.data;
	} catch (error) {
		console.error('Error fetching Funkos: ', error);
	}
};
