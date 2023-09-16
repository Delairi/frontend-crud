const Info = () => {
  return (
    <div className='flex flex-col gap-2'>
          <span>API DEV URL: {import.meta.env.VITE_BASE_URL_DEV}</span>
          <span>API PROD URL: {import.meta.env.VITE_BASE_URL_PROD}</span>
      </div>
  )
}

export default Info
