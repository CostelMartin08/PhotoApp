import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";


const apiClient = new APIClient('/galerie/video');


const useDataVideo = () => useQuery({
    queryKey: ['dataVideo'],
    queryFn: () => apiClient.getAllVideo()
        .then((data) => data)
        .catch((error) => {
            console.error('Eroare:', error);
            throw error;
        }),

    
})


export default useDataVideo;