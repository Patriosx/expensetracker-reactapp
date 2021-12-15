import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [
    // { id: 1, desc: "Pan", amount: -0.4 },
    // { id: 2, desc: "PS5", amount: -500 },
    // { id: 3, desc: "Salary", amount: 1500 },
  ],
};

//Create context
const GlobalContext = createContext(initialState);

/* 
para que otros componentes tengan acceso a nuestro GlobalState.
tenemos que incluir todo dentro de un Provider component 
*/

//Provider component
const GlobalProvider = ({ children }) => {
  //children es todo lo que este envuelto por el componente GlobalContext
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //cuando queremos llamar una accion de reducer usamos dispatch
  function deleteTransaction(id) {
    //payload es la informacion que quiero mandar
    //dispatch = action
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(newTransaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
  }
  return (
    // Provider tendra la propiedad value, que se podra acceder desde cualquier
    //componente que lo solicite usando useContext
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
