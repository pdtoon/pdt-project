import React, { useEffect, useRef } from "react"
import $ from 'jquery';

export default function AddOn({ data = [] }) {
  $.DataTable = require('datatables.net')
  const tableRef = useRef()
  const tableName = "table1"

  useEffect(() => {
    const options = { responsive: true }
    const table = $(`#${tableName}`).DataTable(options)

    return function () {
      table.destroy()
    }
  }, [data])

  return (
    <div>
      <table className="table table-striped table-bordered" width="100%" id={tableName} ref={tableRef}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width={50}>
              <input type="checkbox" className="form-check-input" />
            </td>
            <td>Mark</td>
            <td>1500</td>
            <td width={100}>
              <input class="form-control" type="text"></input>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
          </tr>
        </tfoot>
      </table>
    </div >
  )
}
