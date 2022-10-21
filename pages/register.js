import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("test");
  }
  return (
    <div className='p-4'>
      <main className="form-signin m-auto" style={{ width: '500px' }}>
        <div className="card">
          <Image
            src="https://images.unsplash.com/photo-1594125675297-a8dee22b0350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="card-img-top"
            alt="meeting_img1"
            width={500}
            height={300}
          />
          <div className="card-body">
            <form className="needs-validation" onSubmit={handleSubmit}>
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
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register