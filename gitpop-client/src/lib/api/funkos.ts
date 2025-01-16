import axiosClient from '../utils/axiosClient';

//GET request all Funko Pops in funkoDB collection
export const getAllFunkos = async () => {
	try {
		const response = await axiosClient.get('/all-funkos');
		console.log('GET All Funkos requested: ', response);
		return response.data;
	} catch (error) {
		console.error('Error fetching Funkos: ', error);
	}
};
