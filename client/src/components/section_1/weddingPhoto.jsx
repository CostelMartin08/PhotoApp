import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


const WeddingPhoto = (props) => {


  const { category } = useParams();
  const [state, setState] = useState(false);
  const [reload, setReload] = useState(false);
  const location = useLocation();


  useEffect(() => {
    if (location.pathname === "/") {
      props.loadingData("Nunti");
      setState(true);

    } else {
      props.loadingData(category);
      setState(false);
    }
  }, [category, reload]);

  const oneDelete = async (id) => {
    try {
      await Axios({
        method: 'DELETE',
        withCredentials: true,
        url: `http://localhost:5000/delete/${category}/${id}`,
      });
      setReload(true);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setTimeout(() => {
        setReload(false);
      }, 500);
    }
  };

  return (
    <div>
      {!state ? <Header /> : null}
      <main className={!state ? ' mt-5 container-fluid px-5' : 'container-fluid px-5'}>
        {state ?
          <div className="d-flex flex-column align-items-center pt-4 pb-4">
            <h3 className="text-fon-big text-center bg-font-set"><strong>Portofoliu fotografii Nunți</strong></h3>
            <p className="text-body-secondary m-0">Pentru video accesează </p>
            <button className="type-button" href="#">Portofoliu Video</button>
          </div>
          : null}
        <div className=" row justify-content-sm-center justify-content-md-start  g-4 text-center">
          {props.sendData.map((album, index) => (
            <div key={album._id} className="col-sm-8 col-md-6 col-lg-4 position-relative">
              {/*compararea cu undefined nu este o solutie permanenta!!! */}
              <Link className="card shadow" to={category === undefined ? `portofoliuFoto/Nunti/${album.title}/${index}` : `${album.title}/${index}`}>
                <img className="full-width-image" src={category === undefined ? `/uploads/Nunti/${album.content[0]}` : `/uploads/${category}/${album.content[0]}`} alt={`galerie-foto${index}`} />
                <span className="text-card ms-3 mb-3 h5" aria-label={album.title}>
                  {album.title}
                </span>
              </Link>
              {props.status ? <button className="button position-absolute me-3 bottom-0 end-0" onClick={() => oneDelete(album._id)}><i class="fa-solid fa-trash fa-xl"></i></button> : null}
            </div>
          ))}
        </div>
        {state ?
          <div className="text-center pt-4">
            <button className="button" href="#">Vezi mai mult</button>
          </div>
          : null}
      </main>
      {!state ? <Footer /> : null}
    </div>

  );
}

export default WeddingPhoto;