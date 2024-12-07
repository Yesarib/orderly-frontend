import { useLocation } from "react-router-dom";
import OrderNavbar from "../../components/order/OrderNavbar"
import OrderSidenav from "../../components/order/OrderSidenav"
import { orders, products } from "../../mock_data";

const Order = () => {
  const location = useLocation();
  const tableId = location.pathname.split('/order/')[1];

  const order = orders.find((order) => order.tableId === tableId);

  const totalAmount = order?.items.reduce((total, item) => {
    const product = products.find((prod) => prod.id === item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div className='w-full flex'>
      <div className='lg:w-[30%]  h-screen'>
        <OrderSidenav order={order} totalAmount={totalAmount} tableId={tableId}/>
      </div>
      <div className='w-full'>
        <OrderNavbar order={order} />

      </div>
    </div>
  )
}

export default Order