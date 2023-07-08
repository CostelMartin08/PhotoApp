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
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--1mobile.webp)' }}>
                    <picture>
                        <source srcSet="/uploads/carusel--1mobile.webp" media="(max-width: 600px)" />
                        <source srcSet="/uploads/carusel--1.webp" media="(min-width: 600px)" />
                        <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--1.webp" alt="miri pe alee" />
                    </picture>
                </div>

            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--2mobile.webp)' }}>
                    <picture>
                        <source srcSet="/uploads/carusel--2mobile.webp" media="(max-width: 600px)" />
                        <source srcSet="/uploads/carusel--2.webp" media="(min-width: 600px)" />
                        <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--2.webp" alt="miri pe alee" />
                    </picture>
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--3mobile.webp)' }}>
                    <picture>
                        <source srcSet="/uploads/carusel--3mobile.webp" media="(max-width: 600px)" />
                        <source srcSet="/uploads/carusel--3.webp" media="(min-width: 600px)" />
                        <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--3.webp" alt="miri pe alee" />
                    </picture>
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--4mobile.webp)' }}>
                    <picture>
                        <source srcSet="/uploads/carusel--4mobile.webp" media="(max-width: 600px)" />
                        <source srcSet="/uploads/carusel--4.webp" media="(min-width: 600px)" />
                        <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--4.webp" alt="miri pe alee" />
                    </picture>
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--5mobile.webp)' }}>
                    <picture>
                        <source srcSet="/uploads/carusel--5mobile.webp" media="(max-width: 600px)" />
                        <source srcSet="/uploads/carusel--5.webp" media="(min-width: 600px)" />
                        <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--5.webp" alt="miri pe alee" />
                    </picture>
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--6mobile.webp)' }}>
                    <picture>
                        <source srcSet="/uploads/carusel--6mobile.webp" media="(max-width: 600px)" />
                        <source srcSet="/uploads/carusel--6.webp" media="(min-width: 600px)" />
                        <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--6.webp" alt="miri pe alee" />
                    </picture>
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--7mobile.webp)' }}>
                    <picture>
                        <source srcSet="/uploads/carusel--7mobile.webp" media="(max-width: 600px)" />
                        <source srcSet="/uploads/carusel--7.webp" media="(min-width: 600px)" />
                        <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--7.webp" alt="miri pe alee" />
                    </picture>
                </div>
            </div>
            <div>
                <div className="background" style={{ backgroundImage: 'url(/uploads/carusel--8mobile.webp)' }}>
                    <picture>
                        <source srcSet="/uploads/carusel--8mobile.webp" media="(max-width: 600px)" />
                        <source srcSet="/uploads/carusel--8.webp" media="(min-width: 600px)" />
                        <img className="img-fluid mx-auto carusel-img" src="/uploads/carusel--8.webp" alt="miri pe alee" />
                    </picture>
                </div>
            </div>

        </Slider>

    );
}
export default Carusel;