import { useTranslation } from 'react-i18next'

export function SimpleTable ({ numeros }) {
  return (
    <table className=' border-spacing-y-1 text-gray-100 border-separate space-y-6 text-md'>
      <thead className='bg-gradient-to-tr from-blue-800 to-purple-700  text-white'>
        <tr className='text-center'>
          <th className='p-3 px-9 rounded-tl-md'>In</th>
          <th className='p-3 px-9 rounded-tr-md '>Out</th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-blue-700'>
          <td className='p-3 px-9 text-center'>
            {numeros[0][0]}
          </td>
          <td className='p-3 px-9 text-center'>
            {numeros[0][1]}
          </td>
        </tr>
        <tr className='bg-blue-700'>
          <td className='p-3 px-9 text-center rounded-bl-md '>
            {numeros[1][0]}
          </td>
          <td className='p-3 px-9 text-center rounded-br-md'>
            {numeros[1][1]}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export function Table ({ numeros }) {
  const { t } = useTranslation()
  return (
    <table className=' border-spacing-y-1 text-gray-100 border-separate space-y-6 text-md'>
      <thead className='bg-gradient-to-tr from-blue-800 to-purple-700  text-white'>
        <tr>
          <th colSpan='3' className='p-3 px-9 col-span-3 rounded-t-md'>{t('table_title')}</th>
        </tr>
        <tr className='text-center'>
          <th className='p-3 px-9 '>A</th>
          <th className='p-3 px-9 '>B</th>
          <th className='p-3 px-9 '>Out</th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-blue-700'>
          <td className='p-3 px-9 text-center'>
            {numeros[0][0]}
          </td>
          <td className='p-3 px-9 text-center'>
            {numeros[0][1]}
          </td>
          <td className='p-3 px-9 text-center font-bold'>
            {numeros[0][2]}
          </td>
        </tr>
        <tr className='bg-blue-700'>
          <td className='p-3 px-9 text-center'>
            {numeros[1][0]}
          </td>
          <td className='p-3 px-9 text-center'>
            {numeros[1][1]}
          </td>
          <td className='p-3 px-9 text-center font-bold'>
            {numeros[1][2]}
          </td>
        </tr>
        <tr className='bg-blue-700'>
          <td className='p-3 px-9 text-center'>
            {numeros[2][0]}
          </td>
          <td className='p-3 px-9 text-center'>
            {numeros[2][1]}
          </td>
          <td className='p-3 px-9 text-center font-bold'>
            {numeros[2][2]}
          </td>
        </tr>
        <tr className='bg-blue-700'>
          <td className='p-3 px-9 text-center rounded-bl-md'>
            {numeros[3][0]}
          </td>
          <td className='p-3 px-9 text-center'>
            {numeros[3][1]}
          </td>
          <td className='p-3 px-9 text-center font-bold rounded-br-md'>
            {numeros[3][2]}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
