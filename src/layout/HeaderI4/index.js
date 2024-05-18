import { Image } from 'antd';
import { Badge, Card, Space } from 'antd';
import "./HeaderI4.scss"
import CoverImage from '../CoverImage';

const HeaderI4 = () => {

  return (
    <>
      <CoverImage />
      <div className='header'>
        <div className='header__avatar' >
          < Image
            width={200}
            src="/image/avatar.jpg"
            alt="Avatar"
          />
        </div>
        <div className=' header__name'>
          <span>Nguyễn Công Hiếu</span>
        </div >
      </div >


    </>)
}

export default HeaderI4

