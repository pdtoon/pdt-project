import React, { useEffect, useRef } from "react"
import $ from 'jquery';
import { useRouter } from 'next/router'

export default function BookingList({ data = [] }) {
  $.DataTable = require('datatables.net')
  const router = useRouter()
  const tableRef = useRef()
  const tableName = "table1"

  useEffect(() => {
    const options = { responsive: true }
    const table = $(`#${tableName}`).DataTable(options)

    return function () {
      table.destroy()
    }
  }, [data])

  const handlePayment = (data) => {
    router.replace("/booking/payment/" + 1)
  }

  return (
    <div>
      <table className="table table-striped table-bordered" width="100%" id={tableName} ref={tableRef}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Room Name</th>
            <th scope="col">Start</th>
            <th scope="col">Stop</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width={50}>
              <input type="checkbox" className="form-check-input" />
            </td>
            <td>Mark</td>
            <td>10-10-2020</td>
            <td>10-10-2020</td>
            <td>1500</td>
            <td>รอชำระเงิน</td>
            <td width={100}>
              <button type="button" className='btn btn-primary' onClick={handlePayment}>ชำระเงิน</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Room Name</th>
            <th scope="col">Start</th>
            <th scope="col">Stop</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Amount</th>
          </tr>
        </tfoot>
      </table>
    </div >
  )
}
