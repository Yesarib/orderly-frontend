import React from 'react'
import { User } from '../../types/user'
import { Button, Card, Input, Typography } from '@material-tailwind/react'
import { IoPersonOutline } from 'react-icons/io5'

interface UserInformationProps {
  user: User
}

const UserInformation: React.FC<UserInformationProps> = ({ user }) => {  
  return (
    <div className='w-full flex flex-col items-center mt-4 rounded-xl'>
      <Card className='w-1/2 flex flex-col bg-white p-4 justify-center'>
        <div className='p-4 flex gap-2 items-center'>
          <div className='p-2 rounded-md bg-gradient-to-bl from-green-600 to-green-300'>
            <IoPersonOutline className='text-4xl text-white' />
          </div>
          <div className='flex flex-col'>
            <Typography variant='h5' className='font-inter'> Profil </Typography>
            <Typography className='font-inter text-[12px]'> Kullanıcı bilgilerinizi güncelleyebilirsiniz.</Typography>
          </div>
        </div>
        <div className='flex flex-col px-8 mt-2 lg:space-y-6'>
          <Input type="text" variant="standard" defaultValue={user ? user.fullName : ""} label="İsim Soyisim" required crossOrigin={undefined} />
          <Input type="tel" variant="standard" defaultValue={user ? user.phoneNumber : ""} label="Telefon Numarası" required crossOrigin={undefined} />
          <Input type="email" variant="standard" defaultValue={user ? user.email : ""} label="Email" required crossOrigin={undefined} />
          <Input type="text" variant="standard" defaultValue={""} label="Pin Numarası" required crossOrigin={undefined} />
        </div>
        <div className='flex justify-end mt-6 mr-6'>
          <Button className='px-8 py-2 capitalize bg-green-600 rounded-md'>
            <Typography variant='h6' className='font-inter text-white'> Kaydet </Typography>
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default UserInformation