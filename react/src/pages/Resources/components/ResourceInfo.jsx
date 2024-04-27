function ResourceInfo (info) {
  let data = info.info;
  return (
    <>
      <p className='truncate tracking-wid font-bold'>{data.title}</p>
    </>
  )
}

export { ResourceInfo }