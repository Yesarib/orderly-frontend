import { Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Area from "../../components/order/Area";

const Order = () => {
  const [activeTab, setActiveTab] = useState('area');


  return (
    <div className='w-full flex flex-col'>
      <Tabs value={activeTab}>
        <TabsHeader className="bg-transparent border-b"
          indicatorProps={{
            className: "bg-green-900/50 shadow-none",
          }}>
          <Tab value={"area"} onClick={() => setActiveTab('area')}>
            <Typography className={`font-inter font-semibold ${activeTab === 'area' ? "text-white" : "text-gray-600"} tracking-wider`}> Bölgeler </Typography>
          </Tab>
          <Tab value={"orders"} onClick={() => setActiveTab('orders')}>
            <Typography className={`font-inter font-semibold ${activeTab === 'orders' ? "text-white" : "text-gray-600"} tracking-wider`}> Siparişler </Typography>
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value={activeTab}>
            {activeTab === "area" ? (
              <Area />
            ) : (
              <div></div>
            )}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default Order;
