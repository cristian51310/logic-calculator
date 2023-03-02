import { Table } from "@/components/Table";
import React from "react";

export const Xor = () => {
  const numeros = [
    [0,0,0],
    [0,1,1],
    [1,0,1],
    [1,1,0]
  ];

  return (
    <React.Fragment>
      <div>
        <h1>Xor</h1>
        <Table
          numeros={numeros}
        />
      </div>
    </React.Fragment>
  );
};
