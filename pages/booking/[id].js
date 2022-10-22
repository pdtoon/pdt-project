import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AddOn from '../../components/Booking/AddOn'

const AddOnBooking = () => {
  const router = useRouter()

  const handleBooking = () => {
    router.replace("/mybooking")
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
                  <h6 className="my-0">Meeting Room</h6>
                  <small className="text-muted">support 10 people</small>
                </div>
                <span className="text-muted">1500 ฿</span>
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
              <input type="number" className="form-control" name='total' id='total' readOnly />
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
                <input type="date" className="form-control" id="start" />
                <div className="invalid-feedback">
                  Valid Start is required.
                </div>
              </div>
              <div className="col-sm-6">
                <h6>Stop</h6>
                <input type="date" className="form-control" id="stop" />
                <div className="invalid-feedback">
                  Valid Stop is required.
                </div>
              </div>
            </div>

            <h4 className="mb-3">Add-on Service</h4>
            <hr className="my-4" />
            <AddOn />
          </div>
        </div>
      </main>
    </>
  )
}

export default AddOnBooking