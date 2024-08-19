import InputFormReservation from "./InputFormReservation";

function FormReservation() {
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
                fontSize: "1.2rem"
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
              }}
            >
              <option value="licuado_vino">Licuado de Vino</option>
              <option value="licuado_fresa">Licuado de Fresa</option>
            </select>

            <div className="container__secondSectionForm">
              <InputFormReservation
                label={"Precio"}
                type={"text"}
                placeholder={"$ 0.00"}
              />

              <InputFormReservation
                label={"Cantidad"}
                type={"number"}
                placeholder={"4"}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#000",
                color: "#f5f5f5",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
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
