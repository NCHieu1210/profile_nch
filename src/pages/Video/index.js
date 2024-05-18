import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import './Video.scss';
import { Image } from 'antd'
import { ArrowDownOutlined, MehOutlined, RetweetOutlined } from '@ant-design/icons';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import OneVideo from './OneVideo';

const Video = () => {

  // Lấy chiều rộng của Browser
  const wBrowser = document.body.scrollWidth;

  const data = [{
    image: "/image/aVideo1.jpg",
    video: "/video/video1.mp4",
    alt: "Video1"
  },
  {
    image: "/image/aVideo2.jpg",
    video: "/video/video2.mp4",
    alt: "Video2"
  },
  {
    image: "/image/aVideo3.jpg",
    video: "/video/video3.mp4",
    alt: "Video3"
  },
  {
    image: "/image/aVideo4.jpg",
    video: "/video/video4.mp4",
    alt: "Video4"
  },
  {
    image: "/image/aVideo5.jpg",
    video: "/video/video5.mp4",
    alt: "Video5"
  },
  {
    image: "/image/aVideo6.jpg",
    video: "/video/video6.mp4",
    alt: "Video6"
  },

  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Thực hiện hành động khi người dùng cuộn chuột
  //     console.log('User is scrolling the page');

  //     // Ví dụ: Cuộn xuống thêm 100 pixels khi người dùng cuộn
  //     window.scrollBy({
  //       top: 100,
  //       behavior: 'smooth'
  //     });
  //   };

  //   // Thêm event listener cho sự kiện cuộn
  //   window.addEventListener('scroll', handleScroll);

  //   // Dọn dẹp event listener khi component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []); // Mảng rỗng để đảm bảo effect chỉ chạy một lần khi component mount

  return (

    <>
      <div className='setHeight'>
        <div className="boxVieo">
          <div>
            <h2> <MehOutlined /> Cảm ơn bạn!</h2>
            <p> Xem video vui vẻ nhé <ArrowDownOutlined /></p>
          </div>
          <img src="/image/watchVideo.jpg" alt="Xem Video"></img>
        </div >
        <div className='setMP__Video'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={(wBrowser <= 768) ? 1 : 3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index} >
                  <OneVideo {...item} ></OneVideo>
                </SwiperSlide>);
            })}
            <br></br >
            <br></br>
          </Swiper >
        </div >
      </div>
    </>
  )
}

export default Video;