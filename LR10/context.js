import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

// Провайдер
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Очистка кошика
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Видалення товару
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  // Збільшення кількості
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  // Зменшення кількості
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  // Завантаження даних з API
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Підрахунок total та amount
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Хук для зручного використання контексту
export const useGlobalContext = () => {
  return useContext(AppContext);
};
