import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'


const Booking = () => {
    const [alldata, setAlldata] = useState([])
    const [show, setShow] = useState(true)
    const router = useRouter()
    

    useEffect(() => {
      checkLogin()
      axios.get("http://localhost:4000/meetingroom").then((res) => setAlldata(res.data))
  }, [])

  const checkLogin = () => {
    if (Cookies.get('role') == 'user') {
      setShow(true)
    } else {
      setShow(false)
    }
   
  }

  const handleClick = (id) => {
    router.replace("/booking/" + id)
  }
  

  return (
    <>
      <main className='pt-5'>
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span>List Meeting Room</span>
        </h4>
        <hr />
        <table className="table table-striped table-bordered" width="100%">
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



        {alldata.map((v) => (
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
      </main>
    </>
  )
}

export default Booking


   