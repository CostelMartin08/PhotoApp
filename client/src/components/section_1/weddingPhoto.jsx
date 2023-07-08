import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Axios from "axios";


const WeddingPhoto = (props) => {
  const { category } = useParams();
  const [data, setdata] = useState([]);
  const history = useNavigate();


  useEffect(() => {
    switch (category) {
      case 'Nunti':
      case "Botezuri":
      case "Diverse":

        props.loadingData(category);
        break;

      default:
        history("/notFound");
        break;
    }
  }, [category, history])

  useEffect(() => {

    if (Array.isArray(props.sendData)) {
      setdata(props.sendData);
    }
  }, [props.sendData])

  const oneDelete = async (id) => {
    try {
      await Axios({
        method: 'DELETE',
        withCredentials: true,
        url: `http://localhost:5000/delete/${category}/${id}`,
      });


      props.loadingData(category);

    } catch (error) {
      console.error(error);
    }
  };


  const renderAlbums = () => {
    return (
      data.map((album, index) => (
        <div key={album._id} className="col-sm-8 col-md-6 col-lg-4 position-relative">
          <Link className="card shadow" to={`${album.title}/${index}`}>
            <img className="full-width-image" src={`https://balanandrei.ro/images/${category}/${album.title}/${album.content[0]}`} alt={`galerie-foto${index}`} />
            <span className="text-card ms-3 mb-3 h5" aria-label={album.title}>
              {album.title}
            </span>
          </Link>
          {props.status ? <button className="button position-absolute me-3 bottom-0 end-0" onClick={() => oneDelete(album._id)}><i className="fa-solid fa-trash fa-xl"></i></button> : null}
        </div>
      ))
    );
  };

  return (
    <div>
      <Header />
      <main className='container-fluid px-5 mt-5'>

        <div className="row justify-content-sm-center justify-content-md-start g-4 text-center">
          {renderAlbums()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default WeddingPhoto;
