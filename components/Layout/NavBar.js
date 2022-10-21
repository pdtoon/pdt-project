import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookies from 'js-cookie'

export default function NavBar() {
  const router = useRouter()
  const [show, setShow] = useState(false)

  useEffect(() => {
    checkLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cookies.get('role')]);

  const onLogOut = () => {
    Cookies.remove('role')
    checkLogin()
    router.push("/")
  }

  const checkLogin = () => {
    if (Cookies.get('role') == 'user') {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/"><a className="navbar-brand">LOGO</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page" >Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link" >About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/promotion">
                  <a className="nav-link">Promotion</a>
                </Link>
              </li>
            </ul>

            <div className="d-flex gap-3">
              {show ? (
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle"
                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link href="/mybooking">
                        <a class="dropdown-item">My Booking</a>
                      </Link>
                    </li>
                    <li><button class="dropdown-item" onClick={onLogOut}>Log Out</button></li>
                  </ul>
                </div>
              ) : (
                <Link href="/login">
                  <a className="btn btn-light">Log In</a>
                </Link>
              )}

              <Link href="/booking">
                <a className="btn btn-primary">BOOK NOW</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
