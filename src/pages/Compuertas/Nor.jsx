import { Table } from '@/components/Table'

export const Nor = () => {
  const numeros = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 0]
  ]

  return (
    <>
      <div>
        <h1>Nor</h1>
        <Table
          numeros={numeros}
        />
      </div>
    </>
  )
}
