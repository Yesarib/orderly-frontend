import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { RiListIndefinite } from "react-icons/ri";
import { HiOutlineTableCells } from "react-icons/hi2";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbReportAnalytics, TbShoppingBagCheck } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";



import Home from "./pages/dashboard/Home"
import OrderControl from "./pages/dashboard/OrderControl";
import Table from "./pages/dashboard/Table";
import Product from "./pages/dashboard/Product";
import Analytic from "./pages/dashboard/Analytic";
import SignIn from "./pages/auth/SignIn";
import { ReactElement } from "react";
import Kitchen from "./pages/dashboard/Kitchen";
import Person from "./pages/dashboard/Person";
import Authorize from "./pages/dashboard/Authorize";


interface RouteBase {
    icon?: ReactElement;
    name: string;
}

interface MainRoute extends RouteBase {
    path: string;
    element: ReactElement;
    subPaths?: undefined;
}

interface SubRoute extends RouteBase {
    subPaths: {
        icon: ReactElement;
        name: string;
        path: string;
        element: ReactElement;
    }[];
    path?: undefined;
    element?: undefined;
}

type Route = MainRoute | SubRoute;

export const routes: { layout: string; pages: Route[] }[] = [
    {
        layout: 'dashboard',
        pages: [
            {
                icon: <IoHomeOutline />,
                name: 'Ana Sayfa',
                path: '/home',
                element: <Home />
            },
            {
                icon: <TbShoppingBagCheck />,
                name: 'Siparişler',
                path: '/orders',
                element: <OrderControl />
            },
            {
                icon: <RiListIndefinite />,
                name: 'Tanımlamalar',
                subPaths: [
                    {
                        icon: <HiOutlineTableCells />,
                        name: 'Masalar',
                        path: '/tables',
                        element: <Table />
                    },
                    {
                        icon: <GiForkKnifeSpoon />,
                        name: 'Ürünler',
                        path: '/products',
                        element: <Product />
                    },
                ]
            },
            {
                icon: <CgScreen />,
                name: "Mutfak",
                path: "/kitchen",
                element: <Kitchen />
            },
            {
                icon: <TbReportAnalytics />,
                name: 'Raporlar',
                path: '/analytics',
                element: <Analytic />
            },
            {
                icon: <IoPersonOutline />,
                name: "Kullanıcılar",
                subPaths: [
                    {
                        icon: <IoPersonOutline />,
                        name: "Kullanıcılar",
                        path: '/persons',
                        element: <Person />
                    },
                    {
                        icon: <MdOutlineSecurity />,
                        name: "Yetkilendirme",
                        path: '/authorize',
                        element: <Authorize />
                    },
                ]
            }

        ]
    },
    {
        layout: 'auth',
        pages: [
            {
                name: 'Giriş',
                path: '/sign-in',
                element: <SignIn />
            }
        ]
    },
]

export default routes