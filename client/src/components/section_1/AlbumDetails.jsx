import React, { useEffect, useState, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useLocation, useParams } from 'react-router-dom';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import Loaders from './Loaders';
import Header from './Header';
import Footer from './Footer';
import './albumDetails.css';

function AlbumDetails(props) {
    const { index } = useParams();
    const location = useLocation();
    const param = location.pathname.split('/');
    const [loading, setLoading] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const gridRef = useRef(null);

    const data = props.sendData[index];

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
                };
            }
        }
    }, [loading, data]);


    useEffect(() => {
        switch (param[2]) {
            case 'Nunti':
                props.loadingData('Nunti');
                break;
            case 'Botezuri':
                props.loadingData('Botezuri');
                break;
            case 'Diverse':
                props.loadingData('Diverse');
                break;
            default:
                break;
        }
    }, [param[2]]);

    const handleOpenModal = (indexu) => {
        setSlideNumber(indexu);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    const prevSlide = () => {
        setSlideNumber((prevNumber) => {
            const newNumber = prevNumber === 0 ? props.sendData[index].content.length - 1 : prevNumber - 1;
            return newNumber;
        });
    };


    const nextSlide = () => {
        setSlideNumber((prevNumber) => {
            const newNumber = prevNumber + 1 === props.sendData[index].content.length ? 0 : prevNumber + 1;
            return newNumber;
        });
    };

    const url = `${param[2]}/${data ? data.title : null}/${data ? data.content[1] : null}`;
    const existingURL = encodeURIComponent(url) ?? 'defaultURL';

    return (
        <section>
            <Header />
            <main>
                {props.sendData && props.sendData.length > 0 ? (
                    <div>
                        <div className="banner position-relative">
                            <div className="bg-albumdetails"
                                style={{ backgroundImage: `url(https://balanandrei.ro/images/${existingURL})` }}>
                            </div>
                            <div className='bg-content mx-3 position-absolute'>
                                <h3 className="title-font mb-2">{data.title}</h3>
                                <p className="text-font">{data.description}</p>
                            </div>
                        </div>
                        {openModal && (
                            <div className="sliderWrap">
                                <div className="fullScreenImage my-auto">
                                    <TransformWrapper initialScale={1}>
                                        {({ zoomIn, resetTransform }) => (
                                            <React.Fragment>
                                                <div className="w-100 text-right mb-2">
                                                    <button className="me-2 btn" onClick={() => zoomIn()}>
                                                        <i className="fa-solid fa-magnifying-glass-plus fa-xl"></i>
                                                    </button>
                                                    <button className="me-2 btn" onClick={() => resetTransform()}>
                                                        <i className="fa-solid fa-magnifying-glass-minus fa-xl"></i>
                                                    </button>
                                                    <button className="me-1 btn" onClick={handleCloseModal}>
                                                        <i className="fa-solid fa-xmark fa-2xl"></i>
                                                    </button>
                                                </div>
                                                <TransformComponent onDoubleClick={zoomIn}>
                                                    <img
                                                        className="mx-auto img-fluid"
                                                        src={`https://balanandrei.ro/images/${param[2]}/${props.sendData[index].title}/${props.sendData[index].content[slideNumber]}`}
                                                        alt={`galery${props.sendData[index].content[slideNumber]}`}
                                                    />
                                                </TransformComponent>
                                                <div className="w-100 p-3 rounded-0 text-center">
                                                    <button className="scroll-button w-50 h-100" onClick={prevSlide}>
                                                        <i className="fa-solid fa-angle-left"></i>
                                                    </button>
                                                    <button className="scroll-button w-50 h-100" onClick={nextSlide}>
                                                        <i className="fa-solid fa-angle-right"></i>
                                                    </button>
                                                </div>
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
                                    {props.sendData[index].content &&
                                        props.sendData[index].content.map((slide, indexu) => (
                                            <div className="grid-item" key={indexu} onClick={() => handleOpenModal(indexu)}>
                                                <img
                                                    className="photo-grid "
                                                    src={`https://balanandrei.ro/images/${param[2]}/${props.sendData[index].title}/${slide}`}
                                                    alt={`poza${indexu}`}
                                                />
                                            </div>
                                        ))}
                                </div> : <Loaders />}
                        </div>
                    </div>
                ) : (
                    <Loaders />
                )}
            </main>
            <Footer />
        </section >
    );
}

export default AlbumDetails;
