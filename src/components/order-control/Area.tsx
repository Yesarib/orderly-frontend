import { Card, CardBody, IconButton, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { useState } from 'react'
import { areas, orders, products } from '../../mock_data';
import { SlOptionsVertical } from 'react-icons/sl';
import { calculateTotalPrice } from '../../utils/calc-total-price';
import { Link } from 'react-router-dom';



const Area = () => {
  const [activeTab, setActiveTab] = useState(areas[0]?._id || 1);

  return (
    <div>
      <Tabs value={activeTab}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto'>
          <TabsHeader className="bg-transparent border-b"
            indicatorProps={{
              className: "bg-green-900/50 shadow-none",
            }}>
            {areas.map((area) => (
              <Tab key={area._id} value={area._id} onClick={() => setActiveTab(area._id)}>
                <Typography className={`font-inter font-semibold ${activeTab === area._id ? "text-white" : "text-gray-600"} tracking-wider`}> {area.name} </Typography>
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <TabsBody className='w-full h-screen' >
          {areas.map((area) => (
            <TabPanel key={area._id} value={area._id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 mx-auto ">
                {area.tables.map((table) => {
                  const orderForTable = orders.find((order) => order.tableId === table._id);
                  const totalPrice = orderForTable ? calculateTotalPrice(orderForTable.items, products) : 0;
                  return (
                    <div>
                      {orderForTable ? (
                        <Card
                          key={table._id}
                          className={`h-36 cursor-pointer rounded-md border border-gray-500/50 shadow-gray-500/50 ${orderForTable ? "bg-red-500/50" : ""}`}
                        >
                          <Link to={`/order/${table._id}`}>
                            <CardBody className='flex flex-col'>
                              <div className='flex px-1 justify-between items-center'>
                                <div className='flex flex-col -space-y-0.5'>
                                  <Typography className='text-start font-inter font-semibold'>
                                    {table.name}
                                  </Typography>
                                  <Typography variant='small' className={`font-inter ${orderForTable ? "flex" : "hidden"}`}> User Name </Typography>
                                </div>
                                <div className='flex justify-end'>
                                  <IconButton variant='text'>
                                    <SlOptionsVertical className='text-md' />
                                  </IconButton>
                                </div>
                              </div>
                              <div className={`lg:mt-4 justify-center items-center ${orderForTable ? "flex" : "hidden"}`}>
                                <Typography className='text-black font-inter font-bold text-lg'> ₺{totalPrice.toFixed(2)} </Typography>
                              </div>
                              <div className={`${orderForTable ? "flex" : "hidden"}`}>
                                <Typography variant='small' className='font-inter'> 2s 32dk </Typography>
                              </div>
                            </CardBody>
                          </Link>
                        </Card>
                      ) : (
                        <Card
                          key={table._id}
                          className={`flex justify-center items-center h-36 cursor-pointer rounded-md border border-gray-500/50 shadow-gray-500/50`}
                        >
                          <CardBody className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center'>
                              <Typography className='text-center font-inter font-semibold'>
                                {table.name}
                              </Typography>
                            </div>
                          </CardBody>
                        </Card>
                      )}
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default Area