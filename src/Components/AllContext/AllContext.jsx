import React, { createContext, useState } from 'react'

export const AllContext = createContext()

export const  AllProvider = ({children}) => {

    const [filter, setFilter] = useState("all")
    const [selectedValue, setSelectedValue] = useState()
    const [filterPrice, setFilterPrice] = useState(0);
    const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ?  JSON.parse(stored) : [];
  });

  return (
    <AllContext.Provider value={{cart,setCart, filter, setFilter,selectedValue, setSelectedValue,filterPrice, setFilterPrice }}>
        {children}
    </AllContext.Provider>
  )
}
