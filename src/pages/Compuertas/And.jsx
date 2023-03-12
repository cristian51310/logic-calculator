import { Table } from '@/components/Table'

export const And = () => {
  const numeros = [
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 1]
  ]

  return (
    <div>
      <Table
        numeros={numeros}
      />
    </div>
  )
}
