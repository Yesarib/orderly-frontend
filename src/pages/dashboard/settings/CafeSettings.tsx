import { Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react'
import { CiSettings } from 'react-icons/ci'
import GeneralSettings from '../../../components/settings/GeneralSettings'
import PaymentSettings from '../../../components/settings/PaymentSettings'
import AddressInformation from '../../../components/settings/AddressInformation'
import { companyInfo } from '../../../mock_data'

const CafeSettings = () => {


  const TAB_DATA = [
    {
      title:'Genel Ayarlar',
      value: 'general-settings',
      element: <GeneralSettings company={companyInfo} />
    },
    {
      title:"Ödeme Ayaları",
      value:'payment-settings',
      element: <PaymentSettings />
    },
    {
      title:'Adres Bilgileri',
      value:'address-information',
      element: <AddressInformation company={companyInfo} />
    }
  ]
  

  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='lg:w-11/12 border  border-gray-200 bg-white flex flex-col p-12'>
        <div className='flex justify-between items-center'>
          <div className="flex items-center gap-4">
            <div className='p-6 bg-gradient-to-tl from-green-600 to-green-300 rounded-xl'>
              <CiSettings className='text-4xl text-white' />
            </div>
            <div className='flex flex-col'>
              <Typography className='font-inter font-semibold' variant='h6'>
                Cafe Tanımlamaları
              </Typography>
              <Typography variant="small" className='font-inter'> Restaurantınız ile ilgili tanımlamaları bu alandan yapabilirsiniz.
              </Typography>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <Tabs value="general-settings">
            <TabsHeader>
              {TAB_DATA.map((head,i) => (
                <Tab value={head.value} key={i}>
                  {head.title}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {TAB_DATA.map((data,i) => (
                <TabPanel key={i} value={data.value}>
                  {data.element}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default CafeSettings