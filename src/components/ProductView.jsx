import Button from "./Button";

function ProductView({ title, desc, topping, fruit, product, price }) {
  return (
    <div className="menu__product menu__product__one">
      <div className="menu__product__imgs">
        <div className="menu__product__imgs__fruit">
          <img src={fruit} alt="Banano Imagen" />
        </div>
        <div className="menu__product__imgs__product">
          <img src={product} alt="Fruit Burst of banana" />
        </div>
      </div>

      <section className="menu__product__view">
        <h5 className="menu__product__view__title">{title} burst</h5>
        <p className="menu__product__view__desc">{desc}</p>
        <p className="menu__product__view__topping">
          ¡Puedes agregarle como topping {topping}!
        </p>
        <div className="menu__product__view__price">
          <p className="menu__product__view__price__content">price: ${price}</p>
          <Button text={"Reservar"} />
        </div>
      </section>
    </div>
  );
}

export default ProductView;
