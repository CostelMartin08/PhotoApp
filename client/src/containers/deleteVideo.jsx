import React from "react";
import useDeleteVideo from "../hooks/deleteVideo";


const DeleteVideo = ({ url }) => {

    const token = localStorage.getItem('token');

    const { deleteItem } = useDeleteVideo();
    const handleDelete = () => {

        deleteItem({ url, token });
    }

    return (

        <button
            onClick={handleDelete}
            className="button position-absolute me-1 bottom-0 end-0">
            <i className="fa-solid fa-trash fa-xl"></i>
        </button>

    )
}

export default DeleteVideo;