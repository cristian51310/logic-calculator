import { SimpleTable } from '@/components/Table'

export const Not = () => {
  const numeros = [
    [0, 1],
    [1, 0]
  ]

  return (
    <div>
      <SimpleTable
        numeros={numeros}
      />
    </div>
  )
}
