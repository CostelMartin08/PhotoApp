import React from "react";
import useDeleteItem from "../hooks/deleteItem";

const DeleteAlbums = ({ category, id, token }) => {

    const { deleteItem } = useDeleteItem();

    const handleDelete = () => {
        deleteItem({ category, id, token })
    }

    return (
        <div>
            <button
                className="button position-absolute me-3 bottom-0 end-0"
                onClick={handleDelete}><i className="fa-solid fa-trash fa-xl"></i></button>
        </div>
    );
};

export default DeleteAlbums;
