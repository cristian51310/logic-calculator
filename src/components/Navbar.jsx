const Navbar = (props) => {
  const { brandText } = props

  return (
    <nav className='sticky z-40 flex items-center justify-between bg-gradient-to-r from-blue-900 to-purple-800 text-white py-4'>
      <p className='ml-[32px] text-5xl capitalize'>
        {brandText}
      </p>
    </nav>
  )
}

export default Navbar
