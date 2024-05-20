import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { QRCode } from 'antd';
import { ScanOutlined, RightCircleOutlined, CopyOutlined } from '@ant-design/icons';
import "./Components.scss";
import ButtonDowload from './ButtonDowload';
import { Input, Space, Tooltip, message } from 'antd';


const ModalShowQR = (props) => {
  const { data } = props;
  const [modal2Open, setModal2Open] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  //Hiện thông báo sao chép thành công
  const success = () => {
    navigator.clipboard.writeText(data.pathTo);
    messageApi.open({
      type: 'success',
      content: 'Đã sao chép đường dẫn vào bộ nhớ tạm!',
    });
  };
  //Hiện thông báo sao chép thành công

  return (
    <>
      {contextHolder}
      <a onClick={() => setModal2Open(true)}>
        <img src={data.srcImage} alt={data.name}></img>
      </a>

      {/* Nếu có link thì mới show modal */}
      {(data.pathTo && (
        <Modal
          title={<><ScanOutlined /> Mã QR {data.name}</>}
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          footer="Nguyễn Công Hiếu"
        >

          <div id="myqrcode">
            <QRCode
              errorLevel="H"
              value={data.pathTo}
              icon="/image/avatar.jpg"
              size={250}
              iconSize={70}
              bgColor="#fff"
            />
            <div className="groupButton">
              <div>
                <ButtonDowload></ButtonDowload>
                <Button onClick={success}><CopyOutlined />Copy</Button>
              </div>
              <Button href={data.pathTo} target="_blank"  ><RightCircleOutlined />Go to path</Button>
            </div>
          </div>

        </Modal >
      ))}

    </>
  )
}

export default ModalShowQR;