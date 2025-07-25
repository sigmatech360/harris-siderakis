import React, { useEffect, useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import { FaPagelines, FaTimes } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckOutForm/CheckoutForm";

const IndicatorModal = ({ handleClose, showModal, personIndicators, selectedPersonData, comprehensivePrice, socialMediaReportPrice }) => {
  const [step, setStep] = useState("full report");
  const [selectedIndicators, setSelectedIndicators] = useState([]);
  const [isComprehensive, setIsComprehensive] = useState(false);
  const [isSocialReport, setIsSocialReport] = useState(false);

  // Handle checkbox toggle
  const handleCheckboxChange = (indicator) => {
    console.log('indicator', indicator);
    
    setSelectedIndicators((prevSelected) => {
      const exists = prevSelected.find(
        (item) => item.label === indicator.label
      );
      if (exists) {
        return prevSelected.filter(
          (item) => item.label !== indicator.label
        );
      } else {
        return [...prevSelected, indicator];
      }
    });
  };

  // Calculate total price
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (isComprehensive) {
      setSubTotal(comprehensivePrice);
    } else {
      const total_price = selectedIndicators.reduce(
        (total, item) => total + (item.price || 0),
        0
      );
      setSubTotal(total_price);
    }
  }, [selectedIndicators, isComprehensive]);

  useEffect(() => {
    if (isSocialReport) {
      setTotalPrice(subTotal + socialMediaReportPrice);
    } else {
      setTotalPrice(subTotal);
    }
  }, [subTotal]);

  // Handle "Get Report" click
  const handleGetReport = () => {
    if (selectedIndicators.length > 0) {
      setStep("summary");
    }
  };
  const [stripePromise,setStripePromise]  = useState();
  useEffect(()=>{
    setStripePromise(loadStripe(import.meta.env.VITE_STRIPE_KEY));
  },[])
  // console.log("stripe key", import.meta.env.VITE_STRIPE_KEY);

  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    payment_method_types: ["card"],
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  const closeModal = () => {
    setStep("full report");
    setSelectedIndicators([]);
    setSubTotal(0);
    setTotalPrice(0);
    handleClose();
    setIsComprehensive(false);
    setIsSocialReport(false)
  };

  return (
    <>
      <Modal show={showModal} centered onHide={closeModal}>
        <button className="closeButton" onClick={closeModal}>
          <FaTimes />
        </button>
        <ModalBody>
          <div className="search-forms px-3">
            <h5 className="fw-bold text-center mb-3">
              {step === "full report"
                ? "Full Report"
                : step === "summary"
                ? `Selected Indicators (${selectedIndicators.length})`
                : step === "order confirmation"
                ? "Order Confirmation"
                : "Order Payment"}
            </h5>
          </div>

          {/* Step 1: Show all indicators */}
          {step === "full report" && personIndicators.length > 0 && (
            <div className="mb-5">
              {personIndicators.map((indicator, i) => (
                <label
                  key={i}
                  className="d-flex align-items-center justify-content-between p-2 py-3 mt-2 shadow-sm rounded-2"
                  htmlFor={indicator.label}
                >
                  <input
                    type="checkbox"
                    id={indicator.label}
                    name={indicator.label}
                    checked={selectedIndicators.some(
                      (item) => item.label === indicator.label
                    )}
                    onChange={() => handleCheckboxChange(indicator)}
                  />
                  <p className="m-0">
                    {indicator.label}: {indicator.count}
                  </p>
                  <p className="m-0">${indicator.price}</p>
                </label>
              ))}
            </div>
          )}

          {/* Step 2: Show selected indicators */}
          {step === "summary" && selectedIndicators.length > 0 && (
            <div className="mt-3 mb-5">
              {selectedIndicators.map((indicator, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center justify-content-between p-2 py-3 mt-2 shadow-sm rounded-2"
                >
                  <div className="d-flex flex-column">
                    <p className="m-0">{indicator.label}</p>
                    <span className="text-muted" style={{ fontSize: "12px" }}>
                      {indicator.count} record{indicator.count > 1 ? "s" : ""}
                    </span>
                  </div>
                  <p className="m-0">${indicator.price}</p>
                </div>
              ))}
              <div className="d-flex justify-content-between mt-5 border-top border-bottom p-2 pt-3">
                <h6>Total</h6>
                <h6>${totalPrice}</h6>
              </div>
            </div>
          )}
          {step === "order confirmation" && (
            <>
              <div className="mt-3 mb-5">
                {!isComprehensive ? (
                  <div>
                    <h6 className="text-center">Selected Indicators</h6>
                    {selectedIndicators.map((indicator, i) => (
                      <div
                        key={i}
                        className="d-flex align-items-center justify-content-between p-2 py-3 mt-2 shadow-sm rounded-2"
                      >
                        <p className="m-0">{indicator.label}</p>
                        <p className="m-0 text-success">
                          ${indicator.price}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="d-flex align-items-center justify-content-between shadow-sm p-2 py-3 mt-2">
                    <p>Comprehensive Report</p>
                    <p className="text-success">${comprehensivePrice}</p>
                  </div>
                )}
                <div className="d-flex justify-content-between mt-5 border-top border-bottom p-2 pt-3">
                  <h6>Subtotal</h6>
                  <h6>${subTotal}</h6>
                </div>
                <label
                  className="d-flex justify-content-between align-items-center p-3 border-bottom"
                  htmlFor="comprehensiveReport"
                >
                  <TbReportSearch size={24} />
                  <div className="d-flex flex-column">
                    <p>Comprehensive Report</p>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Replace indicators with full report
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    name="comprehensiveReport"
                    id="comprehensiveReport"
                    onChange={(e) => setIsComprehensive(e.target.checked)}
                    checked={isComprehensive}
                  />
                </label>
                <label
                  className="d-flex justify-content-between align-items-center p-3 border-bottom"
                  htmlFor="socailReport"
                >
                  <IoMdShare size={24} />
                  <div className="d-flex flex-column">
                    <p>Social Media Report</p>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      ${socialMediaReportPrice} - Shared within 24 hours
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    name="socailReport"
                    id="socailReport"
                    onChange={(e) => {
                      setIsSocialReport(e.target.checked);
                      if (e.target.checked) {
                        setTotalPrice(subTotal + socialMediaReportPrice);
                      } else {
                        setTotalPrice(totalPrice - socialMediaReportPrice);
                      }
                    }}
                    checked={isSocialReport}
                  />
                </label>
                <div className=" p-3 border-bottom ">
                  <div className="d-flex justify-content-between align-items-center">
                    <p>
                      {isComprehensive
                        ? "Comprehensive Report Total"
                        : "Indicators Total"}
                    </p>
                    <p>${subTotal}</p>
                  </div>
                  {isSocialReport && (
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ fontSize: "14px" }}
                    >
                      <p>Social Media Cost</p>
                      <p>${socialMediaReportPrice}</p>
                    </div>
                  )}
                </div>
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom ">
                  <p className="fw-bold">Total</p>
                  <p className="fw-bold text-success">${totalPrice}</p>
                </div>
              </div>
            </>
          )}

          {step === "order payment" && (
            <>
              <div className="mt-3">
                <Elements stripe={stripePromise} options={options}>
                  <CheckoutForm amount={totalPrice} closeModal={closeModal} isSocialReport={isSocialReport} selectedPersonData={selectedPersonData} setStep={setStep} isComprehensive={isComprehensive} selectedIndicators={selectedIndicators} />
                </Elements>
              </div>
            </>
          )}

          {/* Button */}
          <div className="d-flex justify-content-center ">
            {step === "full report" ? (
              <button className="btn" onClick={handleGetReport}>
                Generate Report
              </button>
            ) : step === "summary" ? (
              <div className="d-flex justify-content-between gap-3 w-100">
                <button
                  className="btn btn-primary text-white"
                  onClick={() => setStep("full report")}
                >
                  Back
                </button>
                <button
                  className="btn"
                  onClick={() => setStep("order confirmation")}
                >
                  Confirm and Send
                </button>
              </div>
            ) : step === "order confirmation" ? (
              <>
                {/* <button
                  className="btn"
                  onClick={() => setStep()}
                >
                  Confirm Order
                </button> */}
                <div className="d-flex justify-content-between gap-3 w-100">
                  <button
                    className="btn btn-primary text-white"
                    onClick={() => setStep("summary")}
                  >
                    Back
                  </button>
                  <button
                    className="btn"
                    onClick={() => setStep("order payment")}
                  >
                    Confirm Order
                  </button>
                </div>
              </>
            ) : (
              <div className="w-100">
                {/* <p className="mb-3">Total PAYMENT</p>
                <button
                  className="btn"
                  onClick={() => setStep("order payment")}
                >
                  Pay
                </button> */}
              </div>
            )}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default IndicatorModal;
