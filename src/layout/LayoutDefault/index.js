import { Outlet, NavLink } from "react-router-dom";
import "./LayoutDefault.scss"
import HeaderI4 from "../HeaderI4";
import { Layout } from "antd";
import { CopyrightOutlined, HomeOutlined, BankOutlined, VideoCameraOutlined, QrcodeOutlined } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;

const LayoutDefault = () => {
  const navLinkActive = (e) => {
    return e.isActive ? "menu__link menu__link--active" : "menu__link";
  }

  return (
    <>
      <Layout className="layoutDefault">
        <HeaderI4 />
        <Header className="layoutDefault__header">
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/" className={navLinkActive}> <HomeOutlined /> <span>Home</span></NavLink>
              </li>
              <li>
                <NavLink to="/banking" className={navLinkActive}> <BankOutlined />  <span>Banking</span></NavLink>
              </li>
              <li>
                <NavLink to="/video" className={navLinkActive}> <VideoCameraOutlined /> <span>Video</span></NavLink>
              </li>
              <li>
                <NavLink to="/myqrcode" className={navLinkActive}> <QrcodeOutlined /> <span>QR Code</span></NavLink>
              </li>
            </ul>
          </div>
        </Header>
        <Content className="layoutDefault__content">
          <Outlet />
        </Content>
        <Footer className="layoutDefault__footer">
          <span>Copyright <CopyrightOutlined /> 2024 by NC Hiếu</span>
        </Footer>
      </Layout>
    </>
  )
}

export default LayoutDefault;
