import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";



const apiClient = new APIClient('/galerie');


const usePhoto = (event, title) => useQuery({
    queryKey: [event],
    queryFn: () => apiClient.getAllPhoto(event, title)
        .then((data) => data)
        .catch((error) => {
            console.error('Eroare:', error);
            throw error;
        }),
    staleTime: 0,
    keepPreviousData: true,
})


export default usePhoto;
