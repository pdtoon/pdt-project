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
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td width={100}>1500</td>
            <td width={100}>
              <input className="form-control" type="text"></input>
            </td>
            <td width={50}>
              <button type="button" className="btn btn-primary">ADD</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </tfoot>
      </table>
    </div >
  )
}
