import React from 'react'
import Link from 'next/link'

const MidCard = () => {
  return (
    <>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Promotion for you</h2>
            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look.
              Then, mix and match with additional component themes and more.</p>
            <Link href="/promotion">
              <a className="btn btn-outline-light">GO NOW</a>
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Sign In</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content.
              Be sure to look under the hood at the source HTML here  adjusted the alignment
              and sizing of both  content for equal-height.</p>
            <Link href="/login">
              <a className="btn btn-outline-secondary">Sign In</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MidCard
