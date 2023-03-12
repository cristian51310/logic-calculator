import { Table } from '@/components/Table'

export const Xor = () => {
  const numeros = [
    [0, 0, 0],
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
  ]

  return (
    <div>
      <Table
        numeros={numeros}
      />
    </div>
  )
}
