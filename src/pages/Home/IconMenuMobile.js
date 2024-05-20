import { Space, Switch, ConfigProvider } from 'antd';
import { useState } from "react";
import ModalShowQR from '../../components/ModalShowQR';
import 'animate.css';


const IconMenuMobile = (props) => {
  const { data } = props;
  const [isOutIcon, setIsOutIcon] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHide, setIsHide] = useState("");

  //Cập nhập trạng thái hiển thị của button show madal
  const handleChange = (e) => {
    { e ? setIsOutIcon("") : setIsOutIcon("homePage__buttonMobile--out") };
    if (e) {
      return setIsHide("");
    }
    else {
      setIsDisabled(true);
      return setTimeout(() => {
        setIsDisabled(false);
        return (
          setIsHide("homePage__buttonMobile--hide")
        )
      }, 500);
    }


  }
  //END Cập nhập trạng thái hiển thị của button show madal
  return (
    <>
      <div className={`homePage__buttonMobile ${isHide} ${isOutIcon} `}>
        {/* Lấy danh sách link */}
        {data.map((item, index) => { return (<ModalShowQR key={index} data={item} />) })}
        {/*END Lấy danh sách link */}


        {/* Bật/Tắt hiển thị */}
        <div className='homePage__buttonMobile--switch'>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#2A3746",
                colorPrimaryHover: "#2A3746",
                fontSize: 20,
                handleSize: 10
              }
            }}
          >
            <Space direction="vertical" >
              <Switch
                type="primary"
                checkedChildren="Unhide"
                unCheckedChildren="Hide"
                onChange={handleChange}
                disabled={isDisabled}
                defaultChecked />
            </Space>
          </ConfigProvider>
        </div>
        {/*END Bật/Tắt hiển thị */}
      </div>

    </>
  )
}

export default IconMenuMobile;