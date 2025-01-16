import axiosClient from '../utils/axiosClient';

export const getUserInventory = async () => {
	try {
		const response = await axiosClient.get('/user-funkos');
		console.log('GET User requested: ', response);
		return response.data;
	} catch (error) {
		console.error('Error fetching User: ', error);
	}
};
