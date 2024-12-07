import React from 'react'
import { User } from '../../types/user'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react'

interface PersonDetailProps {
  user: User,
  open: boolean,
  handleOpen: () => void

}

const PersonDetail: React.FC<PersonDetailProps> = ({ user, open, handleOpen }) => {
  return (
    <div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple modal.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}

export default PersonDetail