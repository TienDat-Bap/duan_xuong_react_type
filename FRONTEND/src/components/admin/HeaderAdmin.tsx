import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HeaderAdmin = (props: Props) => {
  return (
    <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
      <a className='navbar-brand col-md-3 col-lg-2 me-0 px-3' href='#'>
        Company name
      </a>
      <button
        className='navbar-toggler position-absolute d-md-none collapsed'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#sidebarMenu'
        aria-controls='sidebarMenu'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='navbar-nav'>
        <div className='nav-item text-nowrap'>
          <Link className='nav-link px-3' to='/'>
            Sign out
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin
