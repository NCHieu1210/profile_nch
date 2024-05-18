import './Video.scss';
import 'animate.css';
import { Image } from 'antd'

const OneVideo = (props) => {

  return (
    <>
      <div className="image__box">
        <div className="image__box--play" >
          <img src="/image/play.png" alt="play"></img>
        </div>
        <Image
          preview={{
            destroyOnClose: true,
            imageRender: () => (
              <video
                width={200}
                controls
                src={props.video}
              />
            ),
            toolbarRender: () => null,
          }}
          src={props.image}
          alt={props.alt}
        />
      </div>
    </>);
}

export default OneVideo;