import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

class APIClient {

    constructor(endpoint) {
        this.endpoint = endpoint
    }

    async getAll(category, config) {

        const url = `${this.endpoint}/${category}`;

        try {
            const response = await axiosInstance.get(url, config);
            return response.data;
        } catch (error) {
            console.error('Eroare:', error);
            throw error;
        }
    }

    async getAllPhoto(event, title) {

        const url = `${this.endpoint}/${event}/${title}`;

        try {
            const response = await axiosInstance.get(url);
            return response.data;
        } catch (error) {
            console.error('Eroare:', error);
            throw error;
        }
    }

    async getAllVideo() {
        const url = `${this.endpoint}`;

        try {
            const response = await axiosInstance.get(url);
            return response.data
        } catch (error) {
            console.error('Eroare:', error);
            throw error;
        }
    }

    async deleteVideo(param) {

        const url = `${this.endpoint}/${param.url}`;

        try {
            const response = await axiosInstance.delete(url, {
                headers: {
                    Authorization: `Bearer ${param.token}`,
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                return true;

            } else {
                const responseData = await response.data;
                console.error('Eroare:', responseData.error);
                return false;
            }
        } catch (error) {
            console.error('Eroare la ștergerea evenimentului!', error);
            throw error;

        }
    }

    async deleteOne(param) {
        const url = `${this.endpoint}/${param.category}/${param.id}`;

        try {
            const response = await axiosInstance.delete(url, {
                headers: {
                    Authorization: `Bearer ${param.token}`,
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                return true;

            } else {
                const responseData = await response.data;
                console.error('Eroare:', responseData.error);
                return false;
            }
        } catch (error) {
            console.error('Eroare la ștergerea evenimentului!', error);
            throw error;

        }
    }
}
export default APIClient;

