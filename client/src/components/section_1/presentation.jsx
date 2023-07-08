import React from 'react';


const Presentation = () => {

    return (
        <section className="container-fluid px-5  pb-4 mt-4 mt-lg-5 ">
            <div className="row justify-content-center">
                <div className='my-3 col-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-center '>
                    <div className='my-2'>
                        <h3 className="title-font bg-font-set">Despre mine</h3>
                        <hr className='bg-dark'></hr>
                        <p className='opacity-75 text-font'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis lacus eu ante vulputate, vitae tincidunt massa feugiat. Phasellus massa arcu
                            ,ultricies suscipit diam sit amet, consectetur congue risus. Praesent congue massa elit, vitae commodo nunc egestas sit amet.
                            Vivamus rutrum nunc vel quam aliquet, mollis luctus lacus tincidunt. Aenean interdum libero sed dui viverra, eu tempor quam maximus.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-center ">
                    <picture>
                        <source srcSet="/uploads/myPhotomobile.webp" media="(max-width: 600px)" />
                        <source srcSet="/uploads/myPhoto.webp" media="(min-width: 600px)" />
                        <img className="presentation-photo rounded-3 mt-1" src="/uploads/myPhoto.webp" alt="foto" />
                    </picture>
                </div>
            </div>
        </section>
    );
}

export default Presentation;