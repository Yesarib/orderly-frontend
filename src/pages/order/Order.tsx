import { useLocation } from "react-router-dom";
import OrderNavbar from "../../components/order/OrderNavbar"
import OrderSidenav from "../../components/order/OrderSidenav"
import { categories, orders, products } from "../../mock_data";
import { useEffect, useState } from "react";
import Categorybar from "../../components/order/Categorybar";
import CategoryProducts from "../../components/order/CategoryProducts";
import { Order as OrderTypes } from "../../types/Order";

const Order = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0].id || 0);

  const [order, setOrder] = useState<OrderTypes | undefined>({
    id:-1,
    areaId:-1,
    tableId:"",
    items: [],
    status: "hazırlanıyor",
  });

  const location = useLocation();
  const tableId = location.pathname.split('/order/')[1];

  const mockOrder = orders.find((order) => order.tableId === tableId);

  const totalAmount = mockOrder?.items.reduce((total, item) => {
    const product = products.find((prod) => prod.id === item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);


  useEffect(() => {
    if (mockOrder) {
      setOrder(mockOrder);
    }
  }, [mockOrder]);

  return (
    <div className='w-full lg:flex'>
      <div className='lg:w-[30%] h-screen'>
        <OrderSidenav order={order} totalAmount={totalAmount} tableId={tableId} />
      </div>
      <div className='w-full flex flex-col'>
        <OrderNavbar order={order} />
        <Categorybar categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        <CategoryProducts setOrder={setOrder} order={order} categoryId={currentCategory} />
      </div>
    </div>
  )
}

export default Order