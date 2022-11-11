import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function SideBar({ children }) {
  const router = useRouter()

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark text-white">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="#" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>

              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-white" id="menu">


              <li>
                <Link href="/admin/reservation/reservation" passHref>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people text-white"></i>
                    <span className="ms-1 d-none d-sm-inline text-white">Reservation</span>
                  </a>
                  </Link>
                </li>

                <li className="nav-item">
                <Link href="/admin" passHref>
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house text-white"></i> <span className="ms-1 d-none d-sm-inline text-white">Home</span>
                  </a>
                  </Link>
                </li>

                <li>
                <Link href="/admin/meetingroom/meetingroom" passHref>
                  <a className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-speedometer2 text-white"></i>
                    <span className="ms-1 d-none d-sm-inline text-white">Meetingroom</span>
                  </a>
                  </Link>
                </li>

                <li>
                <Link href="/admin/equipment/equipment" passHref>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table text-white"></i>
                    <span className="ms-1 d-none d-sm-inline text-white">Equipment</span>
                  </a>
                  </Link>

                </li>

                <li>
                <Link href="/admin/addonservice/addonservice" passHref>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people text-white"></i>
                    <span className="ms-1 d-none d-sm-inline text-white">Add-on service</span>
                  </a>
                  </Link>
                </li>

                <li>
                <Link href="/admin/promotion/promotion" passHref>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people text-white"></i>
                    <span className="ms-1 d-none d-sm-inline text-white">Promotion</span>
                  </a>
                  </Link>
                </li>

                <li>
                <Link href="/admin/customer/customer" passHref>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people text-white"></i>
                    <span className="ms-1 d-none d-sm-inline text-white">Customers</span>
                  </a>
                  </Link>
                </li>

                <hr className="dropdown-divider text-white" />

                <li>
                  <a href="#" className="nav-link px-0 align-middle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-circle text-white"></i>
                    <span className="ms-1 d-none d-sm-inline text-white">ADMIN</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#" onClick={() => {
                      Cookies.remove('role')
                      router.replace("/")
                    }}>Sign out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="col py-3">
            <div className='container'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
