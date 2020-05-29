import React from "react";
import { Link } from "react-router-dom";
import "./CustomerDetails.scss";

export default function CustomerDetails({
  firstName,
  lastName,
  email,
  conactNumber,
  acceptTerms,
  acceptMarketing,
  handleFormInput,
}) {
  return (
    <form className="customer-details">
      <div className="customer-details__field-container">
        <label className="customer-details__field">
          Imię{" "}
          <input
            type="text"
            value={firstName}
            onChange={({ target }) =>
              handleFormInput("firstName", target.value)
            }
          />{" "}
        </label>
        <label className="customer-details__field">
          Nazwisko{" "}
          <input
            type="text"
            value={lastName}
            onChange={({ target }) => handleFormInput("lastName", target.value)}
          />{" "}
        </label>
        <label className="customer-details__field">
          E-mail{" "}
          <input
            type="text"
            value={email}
            onChange={({ target }) => handleFormInput("email", target.value)}
          />{" "}
        </label>
        <label className="customer-details__field">
          Telefon{" "}
          <input
            type="telephone"
            value={conactNumber}
            onChange={({ target }) =>
              handleFormInput("contactNumber", target.value)
            }
          />{" "}
        </label>
      </div>
      <div className="customer-details__checkbox-container">
        <label className="customer-details__checkbox">
          <input
            type="checkbox"
            onClick={() => handleFormInput("acceptMarketing", !acceptMarketing)}
          />{" "}
          <span>
            Wyrażam zgodę, by moje dane były używane przez KINO NOIR i ich
            partnerów w celach marketingowych, zgodnie z{" "}
            <Link to="/" target="_blank" className="customer-details__link">
              Polityką Prywatności
            </Link>{" "}
            KINO NOIR.
          </span>
        </label>
        <label className="customer-details__checkbox">
          <input
            type="checkbox"
            onClick={() => handleFormInput("acceptTerms", !acceptTerms)}
          />{" "}
          <span>
            Zapoznałem/Zapoznałam się i akceptuję warunki{" "}
            <Link to="/" target="_blank" className="customer-details__link">
              Regulaminu
            </Link>{" "}
            korzystania z usług KINO NOIR.
          </span>
        </label>
      </div>
    </form>
  );
}
