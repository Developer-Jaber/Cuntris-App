import { NavLink } from 'react-router'

export default function Navber () {
  return (
    <div>
      <div className='shadow-sm px-10 py-5 navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='lg:hidden btn btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='z-1 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content'
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className='text-xl btn btn-ghost'>Countris</a>
        </div>
        <div className='hidden lg:flex navbar-center'>
          <ul className='px-1 menu menu-horizontal'>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <a className='btn'>Button</a>
        </div>
      </div>
    </div>
  )
}
