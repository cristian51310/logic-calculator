import { Table } from "@/components/Table";
import React from "react";

export const Or = () => {
  const numeros = [
    [0,0,0],
    [0,1,1],
    [1,0,1],
    [1,1,1]
  ];

  return (
    <React.Fragment>
      <div>
        <h1>Or</h1>
        <Table
          numeros={numeros}
        />
      </div>
    </React.Fragment>
  );
};
