import './Home.scss'
import { ArrowDownOutlined, MehOutlined } from '@ant-design/icons';
import 'animate.css';
import IconMenuMobile from './IconMenuMobile';
import React from 'react';


const data = [{
  name: 'Zalo',
  srcImage: '/image/zalo.png',
  pathTo: 'https://zalo.me/0379903378'
},
{
  name: 'Facebook',
  srcImage: '/image/facebook.png',
  pathTo: 'https://www.facebook.com/profile.php?id=100011399447460&locale=vi_VN'
},
{
  name: 'Tiktok',
  srcImage: '/image/tiktok.png',
  pathTo: 'https://www.tiktok.com/@ins.hieu?_t=8mSX9I8arLz&_r=1'
},
{
  name: 'Messenger',
  srcImage: '/image/messenger.png',
  pathTo: 'https://m.me/100011399447460'
},
{
  name: 'Github',
  srcImage: '/image/github.png',
  pathTo: ''
}
];

const Home = () => {
  const wBrowser = document.body.scrollWidth;


  return (
    <>
      <div className="homePage setHeight">

        <div className="homePage__content">
          <div>
            <h2> <MehOutlined /> Cảm ơn bạn đã ghé thăm!</h2>
            <p>Hãy kết nối với tôi <ArrowDownOutlined /></p>
          </div>
          <img src="/image/helloSticker.jpg" alt="Welcome"></img>
        </div >

        {(wBrowser <= 480) ?
          <div className="homePage__img">
            <img src="/image/homeImage.gif" alt="Animated GIF" />
          </div>
          : <div></div>}

        {(wBrowser <= 480) ?
          <div className="homePage__end">
            <IconMenuMobile data={data}></IconMenuMobile>
          </div>
          : <div></div>}

      </div>
    </>
  )
}

export default Home;