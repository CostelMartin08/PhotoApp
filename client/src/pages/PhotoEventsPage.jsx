import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { useTheme } from "../scripts/useTheme";
import useData from "../hooks/useData";
import Header from '../containers/Header';
import Banner from "../components/Banner";
import SortButton from "../containers/SortButton";
import DeleteAlbums from "../containers/deleteAlbums";
import Footer from '../components/Footer';
import Loaders from "../components/Loaders";

const PhotoEvents = (props) => {


  const token = localStorage.getItem('token');
  const [sort, setSort] = useState([]);
  const { category } = useParams();
  const { status } = props;
  const theme = useTheme();
  const { data, isLoading, error } = useData(`/${category}`);
  const updateSortState = (sortedAlbums) => {
    setSort(sortedAlbums);
  };

  if (isLoading) return <Loaders />;
  if (error || !data) throw error;

  return (
    <section className={theme.mod.bgB}>
      <Header
        theme={theme}
        fileMod={theme.mod.bgHeader}
      />
      <Banner />
      <main className='container px-5 my-4'>
        <SortButton
          theme={theme}
          updateSort={updateSortState}
          data={data}

        />

        <div className="row g-4">
          {sort.map((album, index) => (
            <div
              key={album._id}
              className="col-sm-12 col-md-6 col-lg-4 position-relative">
              <Link
                to={`${album.title}`}
                className="card shadow">

                <img
                  className="full-width-image"
                  src={`https://balanandrei.ro/images/${category}/${album.title}/${album.content}`}
                  alt={`galerie-foto${index}`}
                />
                <span
                  className="text-card card-font ms-3 mb-3 h5"
                  aria-label={album.title}>
                  {album.title}
                </span>
              </Link>
              {status ?
                <DeleteAlbums category={category} id={album._id} token={token} />
                : null}
            </div>))}
        </div>
      </main>

      <Footer
        theme={theme}
      />

    </section>
  );
}

export default PhotoEvents;
