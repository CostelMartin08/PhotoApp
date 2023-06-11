import React from "react";
import Slider from 'react-slick';
import { useState, useEffect } from "react";



const Carusel = () => {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const settings = {
        arrows: false,
        lazyLoad: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear"


    };


    return (
        <Slider  {...settings} >
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--1s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img"
                        src="/uploads/carusel--1s.avif" 
                        srcSet="/uploads/carusel--1s.avif 700w, /uploads/carusel--1.avif 1000w"
                           alt="carusel-image-1" />
                </div>

            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--2s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--2s.avif" alt="carusel-image-3" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--3s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--3s.avif" alt="carusel-image-3" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--4s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--4s.avif" alt="carusel-image-4" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--5s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--5s.avif" alt="carusel-image-5" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--6s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--6s.avif" alt="carusel-image-6" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--7s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--7s.avif" alt="carusel-image-7" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--8s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--8s.avif" alt="carusel-image-8" />
                </div>
            </div>

        </Slider>

    );
}
export default Carusel;