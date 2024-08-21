import { useState, useContext, useEffect } from "react";
import { ReservationContext } from "../context/ReservationContext";
import { RequestContext } from "../context/RequestContext";

function FormReservation() {
  const { setReservation } = useContext(ReservationContext);
  const { setIsRequestSuccessful } = useContext(RequestContext);
  const licuado = "Fruit Burst De";

  const [valuePrice, setValuePrice] = useState(1.5);
  const [formData, setFormData] = useState({
    nombre: "",
    producto: `${licuado} Fresa`,
    precio: (1.5).toFixed(2),
    cantidad: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const totalPrice = valuePrice * formData.cantidad;
    setFormData((prevData) => ({
      ...prevData,
      precio: totalPrice.toFixed(2),
    }));
  }, [formData.cantidad, valuePrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "cantidad" ? Number(value) : value,
    }));
  };

  const handleCloseForm = () => {
    setReservation(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://sales-manager-api.onrender.com/insertar_reservacion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        await response.json();
        setReservation(false);
        setIsRequestSuccessful(true); // Solicitud exitosa
      } else {
        await response.json();
        setReservation(false);
        setIsRequestSuccessful(false); // Solicitud fallida
      }
    } catch (error) {
      console.error("Error de red:", error);
      setIsRequestSuccessful(false); // Error de red
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="reservation__container">
      <div className="reservation" onClick={handleCloseForm}></div>

      <div className="reservation__background">
        <div
          className="form__content"
          style={{
            padding: "20px",
            width: "90%",
            maxWidth: "450px",
            margin: "0 auto",
            border: "1px solid #444",
            borderRadius: "10px",
            backgroundColor: "#1b1b1b",
            color: "#f5f5f5",
            maxHeight: "500px",
          }}
        >
          <form onSubmit={handleSubmit} className="form__reservation">
            <h3
              style={{
                fontSize: "2rem",
                textAlign: "center",
                marginBottom: "1rem",
                textDecoration: "underline",
              }}
            >
              Reservacion
            </h3>
            <div className="initial_data">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <label htmlFor="name" className="label__form__reservation">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  pattern="^[^\d\s][^\d]*\s[^\d]+$"
                  title="El nombre no debe contener números, debe contener apellido, y no debe tener espacios al inicio."
                  name="nombre"
                  autoComplete="off"
                  placeholder={"e.g Eduardo Vargas..."}
                  onChange={handleChange}
                  required
                  className="input__form__reservation"
                />
              </div>

              <label htmlFor="producto" className="label__form__reservation">
                Producto
              </label>
              <select
                id="producto"
                name="producto"
                className="input__form__reservation"
                required
                onChange={handleChange}
              >
                <option value={`${licuado} Fresa`}>{licuado} Fresa</option>
                <option value={`${licuado} Banana`}>{licuado} Banana</option>
                <option value={`${licuado} Oreo`}>{licuado} Oreo</option>
              </select>

              <div className="container__secondSectionForm">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <label htmlFor="precio" className="label__form__reservation">
                    Precio
                  </label>
                  <input
                    type="text"
                    id="precio"
                    name="precio"
                    className="input__form__reservation"
                    placeholder="$0.00"
                    required
                    readOnly
                    value={`$ ${formData.precio}`}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <label
                    htmlFor="cantidad"
                    className="label__form__reservation"
                  >
                    Cantidad
                  </label>
                  <input
                    type="number"
                    id="cantidad"
                    name="cantidad"
                    className="input__form__reservation"
                    max="5"
                    min="1"
                    required
                    defaultValue="1"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button__form__reservation"
              >
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormReservation;
