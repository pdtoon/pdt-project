import React from 'react'

const PaymentCard = () => {
  return (
    <>
      <div>
        <h4 className="mb-3">Payment</h4>
        <form className="needs-validation" novalidate="">
          <hr className="my-4" />
          <div className="my-3">
            <div className="form-check">
              <input id="kbank" name="paymentMethod" type="radio" className="form-check-input" />
              <label className="form-check-label" htmlFor="credit">KBANK</label>
            </div>
            <div className="form-check">
              <input id="scb" name="paymentMethod" type="radio" className="form-check-input" />
              <label className="form-check-label" htmlFor="debit">SCB</label>
            </div>
            <div className="form-check">
              <input id="paybycash" name="paymentMethod" type="radio" className="form-check-input" />
              <label className="form-check-label" htmlFor="paypal">Pay By Cash</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="amount" className="form-label">Amount</label>
              <input type="text" className="form-control" id="amount" />
              <div className="invalid-feedback">
                Amount is required
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="slip" className="form-label">Slip</label>
              <input type="file" className="form-control" id="slip" />
              <div className="invalid-feedback">
                Slip is required
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">Confirm</button>
        </form>
      </div>
    </>
  )
}

export default PaymentCard