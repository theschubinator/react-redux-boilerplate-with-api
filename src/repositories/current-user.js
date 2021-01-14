import axios from 'axios';

export const getUser = async () => {
    const response = await axios.get('/current-user');
    return response.data;
}
