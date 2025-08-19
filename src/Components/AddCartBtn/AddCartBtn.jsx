

export default function AddCartBtn(props) {
  
  return (
      <button className="b-btn addToCartButton" onClick={props.onAdd} style={{cursor:"pointer"}}>Add to Cart</button>
  );
}
