import React from 'react'
import { useRouteError } from 'react-router'

export default function Error() {
  const error = useRouteError()
  console.log(error);
  
  return (
    <div className='text-gray-950'>
      <h1>{error.status} {error.statusText} Oops! Something went wrong.</h1>
      <p>{error.error?.message}</p>
      <p>{error.data}</p>
      <p>An error occurred.</p> {/* General error message */}
      <p>The page you are looking for does not exist.</p> {/* 404 message */}
      <p>Please try again later or go back to the <a href="/">home page</a>.</p>
    </div>
  )
}
