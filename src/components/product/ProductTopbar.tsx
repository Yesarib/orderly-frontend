import { Input, Typography } from '@material-tailwind/react'
import { MdLibraryAdd } from "react-icons/md";
import { Link } from 'react-router-dom';

const ProductTopbar = () => {
    return (
        <div className='w-full p-2 flex justify-between items-center'>
            <div>
                <div className="ml-2 md:w-96">
                    <Input label="Search" crossOrigin={undefined} className='rounded-xl' />
                </div>
            </div>
            <div>
                <Link to={""} className="lg:mr-4 flex fonti gap-1 items-center justify-center capitalize bg-transparent text-gray-700 shadow-none"
                // onClick={() => handleOperationClick(opr)}
                >
                    <MdLibraryAdd className="text-2xl text-green-600" />
                    <Typography className="font-semibold font-serif" variant="small"> Ürün Ekle </Typography>
                </Link>
            </div>
        </div>
    )
}

export default ProductTopbar