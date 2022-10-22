import React from 'react'
import DataTable from '../../components/Booking/DataTable'


const Booking = () => {
  const allData = [{ id: 1 }]

  return (
    <>
      <main className='pt-5'>
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span>List Meeting Room</span>
        </h4>
        <hr />
        <DataTable data={allData} />
      </main>
    </>
  )
}

export default Booking