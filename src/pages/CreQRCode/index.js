import "./CreQRCode.scss";
import React from 'react';
import { Image, Input, QRCode, Space, Upload, Button } from 'antd';
import { MehOutlined, ArrowDownOutlined } from '@ant-design/icons';
import ButtonDowload from "../../components/ButtonDowload"
import { UploadOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';


const CreQRCode = () => {
  //Mã QR
  const [text, setText] = React.useState('https://profile-nch.vercel.app/');

  //Ảnh của mã QR
  const [getUrl, setUrl] = useState("/image/avatar.jpg")

  //Update ảnh
  const [fileList, setFileList] = useState([
    {
      uid: '1',
      name: 'image.png',
      status: 'done',
      url: '/image/avatar.jpg',
    }]);

  //Câp nhập list ảnh và url ảnh
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (fileList[0].status === "removed") {
      setUrl("");
      setFileList([{
        uid: '1',
        name: 'Chưa có ảnh nào được tải lên!',
        status: 'done',
        url: '',
      }]);
    }
    else {
      setUrl(fileList[0].thumbUrl || fileList[0].url);
    }

  };

  return (
    <>
      <div className="createQR setHeight">

        {/* Box giới thiệu */}
        <div className="imageScanQR">
          <div>
            <h2> <MehOutlined /> Tạo mã QR!</h2>
            <p> Bạn có thể tạo mã QR bên dưới <ArrowDownOutlined /></p>
          </div>
          <img src="/image/createQR.png" alt="Create QR"></img>
        </div>
        {/* END Box giới thiệu */}


        {/* Hiển thị mã qr và input nhập url */}
        <div id="myqrcode">
          <Space direction="vertical" align="center">
            <QRCode size={250} errorLevel="H" value={text || '-URL'} icon={getUrl} iconSize={70} bgColor="#fff" />
            <label>Nhập URL của bạn:</label>

            <Input
              placeholder="-"
              maxLength={60}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Space>
        </div>
        {/*END Hiển thị mã qr và input nhập url */}


        {/* Update ảnh */}
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
          size="large"
        >
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture"
            fileList={fileList}
            maxCount={1}
            onChange={handleChange}
          >
            <Button icon={<UploadOutlined />}>Tải lên ảnh của bạn</Button>
          </Upload>
        </Space>
        {/* END Update ảnh */}

        <br></br>
        <br></br>
        <hr></hr>
        <div className="btnD">
          <span>Bạn có thể tải mã QR về thiết bị của bạn</span>
          <br></br>
          <ButtonDowload></ButtonDowload>
        </div>
        <br></br>
        <hr></hr>
      </div>

    </>
  );
}

export default CreQRCode;

