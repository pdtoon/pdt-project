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
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span>Your cart</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Meeting Room</h6>
                  <small class="text-muted">support 10 people</small>
                </div>
                <span class="text-muted">1500 ฿</span>
              </li>
            </ul>

            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Add-on Service</h6>
                  <small class="text-muted">amount 10 items</small>
                </div>
                <span class="text-muted">200 ฿</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Add-on Service</h6>
                  <small class="text-muted">amount 10 items</small>
                </div>
                <span class="text-muted">200 ฿</span>
              </li>
            </ul>

            <div class="p-2">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Promo code" />
                <button type="button" class="btn btn-secondary">Redeem</button>
              </div>
            </div>

            <div class="p-2">
              <labal htmlFor='total'>Total Price</labal>
              <input type="number" class="form-control" name='total' id='total' readOnly />
            </div>

            <hr />

            <div class="p-2">
              <button type="button" class="btn btn-primary w-100" onClick={handleBooking}>Booking Now</button>
            </div>
          </div>

          <div class="col-md-7 col-lg-8">
            <div className='row mb-3'>
              <div class="col-sm-6">
                <h6>Start</h6>
                <input type="date" class="form-control" id="start" />
                <div class="invalid-feedback">
                  Valid Start is required.
                </div>
              </div>
              <div class="col-sm-6">
                <h6>Stop</h6>
                <input type="date" class="form-control" id="stop" />
                <div class="invalid-feedback">
                  Valid Stop is required.
                </div>
              </div>
            </div>

            <h4 class="mb-3">Add-on Service</h4>
            <hr class="my-4" />
            <AddOn />
          </div>
        </div>
      </main>
    </>
  )
}

export default AddOnBooking