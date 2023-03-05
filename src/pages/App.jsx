import NavBar from '../components/SideBar'

export const App = ({ children }) => {
  return (
    <>
      <div className='flex'>
        <NavBar />

        {/* Seccion de la calculadora */}

        <div className='p-6'>
          {children}
        </div>

      </div>
    </>
  )
}

export default App
