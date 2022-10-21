import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import NavBar from '../components/Layout/NavBar'
import SideBar from '../components/Layout/SideBar'
import Footer from '../components/Layout/Footer'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'datatables.net-bs5'
import 'datatables.net-responsive-bs5'

function MyApp({ Component, pageProps }) {
  const [role, setRole] = useState('')

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    setRole(Cookies.get('role'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cookies.get('role')]);

  if (role == "admin") {
    return (
      <>
        <SideBar>
          <Component {...pageProps} />
        </SideBar>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <NavBar />
        <main className="main-page container">
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
    )
  }
}

export default MyApp
