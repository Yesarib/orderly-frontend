import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { RiListIndefinite } from "react-icons/ri";
import { HiOutlineTableCells } from "react-icons/hi2";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbReportAnalytics, TbShoppingBagCheck } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GrCafeteria } from "react-icons/gr";


import Home from "./pages/dashboard/Home"
import OrderControl from "./pages/dashboard/OrderControl";
import Table from "./pages/dashboard/definitions/Table";
import Product from "./pages/dashboard/definitions/Product";
import Analytic from "./pages/dashboard/analtyics/Analytic";
import SignIn from "./pages/auth/SignIn";
import { ReactElement } from "react";
import Kitchen from "./pages/dashboard/Kitchen";
import Person from "./pages/dashboard/persons/Person";
import Authorize from "./pages/dashboard/persons/UserAuthorize";
import CafeSettings from "./pages/dashboard/settings/CafeSettings";
import { FiPrinter } from "react-icons/fi";
import PrinterSettings from "./pages/dashboard/settings/PrinterSettings";


interface RouteBase {
    icon?: ReactElement;
    name: string;
}

interface MainRoute extends RouteBase {
    path: string;
    title?: string,
    element: ReactElement;
    subPaths?: undefined;
}

interface SubRoute extends RouteBase {
    subPaths: {
        icon: ReactElement;
        name: string;
        path: string;
        element: ReactElement;
        title?: string
    }[];
    path?: undefined;
    element?: undefined;
}

type Route = MainRoute | SubRoute;

export const routes: { layout: string; title?: string, pages: Route[] }[] = [
    {
        layout: 'dashboard',
        title: "Ana Sayfa",
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
                        title: "",
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
                ],
            },
            {
                icon: <CgScreen />,
                name: "Mutfak",
                path: "/kitchen",
                element: <Kitchen />
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
            },
            {
                icon: <TbReportAnalytics />,
                name: 'Raporlar',
                path: '/analytics',
                element: <Analytic />
            },
            {
                icon: <CiSettings />,
                name: 'Ayarlar',
                subPaths: [
                    {
                        icon: <GrCafeteria />,
                        name: 'Cafe Ayarları',
                        path: '/cafe-settings',
                        element: <CafeSettings />
                    },
                    {
                        icon: <FiPrinter />,
                        name: 'Yazıcı Ayarları',
                        path: '/printer-settings',
                        element: <PrinterSettings />
                    }
                ]
            }
        ]
    },
    {
        layout: 'auth',
        pages: [
            {
                icon: <TbReportAnalytics />,
                name: 'Giriş',
                path: '/sign-in',
                element: <SignIn />
            }
        ]
    },
]

export default routes