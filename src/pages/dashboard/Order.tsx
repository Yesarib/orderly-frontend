import React from 'react'
import { useParams } from 'react-router-dom';

const Order = () => {
  const { tableId } = useParams();
  console.log(tableId);

  return (
    <div className='w-full'>Order</div>
  )
}

export default Order