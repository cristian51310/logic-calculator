import { SimpleTable } from '@/components/Table'

export const Not = () => {
  const numeros = [
    [0, 1],
    [1, 0]
  ]

  return (
    <>
      <div>
        <h1>Nand</h1>
        <SimpleTable
          numeros={numeros}
        />
      </div>
    </>
  )
}
