import { Button, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import "./Components.scss";

//Sự kiện Dowload QR Code
const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
//END Sự kiện Dowload QR Code
const ButtonDowload = () => {
  return (
    <>
      <Button onClick={downloadQRCode}>
        <DownloadOutlined />Dowload
      </Button>
    </>
  )
}

export default ButtonDowload;