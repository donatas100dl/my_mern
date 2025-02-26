import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../uttils/authContext'
export default function Sidebar() {
  const { user, handleUserLogout } = useAuth()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (user) {
      setUserData(user)
    }
    else {
      setUserData(null)
    }
  },[user])
  return (
    <>
      <div className='flex h-screen w-50 sm:pr-5 flex-col justify-between border-e bg-white'>
        <div className='px-4 py-6'>
          <Link
            className='grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600'
            to={'/'}
          >
            Logo
          </Link>

          <ul className='mt-6 space-y-1'>
            <li>
              <Link
                to='/'
                className='block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700'
              >
                General
              </Link>
            </li>

            <li>
              <details className='group [&_summary::-webkit-details-marker]:hidden'>
                <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                  <span className='text-sm font-medium'> Teams </span>

                  <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </summary>

                <ul className='mt-2 space-y-1 px-4'>
                  <li>
                    <a
                      href='#'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Banned Users
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              >
                Billing
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              >
                Invoices
              </a>
            </li>

            <li>
              <details className='group [&_summary::-webkit-details-marker]:hidden'>
                <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                  <span className='text-sm font-medium'> Account </span>

                  <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </summary>

                <ul className='mt-2 space-y-1 px-4'>
                  <li>
                    <a
                      href='#'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Security
                    </a>
                  </li>

                  <li>
                    <form action='#'>
                      <button
                        type='submit'
                        className='w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700'
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className='sticky inset-x-0 bottom-0 border-t border-gray-100'>
          {userData ? (
            <Link to='/'
              className='flex items-center gap-2 bg-white p-4 relative group hover:bg-gray-50'
            >
              <img
                alt=''
                src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                className='size-10 rounded-full object-cover'
              />

              <div >
                <p className='text-xs'>
                  <span className='block text-nowrap font-medium'>{userData.name}</span>
                  <span>
                    {userData?.email.length < 10
                      ? userData.email
                      : userData.email.substring(0, 11) + '..'}
                  </span>
                </p>
                <div className='absolute  bottom-16 display-flex hidden group-hover:flex  flex-col justify-center items-center whitespace-nowrap bg-white p-1 shadow-md border border-gray-200 rounded cursor-default'>
                <p className='mb-1 border-b-1 border-gray-700 cursor-default'>
                  {userData?.email.length > 10 ? userData.email : ""}
                </p>
                <p className='mt-1 bg-blue-600 hover:bg-opacity-90 py-1 px-3 rounded-sm text-white cursor-pointer'
                onClick={handleUserLogout}
                >

                 Logout
                </p>
                </div>
              </div>
            </Link>
          ) : (
            <div className='flex gap-2 justify-center px-4 py-2'>
              <a
                href='/login'
                className='min-w-[5rem] px-2 py-1 border-[1px] text-center border-gray-500 rounded-lg bg-blue-600 text-white'
              >
                Login
              </a>
              <a
                href='/register'
                className='min-w-[5rem] px-2 py-1 border-[1px] text-center border-gray-500 rounded-lg'
              >
                Sign Up
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
