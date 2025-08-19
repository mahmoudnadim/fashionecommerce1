import "./MainProducts.css";
import { FaTimes } from "react-icons/fa";
import { ProductCard } from "../../Components";
import ProductsData from "../../Data/ProductsData";
import { useContext, useEffect } from "react";
import { AllContext } from "../../Components/AllContext/AllContext";

export default function MainProducts({ addToCart }) {

  const {filter, setFilter, setSelectedValue, filterPrice, setFilterPrice} = useContext(AllContext);  
  const productsFilter = filter === "all"
  ? ProductsData 
  : ProductsData.filter(
    (product)=>
      product.category === filter
  )
  const removeFilterCategory = ()=>{
    setFilter("all")
    setSelectedValue("")
  }
  const removeFilterPrice = ()=>{
    setFilterPrice(0)
  }
    
  return (
    <div className="minProducts w-full sm:w-full md:w-3/4">
      <button className="showSelectedFilter rounded-full" style={filter=="all"?{display:"none"}:{display:"flex"}} onClick={removeFilterCategory}>
        <span>{filter}</span> <FaTimes className="cursor-pointer"/>
      </button>
      <div className="mainProductsList grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsFilter.map((item, index) => (
          <ProductCard
            key={index}
            id={item.id}
            link={item.link}
            img={item.img}
            name={item.name}
            price={item.price}
            rating={item.rating}
            onAdd={() => addToCart({id:item.id, img:item.img , name:item.name, price:item.price, link: item.link})}
            starCount={parseFloat(item.starCount).toFixed(1)}
          />
        ))}
      </div>
    </div>
  );
}
