import React, { useState, useEffect, useRef } from "react"
import $ from 'jquery';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export default function DataTable({ data = [] }) {
  $.DataTable = require('datatables.net')
  const router = useRouter()
  const tableRef = useRef()
  const tableName = "table1"
  const [show, setShow] = useState(true)

  const handleClick = () => {
    router.replace("/booking/" + 1)
  }

  useEffect(() => {
    const options = { responsive: true }
    const table = $(`#${tableName}`).DataTable(options)
    checkLogin()

    return function () {
      table.destroy()
    }
  }, [data])

  const checkLogin = () => {
    if (Cookies.get('role') == 'user') {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  return (
    <div>
      <table className="table table-striped table-bordered" width="100%" id={tableName} ref={tableRef}>
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Support</th>
            <th scope="col">Detail</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width={300}>
              <Image
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                className="d-block w-100 rounded"
                alt="meeting_img1"
                width={300}
                height={200}
                objectFit="cover"
              />
            </td>
            <td>Mark</td>
            <td>10</td>
            <td>@mdo</td>
            <td>1500</td>
            <td>
              {show ? (
                <button type='buttom' className='btn btn-primary' onClick={handleClick}>Book</button>
              ) : (
                <span>please log in !</span>
              )}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Support</th>
            <th scope="col">Detail</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </tfoot>
      </table>
    </div >
  )
}
