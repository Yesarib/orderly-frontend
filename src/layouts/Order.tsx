import { Route, Routes } from 'react-router-dom'
import OrderSidenav from '../components/layout/order/OrderSidenav'
import OrderNavbar from '../components/layout/order/OrderNavbar'
import OrderPage from '../pages/dashboard/Order'


const Order = () => {
    return (
        <div className='min-h-screen w-full flex'>
            <div className='lg:w-[30%]  h-screen'>
                <OrderSidenav />
            </div>
            <div className='w-full p-2'>
                <OrderNavbar />
                <Routes>
                    <Route path='/:tableId' element={<OrderPage />} />
                </Routes>
            </div>

        </div>
    )
}

export default Order