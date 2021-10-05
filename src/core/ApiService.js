import axios from 'axios';

export const apiService = {
    get: async (endpoint) => {
        const response = await axios.get(endpoint)
        return response.data
    }
}