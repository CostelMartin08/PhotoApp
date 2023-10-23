import { useMutation, useQueryClient } from '@tanstack/react-query';
import APIClient from '../services/apiClient';

const apiClient = new APIClient('/delete');

function useDeleteVideo() {
    
    const queryClient = useQueryClient();

    const deleteVideo = async ( {url, token} ) => {
        try {
    
            const isSuccess = await apiClient.deleteVideo( {url, token} );
            if (isSuccess) {

                queryClient.invalidateQueries(`${url}`);

                return isSuccess;

            } else {

                throw new Error('Eroare la ștergerea elementului');
            }
        } catch (error) {
            throw error;
        }
    };

    const { mutate } = useMutation(deleteVideo);

    return {
        deleteItem: mutate,
    };
}

export default useDeleteVideo;
