import { IoMdHome } from "react-icons/io";
import { BsBorderStyle } from "react-icons/bs";
import { FaCheckSquare } from "react-icons/fa";
import { HiOutlineTableCells } from "react-icons/hi2";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";

import Home from "./pages/dashboard/Home"
import Order from "./pages/dashboard/Order";
import Table from "./pages/dashboard/Table";
import Product from "./pages/dashboard/Product";
import Analytic from "./pages/dashboard/Analytic";
import SignIn from "./pages/auth/SignIn";

export const routes = [
    {
        layout: 'dashboard',
        pages: [
            {
                icon: <IoMdHome />,
                name: 'Ana Sayfa',
                path: '/home',
                element: <Home />
            },
            {
                icon: <BsBorderStyle />,
                name: 'Siparişler',
                path: '/orders',
                element: <Order />
            },
            {
                icon: <FaCheckSquare />,
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
                icon: <TbReportAnalytics />,
                name: 'Raporlar',
                path: '/analytics',
                element: <Analytic />
            },
        ]
    },
    {
        layout: 'auth',
        pages: [
            {
                name:'Giriş',
                path:'/sign-in',
                element: <SignIn />
            }
        ]
    }
]

export default routes