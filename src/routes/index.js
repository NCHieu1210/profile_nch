
import LayoutDefault from "../layout/LayoutDefault";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Banking from "../pages/Banking";
import Video from "../pages/Video";
import CreQRCode from "../pages/CreQRCode";


export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "banking",
        element: <Banking />
      }, {
        path: "video",
        element: <Video />
      },
      {
        path: "creqrcode",
        element: <CreQRCode />
      },
      {
        path: "*",
        element: <Error404 />
      }
    ]
  }
]