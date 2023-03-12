export const Calculator = ({ children }) => {
  return (
    <>
      <div className='flex'>

        {/* Seccion de la calculadora */}

        <div className='p-6'>
          {children}
        </div>

      </div>
    </>
  )
}

export default Calculator
