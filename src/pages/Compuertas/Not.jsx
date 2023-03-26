import { SimpleTable } from '@/components/Table'

export const Not = () => {
  const numeros = [
    [0, 1],
    [1, 0]
  ]

  return (
    <div className='flex gap-7'>
      <SimpleTable
        numeros={numeros}
      />
    </div>
  )
}
