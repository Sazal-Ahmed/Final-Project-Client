import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='mb-14'>
            <section>
                <SectionTitle  subheadings ={'From 11.00am to 10.00pm'}
                    heading = {'Order Online'}>
                </SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='relative' >
                            <img src={slide1} alt="" />
                        </div>
                        <h3 className='text-3xl text-center uppercase absolute bottom-0 left-20 text-white'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" className='relative' />
                        <h3 className='text-3xl text-center uppercase absolute bottom-0 left-20 text-white'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" className='relative' />
                        <h3 className='text-3xl text-center uppercase absolute bottom-0 left-20 text-white'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" className='relative' />
                        <h3 className='text-3xl text-center uppercase absolute bottom-0 left-20 text-white'>Derserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" className='relative' />
                        <h3 className='text-3xl text-center uppercase absolute bottom-0 left-20 text-white'>Salads</h3>
                    </SwiperSlide>

                </Swiper>
            </section>
        </div>
    );
};

export default Category;