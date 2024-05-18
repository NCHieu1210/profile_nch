import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const DowloadImage = (props) => {
  const src = props.img;
  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };
  return (
    <>
      <Button onClick={onDownload} icon={< DownloadOutlined />}>Dowload</Button>
    </>)
}

export default DowloadImage; 