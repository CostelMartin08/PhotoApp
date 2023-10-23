import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";



const apiClient = new APIClient('/galerie');


const useData = (category) => useQuery({
  queryKey: [category],
  queryFn: () => apiClient.getAll(category)
    .then((data) => data)
    .catch((error) => {
      console.error('Eroare:', error);
      throw error;
    }),
  staleTime: 1 * 60 * 1000, //1m
  keepPreviousData: true,
})


export default useData;
