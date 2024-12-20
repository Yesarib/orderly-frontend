import { Card, Typography } from "@material-tailwind/react"
import { packetDetail } from "../../mock_data"

const TABLE_HEAD = ['Durum', 'Tutar', 'Ödeme Tarihi', 'Ödeme Tipi']

const PaymentSummaries = () => {
  return (
    <div className="w-full mt-3">
      <Card className="p-4">
        <div>
          <Typography variant="h5" className="font-serif font-semibold"> Ödemeler </Typography>
        </div>
        <table className="w-full min-w-max table-auto text-left mt-4">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="className=" font-normal leading-none opacity-70> {head} </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {packetDetail.payments.map((payment, i) => {
              const isLast = i === packetDetail.payments.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={i}>
                  <td className={classes}>
                    <div className="w-28">
                      <Typography variant="small" className={`p-2 rounded-full font-inter text-white ${payment.status === 'Onaylandı' ? 'bg-green-600' : 'bg-red-600'}`}> {payment.status} </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      ₺{payment.amount.toFixed(2)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      {payment.paymentDate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      {payment.paymentType}
                    </Typography>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default PaymentSummaries