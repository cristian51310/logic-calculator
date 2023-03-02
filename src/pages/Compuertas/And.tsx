import { Table } from "@/components/Table";
import React from "react";

export const And = () => {
  const numeros = [
    [1,0,0],
    [0,1,0],
    [1,0,0],
    [1,1,1]
  ];

  return (
    <React.Fragment>
      <div>
        <h1>And</h1>
        <Table
          numeros={numeros}
        />
      </div>
    </React.Fragment>
  );
};
