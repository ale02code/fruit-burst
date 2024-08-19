import InputFormReservation from "./InputFormReservation";

function FormReservation() {
  const licuado = "Fruit Burst De";
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
        <form method="post" className="form__reservation">
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
            <InputFormReservation
              label={"Nombre"}
              type={"text"}
              placeholder={"e.g. John Doe"}
            />

            <label
              htmlFor="product"
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
              id="product"
              name="product"
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
            >
              <option>{licuado} Fresa</option>
              <option>{licuado} Banana</option>
              <option>{licuado} Oreo</option>
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
                  htmlFor="name"
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
                  id="name"
                  name="name"
                  placeholder="$0.00"
                  title="Debe ingresar un nombre y apellido"
                  required
                  readOnly
                  value="1.50"
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
                  htmlFor="name"
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
                  defaultValue="1"
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
