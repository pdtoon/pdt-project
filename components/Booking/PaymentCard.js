import React from 'react'

const PaymentCard = () => {
  return (
    <>
      <div>
        <h4 class="mb-3">Payment</h4>
        <form class="needs-validation" novalidate="">
          <hr class="my-4" />
          <div class="my-3">
            <div class="form-check">
              <input id="kbank" name="paymentMethod" type="radio" class="form-check-input" />
              <label class="form-check-label" for="credit">KBANK</label>
            </div>
            <div class="form-check">
              <input id="scb" name="paymentMethod" type="radio" class="form-check-input" />
              <label class="form-check-label" for="debit">SCB</label>
            </div>
            <div class="form-check">
              <input id="paybycash" name="paymentMethod" type="radio" class="form-check-input" />
              <label class="form-check-label" for="paypal">Pay By Cash</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="amount" class="form-label">Amount</label>
              <input type="text" class="form-control" id="amount" />
              <div class="invalid-feedback">
                Amount is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="slip" class="form-label">Slip</label>
              <input type="file" class="form-control" id="slip" />
              <div class="invalid-feedback">
                Slip is required
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg" type="submit">Confirm</button>
        </form>
      </div>
    </>
  )
}

export default PaymentCard