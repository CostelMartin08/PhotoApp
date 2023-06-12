import React from "react";
import Slider from 'react-slick';


const Carusel = () => {

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
                        alt="miri pe alee" />
                </div>

            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--2s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--2s.avif" alt="miri pe punte" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--3s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--3s.avif" alt="dansil mirilor" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--4s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--4s.avif" alt="poza miri biserica" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--5s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--5s.avif" alt=" se saruta miri" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--6s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--6s.avif" alt="se saruta mirii in parc" />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--7s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--7s.avif" alt="poza cu mirii in biserica " />
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--8s.avif)' }}>
                    <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--8s.avif" alt="dansul mirilor petrecere" />
                </div>
            </div>

        </Slider>

    );
}
export default Carusel;