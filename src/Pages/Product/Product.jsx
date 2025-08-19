import { useRef } from "react";
import "./Product.css";
import { AddCartBtn, Nav, ProductCard, Rating,AddQuantity } from "../../Components";
import ProductsData from "../../Data/ProductsData";
import { useParams } from "react-router-dom";

export default function Product(props) {
  const addToCart = props.addToCart;
  const productId = useParams();
  
  const [getProduct] = ProductsData.filter(
    (item) => `${item.link}-${item.id}` == productId.id
  );
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 250; // Kaç px kayacak
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <Nav cart={props.cart} total={props.total} />
      <div className="productContainer_c flex flex-col gap-20">
        <div className="productContainer grid h- sm:grid-cols-1 md:grid-cols-2">
          <div className="productLeft rounded-2xl overflow-hidden">
            <img src={getProduct.img} alt="" />
          </div>
          <div className="productRight flex flex-col justify-center gap-8">
            <p className="productName text-5xl">{getProduct.name}</p>
            <p className="productPrice text-3xl">${getProduct.price}</p>
            <p className="productDesc text-xl">{getProduct.desc}</p>
            <div></div>
            <Rating rating={getProduct.rating} />
            <div className="flex items-center gap-8">
            <AddCartBtn onAdd={() => addToCart({id:getProduct.id,img:getProduct.img , name: getProduct.name,price: getProduct.price, link: getProduct.link})} price={getProduct.price} />
            <AddQuantity  id={getProduct.id}  cart = {props.cart} setCart = {props.setCart} targetCart= {getProduct} onAdd={() => addToCart({id:getProduct.id,img:getProduct.img , name: getProduct.name,price: getProduct.price, link: getProduct.link})} price={getProduct.price}  />
            </div>
          </div>
        </div>
        <div className="showProducts_c">
          <p className="showProductsTitle">Customers Also Bought</p>
          <div className="relative w-full">
            {/* Sol Buton */}
            <button onClick={() => scroll("left")} className="carouselBtn absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" >
              ◀
            </button>

            {/* Carousel Alanı */}
            <div ref={scrollRef} className="showProducts overflow-x-auto scroll-smooth flex gap-4 flex-nowrap scrollbar-hide" >
              {ProductsData.slice(0, 5).map((item, i) => {
                return (
                  <ProductCard
                    className="w-2/3 min-w-2/3 md:w-1/5 md:min-w-1/5"
                    key={i}
                    id={item.id}
                    link={item.link}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    onAdd={() =>
                      addToCart({id:item.id,img:item.img, price: item.price, name: item.name })
                    }
                    starCount={parseFloat(item.starCount).toFixed(1)}
                  />
                );
              })}
            </div>

            {/* Sağ Buton */}
            <button
              onClick={() => scroll("right")}
              className="carouselBtn absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
