import { Nav, Footer } from "../../Components";
import { MainProducts,FilterSection } from "../../Sections";

export default function Home(props) {  
  
  return (
    <>
      <Nav cart={props.cart} total={props.total} />
      <div className="CP homeContainer flex flex-wrap gap-12 sm:flex-col md:flex-row md:flex-nowrap lg:flex-row">
        <FilterSection />
        <MainProducts addToCart={props.addToCart} />
      </div>
      <Footer />
    </>
  );
}
