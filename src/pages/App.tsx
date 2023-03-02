import React from "react";
import NavBar from "../components/SideBar";
import { Route, Routes } from "react-router-dom";
import { And } from './Compuertas/And'
import { Not } from "./Compuertas/Not";
import { Nand } from "./Compuertas/Nand";
import { Or } from "./Compuertas/Or";
import { Nor } from "./Compuertas/Nor";
import { Xor } from "./Compuertas/Xor";
import { Login } from "./Login";

export const App = ({children}) => {
  return (
    
    <React.Fragment>
      <div className="flex">
        <NavBar />

        {/*Seccion de la calculadora*/}
        <div className="p-6">
          {children}
        </div>
        
      </div>
    </React.Fragment>
  );
}

export default App;
