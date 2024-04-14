function ResourceInfo (info) {
  let data = info.info;
  return (
    <>
      <p className='truncate tracking-wide text-gray-900'>{data.name}</p>
    </>
  )
}

export { ResourceInfo }