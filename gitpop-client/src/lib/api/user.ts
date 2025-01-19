import axiosClient from '../utils/axiosClient';

//GET request to get user's pops (inventory)
export const getUserInventory = async () => {
	try {
		const response = await axiosClient.get('/user-funkos');
		console.log('GET User requested: ', response);
		return response.data;
	} catch (error) {
		console.error('Error fetching User: ', error);
	}
};

//POST request to add a new Funko Pop to a User's inventory
export const addUserFunko = async (newFunko: any) => {
	try {
		const response = await axiosClient.post('/add-to-inventory', newFunko);
		console.log('POST Add Funko requested: ', response);
		return response.data;
	} catch (error) {
		console.error('Error adding Funko: ', error);
	}
};

//DELETE request to remove a Funko Pop from a User's inventory

export const removeUserFunko = async (popID: string) => {
	try {
		const response = await axiosClient.delete(`/remove-from-inventory/${popID}`);
		return response.data;
	} catch (error) {
		console.error('Error removing Funko: ', error);
	}
};
