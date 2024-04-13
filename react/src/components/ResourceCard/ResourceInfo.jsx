import React from 'react'

function ResourceInfo ({ info }) {
  return (
    <>
      <p className='truncate tracking-wide'>{info.title}</p>
    </>
  )
}

export { ResourceInfo }