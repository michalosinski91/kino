import React from "react";
import "./StageIndicator.scss";

export default function StageIndicator({ activeTab }) {
  return (
    <div className="stage-indicator">
      <div
        className={
          activeTab == "selectDetails"
            ? "stage-indicator__item stage-indicator__item--active"
            : "stage-indicator__item"
        }
      >
        Wybierz Seans
      </div>
      <i className="fa fa-angle-right"></i>
      <div
        className={
          activeTab == "selectSeats"
            ? "stage-indicator__item stage-indicator__item--active"
            : "stage-indicator__item"
        }
      >
        Wybierz Miejsca
      </div>
      <i className="fa fa-angle-right"></i>
      <div
        className={
          activeTab == "customerInfo"
            ? "stage-indicator__item stage-indicator__item--active"
            : "stage-indicator__item"
        }
      >
        Podaj Dane
      </div>
      <i className="fa fa-angle-right"></i>
      <div
        className={
          activeTab == "paymentDetails"
            ? "stage-indicator__item stage-indicator__item--active"
            : "stage-indicator__item"
        }
      >
        Zapłać
      </div>
      <i className="fa fa-angle-right"></i>
      <div
        className={
          activeTab == "purchaseSummary"
            ? "stage-indicator__item stage-indicator__item--active"
            : "stage-indicator__item"
        }
      >
        Podsumowanie
      </div>
    </div>
  );
}
