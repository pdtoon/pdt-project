import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  const router = useRouter()

  const onLogin = () => {
    let role = 'user'
    Cookies.set('role', role)

    if (role == 'admin') {
      router.replace("/admin")
    } else {
      router.replace("/")
    }
  }

  return (
    <div className='p-4'>
      <main className="form-signin m-auto" style={{ width: '500px' }}>
        <div className="card">
          <Image
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="card-img-top"
            alt="meeting_img1"
            width={500}
            height={350}
            layout="responsive"
            objectFit="cover"
          />
          <div className="card-body">
            <div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" />
                <div id="emailHelp" className="form-text">We never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="button" onClick={onLogin} className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
        <div className='text-center m-3'>
          <Link href="/register">
            <a className="btn btn-link btn-lg">Create a Sign Up</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Login