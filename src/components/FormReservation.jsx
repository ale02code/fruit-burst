import React from "react";

function FormReservation() {
  return (
    <div className="reservation">
      <form action="backend/php/index.php" method="post">
        <div className="initial_data">
          <label htmlFor="name_card">Cardholder name</label>
          <input
            type="text"
            id="name_card"
            name="name_card"
            placeholder="e.g. Diego Saldoval"
            pattern="[^0-9]*"
            title="El nombre no debe contener números"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. example@email.com"
            required
          />

          <label htmlFor="card_number">Card Number</label>
          <input
            type="text"
            id="card_number"
            name="card_number"
            placeholder="e.g. 1234 5678 9123 0000"
            pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
            title="El número de tarjeta debe seguir el formato: 1234 5678 9123 0000"
            required
          />
        </div>

        <div className="expiration">
          <div>
            <label htmlFor="card_month">Exp. date (MM/YY)</label>
            <input
              type="text"
              id="card_month"
              name="card_month"
              placeholder="MM"
              pattern="(0[1-9]|1[0-2])"
              title="El mes debe ser un valor entre 01 y 12"
              required
            />
          </div>

          <div>
            <label htmlFor="card_year">&nbsp;</label>
            <input
              type="text"
              id="card_year"
              name="card_year"
              placeholder="YY"
              pattern="\d{2}"
              title="El año debe ser un valor de 2 dígitos"
              required
            />
          </div>

          <div>
            <label htmlFor="card_cvc">CVC</label>
            <input
              type="text"
              id="card_cvc"
              name="card_cvc"
              placeholder="e.g. 123"
              pattern="\d{3}"
              title="El CVC debe tener 3 dígitos"
              required
            />
          </div>
        </div>

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default FormReservation;
