import React from 'react'

const HeroesMid = () => {
  return (
    <>
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light mb-5">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="first name" />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="last name" />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" id="username" placeholder="Username" />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="******" />
                <div className="invalid-feedback">
                  Your password is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                <div className="invalid-feedback">
                  Your email is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="tel" className="form-label">Tel</label>
                <input type="tel" className="form-control" id="tel" placeholder="0123456789" />
                <div className="invalid-feedback">
                  Your tel is required.
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <button className="w-100 btn btn-primary btn-lg" type="submit">Sign Up</button>
            <hr className="my-4" />
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          </form>
        </div>

        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Sign Up for more service</h1>
          <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstraps
            form controls. Each required form group has a validation state that can be triggered
            by attempting to submit the form without completing it.</p>
        </div>
      </div>
    </>
  )
}

export default HeroesMid