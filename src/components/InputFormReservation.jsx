function InputFormReservation({ label, type, placeholder }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100%"
    }}>
      <label
        htmlFor="name"
        style={{
          display: "block",
          marginBottom: "10px",
          color: "#f5f5f5",
          fontSize: "1.6rem"
        }}
      >
        {label}
      </label>
      <input
        type={type}
        id="name"
        name="name"
        placeholder={placeholder}
        title="Debe ingresar un nombre y apellido"
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #555",
          backgroundColor: "#2c2c2c",
          color: "#f5f5f5",
          fontSize: "1.5rem"
        }}
      />
    </div>
  );
}

export default InputFormReservation;
