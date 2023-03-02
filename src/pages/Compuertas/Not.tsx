import { SimpleTable } from "@/components/Table";
import React from "react";

export const Not = () => {
  const numeros = [
    [0,1],
    [1,0],
  ];

  return (
    <React.Fragment>
      <div>
        <h1>Nand</h1>
        <SimpleTable
          numeros={numeros}
        />
      </div>
    </React.Fragment>
  );
};
