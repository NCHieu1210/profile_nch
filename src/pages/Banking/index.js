import ButtonCopy from './ButtonCopy';
import ButtonDowload from './ButtonDowload';
import "./Banking.scss";
import 'animate.css';
import { Collapse, ConfigProvider } from 'antd';
import { ArrowDownOutlined, MehOutlined, RetweetOutlined } from '@ant-design/icons';


//Dữ liệu
const data = [{
  id: 1,
  name: 'Ngân Hàng Sacombank',
  image: `/image/qrSacomBank.jpg`,
  stk: `060251437400`
},
{
  id: 2,
  name: 'Ngân Hàng Vietinbank',
  image: `/image/qrVietinBank.jpg`,
  stk: `0379903378`
},
{
  id: 3,
  name: 'Ví Điện Tử Momo',
  image: `/image/qrMomo.jpg`,
  stk: `0379903378`
}];
//End Dữ liệu

//Danh sách các item
var items = [];
data.map(item => {
  return (
    items = [...items,
    {
      key: item.id,
      label: item.name,
      children: <div className='box__imgBK'>
        <img src={item.image} alt={item.name} />
        <div>
          <ButtonDowload img={item.image}></ButtonDowload>
          <RetweetOutlined style={{ padding: "0 2px" }} />
          <ButtonCopy text={item.stk}></ButtonCopy>
        </div>
      </div>
    }
    ]
  )
})
const item = items;
//END Danh sách các item

const Banking = () => {
  const wBrowser = document.body.scrollWidth;

  return (
    <>
      <div className='setMP__Banking setHeight'>
        <ConfigProvider
          theme={{
            components: {
              Collapse: {
                colorTextHeading: '#FFAA3D',
                headerBg: "hsla(212, 25%, 22%, 0.9)",
                borderRadiusLG: (wBrowser <= 768) ? 0 : 25,
              },
            },
          }}
        >
          <div className="imageScanQR">
            <div>
              <h2> <MehOutlined /> Cảm ơn bạn!</h2>
              <p> Quét mã bên dưới bạn nhé <ArrowDownOutlined /></p>
            </div>
            <img src="/image/scanQR_B.jpg "></img>
          </div>
          < Collapse accordion bordered={false} expandIconPosition='end'
            defaultActiveKey={(wBrowser <= 768) ? 0 : 1} items={item} />
        </ConfigProvider >
        <div></div>
      </div >
    </>
  )
}

export default Banking;

// defaultActiveKey = { ['1']}
// { (wBrowser <= 768) ? "" : "defaultActiveKey = { ['1']}" }
