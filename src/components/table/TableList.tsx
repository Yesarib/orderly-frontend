import { Card, CardBody, IconButton, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";

interface Table {
  _id: string
  name: string;
}

interface Area {
  _id: string;
  name: string;
  tables: Table[];
}

interface TableListProps {
  areas: Area[];
}

const TableList: React.FC<TableListProps> = ({ areas }) => {

  const [activeTab, setActiveTab] = useState(areas[0]?._id || "");

  return (
    <div className='mt-4 w-full h-screen'>
      <Tabs>
        <TabsHeader>
          {areas.map((area) => (
            <Tab key={area._id} value={area._id} onClick={() => setActiveTab(area._id)}>
              {area.name}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className='w-full h-screen' >
          {areas.map((area) => (
            <TabPanel key={area._id} value={area._id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 container mx-auto px-4">
                {area.tables.map((table) => (
                  <Card key={table._id} className="h-36 cursor-move shadow-sm rounded-sm border shadow-gray-700">
                    <CardBody className='flex flex-col'>
                      <div className='flex justify-end'>
                        <IconButton variant='text'>
                          <MdEdit className='text-xl text-green-600'/>
                        </IconButton>
                      </div>
                      <Typography className='text-center'>
                        {table.name}
                      </Typography>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default TableList

