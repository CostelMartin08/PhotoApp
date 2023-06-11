import React from 'react';


const Presentation = () => {

    return (
        <section className="container-fluid px-5 pb-4 mt-md-5  mt-1">

            <div className="row">
                <div className='my-3 col-12 col-md-12 col-lg-6'>
                    <div className='content my-2 ' >
                        <div className='w-50'>
                            <h3 className="title-font text-secondary-emphasis">Despre mine</h3>
                            <hr className='bg-dark'></hr>
                        </div>
                        <p className='opacity-75 text-font'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis lacus eu ante vulputate, vitae tincidunt massa feugiat. Phasellus massa arcu, ultricies suscipit diam sit amet, consectetur congue risus. Praesent congue massa elit, vitae commodo nunc egestas sit amet. Vivamus rutrum nunc vel quam aliquet, mollis luctus lacus tincidunt. Aenean interdum libero sed dui viverra, eu tempor quam maximus. Curabitur ultricies rutrum lacus, a lacinia purus pretium eu. Proin eget massa luctus, varius sapien non, tempus libero. Morbi pretium urna dui, at pellentesque leo blandit a. Praesent consequat ac velit ut viverra. Curabitur quis tellus placerat eros sollicitudin aliquam. In molestie lacus quis odio auctor bibendum.
                            Donec vel dignissim justo. Proin in tortor elementum, convallis diam consectetur, aliquam tortor. Duis cursus enim nulla, at condimentum purus pulvinar facilisis. Nam nec augue velit. Morbi sodales lorem est. Aenean nec magna eget nibh dictum finibus finibus quis orci. Nunc viverra in orci vel cursus.

                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6  d-flex justify-content-center ">
                    <img className="presentation-photo img-fluid rounded-3" src='https://images.pexels.com/photos/2272940/pexels-photo-2272940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="my-photo" width={"700px"}></img>
                </div>

            </div>
        </section>
    );
}

export default Presentation;