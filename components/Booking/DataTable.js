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
    console.log(data)
  }

  const handleClick = (id) => {
    router.replace("/booking/" + id)
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



        {data.map((v) => (
                         <tr>
                         <td width={300}>
                           <Image
                             src={!v.Image && "https://images.unsplash.com/photo-1660901714052-ba6957feba6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                             className="d-block w-100 rounded"
                             alt="meeting_img1"
                             width={300}
                             height={200}
                             objectFit="cover"
                           />
                         </td>
                         <td>{v.name}</td>
                         <td>{v.support}</td>
                         <td>{v.detail}</td>
                         <td>{v.price}</td>
                         <td>
                           {show ? (
                             <button type='buttom' className='btn btn-primary' onClick={()=>handleClick(v.id)}>Book</button>
                           ) : (
                             <span>please log in !</span>
                           )}
                         </td>
                       </tr>
                    ))}

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
