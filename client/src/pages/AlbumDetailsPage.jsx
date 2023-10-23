import React, { useEffect, useState, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useLocation, useParams } from 'react-router-dom';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import Loaders from '../components/Loaders';
import Header from '../containers/Header';
import Footer from '../components/Footer';
import './albumDetails.css';
import { useTheme } from '../scripts/useTheme';
import usePhoto from '../hooks/usePhoto';
import PageNotFound from './NotFoundPage';

const AlbumDetails = () => {
    const { title } = useParams();
    const location = useLocation();

    const param = location.pathname.split('/');
    const theme = useTheme();
    const event = param[2];
    const [loading, setLoading] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const gridRef = useRef(null);



    const { data, isLoading, error } = usePhoto(event, title);


    useEffect(() => {

        if (data) {

            setLoading(true);
            const grid = gridRef.current;

            if (grid) {
                const masonryInstance = new Masonry(grid, {
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    percentPosition: true,
                });
                const imagesLoadedInstance = imagesLoaded(grid);

                imagesLoadedInstance.on('always', () => {
                    masonryInstance.layout();
                });

                return () => {
                    imagesLoadedInstance.off('always');
                    setLoading(false);
                };
            }
        }
    }, [loading, data]);


    const handleOpenModal = (indexu) => {
        setSlideNumber(indexu);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    const prevSlide = () => {
        setSlideNumber((prevNumber) => {
            const newNumber = prevNumber === 0 ? data.content.length - 1 : prevNumber - 1;
            return newNumber;
        });
    };

    const nextSlide = () => {
        setSlideNumber((prevNumber) => {
            const newNumber = prevNumber + 1 === data.content.length ? 0 : prevNumber + 1;
            return newNumber;
        });
    };

    const url = data ? `${param[2]}/${data.title}/${data.content[0]}` : null;
    const existingURL = encodeURIComponent(url) ?? 'defaultURL';


    if (isLoading) return <Loaders />;
    if (error || !data) return <PageNotFound />;


    return (
        <section className={theme.mod.bgB} >
            <Header
                theme={theme}
                fileMod={theme.mod.bgHeader} />
            <main className={`h-100 ${theme.mod.bgB}`}>
                {data ?
                    <div>
                        <div className="banner position-relative">
                            <div
                                className="bg-albumdetails"
                                style={{ backgroundImage: `url(https://balanandrei.ro/images/${existingURL})` }}>
                            </div>
                            <div className='bg-content mx-3 position-absolute'>
                                <h3
                                    className="title-font mb-2">
                                    {data.title}
                                </h3>
                                <p
                                    className="text-font">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                        {openModal && (

                            <div className="sliderWrap  p-0">

                                <div className="fullScreenImage vh-100">

                                    <TransformWrapper initialScale={1}>
                                        {({ zoomIn, resetTransform }) => (

                                            <React.Fragment>
                                                <div className="w-100 text-right mb-1">

                                                    <button className="me-2 btn text-light"
                                                        onClick={() => zoomIn()}>
                                                        <i className="fa-solid fa-magnifying-glass-plus fa-xl"></i>
                                                    </button>

                                                    <button
                                                        className="me-2 btn text-light"
                                                        onClick={() => resetTransform()}>
                                                        <i className="fa-solid fa-magnifying-glass-minus fa-xl"></i>
                                                    </button>

                                                    <button
                                                        className="me-1 btn text-light"
                                                        onClick={handleCloseModal}>
                                                        <i className="fa-solid fa-xmark fa-2xl"></i>
                                                    </button>

                                                </div>
                                                <TransformComponent onDoubleClick={zoomIn}>
                                                    <img
                                                        className="mx-auto img-fluid"
                                                        src={`https://balanandrei.ro/images/${param[2]}/${data.title}/${data.content[slideNumber]}`}
                                                        alt={`galery${data.content[slideNumber]}`}
                                                    />
                                                    <div className="arrows-bg d-flex justify-content-around">
                                                        <div className='px-5'>
                                                            <button onClick={prevSlide}
                                                                className="cta px-5 ">
                                                                <i className="fa-solid fa-arrow-left fa-lg text-light"></i>
                                                            </button>
                                                        </div>
                                                        <div className='px-5'>
                                                            <button
                                                                onClick={nextSlide}
                                                                className="cta px-5">
                                                                <i className="fa-solid fa-arrow-right fa-lg text-light"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </TransformComponent>

                                            </React.Fragment>
                                        )}
                                    </TransformWrapper>
                                </div>
                            </div>
                        )}
                        <div className="container-fluid">
                            {loading ?
                                <div className="masonry-grid" ref={gridRef}>
                                    <div className="grid-sizer"></div>
                                    {data &&
                                        data.content.map((slide, indexu) => (
                                            <div
                                                className="grid-item"
                                                key={indexu}
                                                onClick={() => handleOpenModal(indexu)}>
                                                <img
                                                    className="photo-grid "
                                                    src={data ? `https://balanandrei.ro/images/${param[2]}/${data.title}/${slide}` : ""}
                                                    alt={`poza${indexu}`}
                                                />
                                            </div>
                                        ))}
                                </div> : <Loaders />}
                        </div>
                    </div>
                    : <Loaders />}
            </main>

            <Footer
                theme={theme}
            />
        </section >
    );
}

export default AlbumDetails;
