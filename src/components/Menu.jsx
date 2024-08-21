import FresasImg from "../assets/imgs/fresa.webp";
import FresaBurstImg from "../assets/imgs/fresa-burst.webp";
import BananoImg from "../assets/imgs/banano.webp";
import BananoBurstImg from "../assets/imgs/banano-burst.webp";
import ProductView from "./ProductView";

function Menu() {
  return (
    <main className="menu" id="menu">
      <h3 className="menu__title">Menú</h3>
      <div className="menu__content">
        <ProductView
          title={"Banana Milk"}
          desc={"Delicioso licuado de banano, acompañado de trocitos de banano"}
          topping={"canela molida"}
          fruit={BananoImg}
          product={BananoBurstImg}
          price={"1.50"}
        />
        <ProductView
          title={"Fresa Milk"}
          desc={"Delicioso licuado de fresa, acompañado de trocitos de fresa"}
          topping={"canela molida"}
          fruit={FresasImg}
          product={FresaBurstImg}
          price={"1.50"}
        />
      </div>
    </main>
  );
}

export default Menu;
