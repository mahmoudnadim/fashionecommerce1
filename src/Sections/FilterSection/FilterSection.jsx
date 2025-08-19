import { useContext, useState } from "react";
import { AllContext } from "../../Components/AllContext/AllContext";
import "./FilterSection.css";

export default function FilterSection() {

  const {filter, setFilter, selectedValue, setSelectedValue,filterPrice, setFilterPrice} = useContext(AllContext)
  const [priceInput, setPriceInput] = useState("");
  
  
  const rangePrice = (e) => {
    setPriceInput(e.target.value);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    selectedValue ? setFilter(selectedValue): setFilter("all") 
    setFilterPrice(priceInput)    
  };

  return (
    <aside className="w-full bg-white border-r p-4 sm:w-full md:w-1/4">
      <form onSubmit={handleSubmit}>
        <h2 className="filtersTitle">Category</h2>
        <div className="filterItem">
          <p className="filterTitle">Woman</p>
          <ul className="filterItemList">
            <label htmlFor={"Woman Jacket"} className="filterItemListItem">
              <input
                id="Woman Jacket"
                type="checkbox"
                value="Woman Jacket"
                checked={selectedValue === "Woman Jacket"}
                onChange={(e)=>setSelectedValue(e.target.value)}
              />
              <span >Jacket</span>
            </label>
            <label htmlFor={"Woman Pants"} className="filterItemListItem">
              <input
                id="Woman Pants"
                type="checkbox"
                value="Woman Pants"
                checked={selectedValue === "Woman Pants"}
                onChange={(e)=>setSelectedValue(e.target.value)}
              />
              <span >Pants</span>
            </label>
            <label htmlFor={"Woman Tshirt"} className="filterItemListItem">
              <input
                id="Woman Tshirt"
                type="checkbox"
                value="Woman Tshirt"
                checked={selectedValue === "Woman Tshirt"}
                onChange={(e)=>setSelectedValue(e.target.value)}
              />
              <span>T-shirt</span>
            </label>
          </ul>
        </div>
        <div className="filterItem">
          <p className="filterTitle">Man</p>
          <ul className="filterItemList">
            <label htmlFor={"Man Jacket"} className="filterItemListItem">
              <input
                id="Man Jacket"
                type="checkbox"
                value="Man Jacket"
                checked={selectedValue === "Man Jacket"}
                onChange={(e)=>setSelectedValue(e.target.value)}
              />
              <span>Jacket</span>
            </label>
            <label htmlFor={"Man Pants"} className="filterItemListItem">
              <input
                id="Man Pants"
                type="checkbox"
                value="Man Pants"
                checked={selectedValue === "Man Pants"}
                onChange={(e)=>setSelectedValue(e.target.value)}
              />
              <span>Pants</span>
            </label>
            <label htmlFor="Man Tshirt" className="filterItemListItem">
              <input
                id="Man Tshirt"
                type="checkbox"
                value="Man Tshirt"
                checked={selectedValue === "Man Tshirt"}
                onChange={(e)=>setSelectedValue(e.target.value)}
              />
              <span>Man Tshirt</span>
            </label>
          </ul>
        </div>
        <hr />
        <h2 className="filtersTitle">Price</h2>
        <ul className="filterItemList">
          <label className="filterItemListItem">
            <input
              onChange={rangePrice}
              type="range"
              max={1000}
              name="priceInput"
              value={priceInput}
            />
            <label>{priceInput}</label>
          </label>
        </ul>
        <button type="submit" className="b-btn applyFilterBtn w-3/4">
          Apply Filter
        </button>
      </form>
    </aside>
  );
}
