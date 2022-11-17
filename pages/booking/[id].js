import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const AddOnBooking = () => {
  const router = useRouter()
  const [alldata, setAlldata] = useState([])


  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [support, setSupport] = useState("")

  const [start, setStart] = useState("")
  const [stop, setStop] = useState("")
  const [total, setTotal] = useState(0)



  useEffect(() => {
    axios.get("http://localhost:4000/meetingroom/" + router.query.id).then((res) => {
      setName(res.data.name)
      setPrice(res.data.price)
      setSupport(res.data.support)
    })

    axios.get("http://localhost:4000/addonservice").then((res) => setAlldata(res.data))
  }, [])


  const handleBooking = () => {
    //router.replace("/mybooking")
    console.log(router.query.id + "/")
    console.log(start + "/")
    console.log(stop + "/")
    console.log(price + "/")

    axios.post("http://localhost:4000/reservation", {
      userid: 1,
      meetingroomid: router.query.id,
      start: start,
      stop: stop,
      totalprice: price,
      status: 0

    }).then((res) => console.log(res.data))

  }

  return (
    <>
      <main className='pt-5'>
        <Link href="/booking">
          <a className='btn btn-outline-secondary'>Back</a>
        </Link>
        <hr />
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span>Your cart</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">{name}</h6>
                  <small className="text-muted">support {support} people</small>
                </div>
                <span className="text-muted">{price} ฿</span>
              </li>
            </ul>

            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Add-on Service</h6>
                  <small className="text-muted">amount 10 items</small>
                </div>
                <span className="text-muted">200 ฿</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Add-on Service</h6>
                  <small className="text-muted">amount 10 items</small>
                </div>
                <span className="text-muted">200 ฿</span>
              </li>
            </ul>

            <div className="p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <button type="button" className="btn btn-secondary">Redeem</button>
              </div>
            </div>

            <div className="p-2">
              <labal htmlFor='total'>Total Price</labal>
              <input type="number" className="form-control" name='total' id='total' readOnly value={total} />
            </div>

            <hr />

            <div className="p-2">
              <button type="button" className="btn btn-primary w-100" onClick={handleBooking}>Booking Now</button>
            </div>
          </div>

          <div className="col-md-7 col-lg-8">
            <div className='row mb-3'>
              <div className="col-sm-6">
                <h6>Start</h6>
                <input type="date" className="form-control" id="start" required value={start} onChange={(e) => setStart(e.target.value)} />
                <div className="invalid-feedback">
                  Valid Start is required.
                </div>
              </div>
              <div className="col-sm-6">
                <h6>Stop</h6>
                <input type="date" className="form-control" id="stop" required value={stop} onChange={(e) => setStop(e.target.value)} />
                <div className="invalid-feedback">
                  Valid Stop is required.
                </div>
              </div>
            </div>

            <h4 className="mb-3">Add-on Service</h4>
            <hr className="my-4" />
            <table className="table table-striped table-bordered" width="100%">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>

                {alldata.map((v) => (
                  <tr>
                    <td>{v.name}</td>
                    <td width={100}>{v.price}</td>
                    <td width={100}><input className="form-control" type="text"></input></td>
                    <td width={50}><button type="button" className="btn btn-primary">ADD</button></td>
                  </tr>
                ))}


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
          </div>
        </div>
      </main>
    </>
  )
}

export default AddOnBooking