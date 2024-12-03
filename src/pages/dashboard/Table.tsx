import { Typography } from '@material-tailwind/react'
import { HiOutlineTableCells } from 'react-icons/hi2'
import RegionTableOpr from '../../components/table/RegionTableOpr'
import TableList from '../../components/table/TableList'
import { areas } from '../../mock_data' 

const Table = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full p-4 flex justify-between items-center shadow-sm shadow-gray-700 rounded-xl'>
        <div className='flex gap-4'>
          <HiOutlineTableCells className='text-4xl' />
          <div className='flex flex-col'>
            <Typography variant='h5' className='font-mono'> Masa / Bölgeler </Typography>
            <Typography variant='small' className='font-roboto'> İşletmenize ait masa ve bölgeleri bu ekrandan düzenleyebilirsiniz. </Typography>
          </div>
        </div>
        <RegionTableOpr />
      </div>
      <TableList areas={areas} />
    </div>
  )
}

export default Table