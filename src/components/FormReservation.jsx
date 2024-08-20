import { useState, useContext, useEffect } from "react";
import { ReservationContext } from "../context/ReservationContext";
import ResponseWindow from "./ResponseWindow";
import Check from "../assets/icons/check.png";
import No_check from "../assets/icons/no-check.png";

function FormReservation() {
  const { setReservation } = useContext(ReservationContext);
  const licuado = "Fruit Burst De";

  const [valuePrice, setValuePrice] = useState(1.5);
  const [formData, setFormData] = useState({
    nombre: "",
    producto: `${licuado} Fresa`,
    precio: "1.50",
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
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "cantidad") {
      setFormData((prevData) => ({
        ...prevData,
        cantidad: Number(value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();

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
        const result = await response.json();
        alert(
          `Reserva enviada con éxito. ID de la reservación: ${result.reservacion_id}`
        );

        setReservation((prevState) => !prevState);
        // <ResponseWindow
        // img={}
        //   text={"Tu pedido ha sido realizado pasa a traerlo 22 o 23 de Agosto"}
        // />;
      } else {
        const errorData = await response.json();
        setReservation((prevState) => !prevState);
        // <ResponseWindow
        //  img={Che}
        // text={`Ha sucedido un error ${errorData.error}`} />;
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error de red al intentar enviar la reserva.");
    }
  };

  return (
    <div className="reservation">
      <div
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
          <div className="initial_data" style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#f5f5f5",
                  fontSize: "1.6rem",
                }}
              >
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
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  border: "1px solid #555",
                  backgroundColor: "#2c2c2c",
                  color: "#f5f5f5",
                  fontSize: "1.5rem",
                }}
              />
            </div>

            <label
              htmlFor="producto"
              style={{
                display: "block",
                marginBottom: "10px",
                color: "#f5f5f5",
                fontSize: "1.6rem",
              }}
            >
              Producto
            </label>
            <select
              id="producto"
              name="producto"
              required
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "1px solid #555",
                backgroundColor: "#2c2c2c",
                color: "#f5f5f5",
                fontSize: "1.5rem",
              }}
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
                <label
                  htmlFor="precio"
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    color: "#f5f5f5",
                    fontSize: "1.6rem",
                  }}
                >
                  Precio
                </label>
                <input
                  type="text"
                  id="precio"
                  name="precio"
                  placeholder="$0.00"
                  required
                  readOnly
                  value={`$ ${formData.precio}`}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "20px",
                    borderRadius: "5px",
                    border: "1px solid #555",
                    backgroundColor: "#2c2c2c",
                    color: "#f5f5f5",
                    fontSize: "1.5rem",
                  }}
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
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    color: "#f5f5f5",
                    fontSize: "1.6rem",
                  }}
                >
                  Cantidad
                </label>
                <input
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  max="5"
                  min="1"
                  required
                  defaultValue="1"
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "20px",
                    borderRadius: "5px",
                    border: "1px solid #555",
                    backgroundColor: "#2c2c2c",
                    color: "#f5f5f5",
                    fontSize: "1.5rem",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "1px solid #555",
                backgroundColor: "#2c2c2c",
                color: "#f5f5f5",
                fontSize: "1.5rem",
              }}
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormReservation;
