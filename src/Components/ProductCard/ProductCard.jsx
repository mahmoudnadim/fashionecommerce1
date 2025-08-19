import { FaStar } from "react-icons/fa";
import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { AddCartBtn, Rating } from "..";

export default function ProductCard(props) {
  const className = props.className
  return (
    <div className={`productsListItem flex flex-col justify-between ${className}`}>
      <div className="productCardImg">
        <img src={props.img} alt="Caffe Latte" />
      </div>
      <div className="productCardDetails flex flex-col">
        <div className="ratingStars flex gap-1 productCardStars items-center">
          <Rating rating={props.rating}/>
        </div>
        <NavLink to={`/product/${props.link}-${props.id}`} className="productCardTitle">{props.name}</NavLink>
        <div className="productCardPrice" data-price={props.price}>
          ${parseFloat(props.price).toFixed(2)}
        </div>
        <AddCartBtn onAdd={props.onAdd} price={props.price} />
      </div>
    </div>
  );
}
