import { Table } from '@/components/Table'

export const Nand = () => {
  const numeros = [
    [0, 0, 1],
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
  ]

  return (
    <>
      <div>
        <h1>Nand</h1>
        <Table
          numeros={numeros}
        />
      </div>
    </>
  )
}