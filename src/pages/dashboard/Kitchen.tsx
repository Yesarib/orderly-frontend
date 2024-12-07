import { Button, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react"
import { RiProgress2Line, RiEyeLine, RiSortAlphabetAsc } from "react-icons/ri";
import { orders, } from "../../mock_data";
import { useState } from "react";
import Preparing from "../../components/kitchen/Preparing";
import Prepared from "../../components/kitchen/Prepared";

const Kitchen = () => {
    const [activeTab, setActiveTab] = useState('preparing');

    const preparingOrders = orders.filter((order) => order.status === "preparing") || undefined

    return (
        <div className="flex flex-col lg:mt-4">
            <div className="">

                <Tabs value={activeTab}>
                    <div className="flex justify-end items-center">
                        <Button className="flex gap-2 p-5 items-center h-10 capitalize text-gray-800" variant="text">
                            <RiSortAlphabetAsc className="text-xl" />
                            <Typography variant="small" className="font-semibold font-inter"> Sırala </Typography>
                        </Button>
                        <TabsHeader
                            indicatorProps={{
                                className: "bg-gray-200 shadow-none !text-gray-900 rounded-2xl",
                            }}
                            className="w-full bg-transparent flex justify-end gap-2 lg:mr-8"
                        >

                            <Tab value={"preparing"} onClick={() => setActiveTab('preparing')}>
                                <Button className="flex gap-2 items-center h-10 capitalize text-gray-800" variant="text">
                                    <RiProgress2Line className="text-lg" />
                                    <Typography variant="small" className="font-semibold font-inter"> Hazırlanıyor </Typography>
                                </Button>
                            </Tab>
                            <Tab value={"prepared"} onClick={() => setActiveTab('prepared')}>
                                <Button className="flex gap-2 items-center h-10 capitalize text-gray-800" variant="text">
                                    <RiEyeLine className="text-lg" />
                                    <Typography variant="small" className="font-semibold font-inter"> Hazırlanan Siparişler </Typography>
                                </Button>
                            </Tab>
                        </TabsHeader>
                    </div>
                    <TabsBody>
                        <TabPanel value={activeTab}>
                            {activeTab === "preparing" ? (
                                <Preparing orders={preparingOrders} />
                            ) : (
                                <Prepared />
                            )}
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}

export default Kitchen