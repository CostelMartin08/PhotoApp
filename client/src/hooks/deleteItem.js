import { useMutation, useQueryClient } from '@tanstack/react-query';
import APIClient from '../services/apiClient';

const apiClient = new APIClient('/delete');

function useDeleteItem() {
    
    const queryClient = useQueryClient();

    const deleteOne = async ({ category, id, token }) => {
        try {
            const isSuccess = await apiClient.deleteOne({ category, id, token });
            if (isSuccess) {

                queryClient.invalidateQueries(`${category}`);

                return isSuccess;

            } else {

                throw new Error('Eroare la ștergerea elementului');
            }
        } catch (error) {
            throw error;
        }
    };

    const { mutate } = useMutation(deleteOne);

    return {
        deleteItem: mutate,
    };
}

export default useDeleteItem;
