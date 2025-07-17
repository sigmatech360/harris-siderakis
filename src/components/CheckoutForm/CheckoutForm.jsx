import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
// import Swal from "sweetalert2";

const CheckoutForm = ({
  setPaymentDone,
  closeModal,
  amount,
  setStep,
  isComprehensive,
  selectedIndicators,
  selectedPersonData,
  isSocialReport,
}) => {
  const [userEmail, setUserEmail] = useState("");
  //   const [termsAndCondition, setTermsAndCondition] = useState(false);
  //   const [additionalNotes, setAdditionalNotes] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }
    document.querySelector(".loaderBox").classList.remove("d-none");

    const { token, error } = await stripe.createToken(
      elements.getElement(CardNumberElement)
    );
    if (token) {
      console.log("Received Stripe token:", token);
      console.log(
        `Payment token created: ${token.id}, the amount to be paid is ${amount}`
      );
      const payload = {
        ...selectedPersonData,
        stripe_token: token.id,
        email: userEmail,
        amount,
        is_mob: 0,
        'social_media_report':isSocialReport ? 1 : 0,

        types: !isComprehensive
          ? selectedIndicators
          : [
              {
                label: "Comprehensive Report",
                key: "haComprehensiveReport",
                price: 20,
              },
            ],
        // isComprehensive,
        // selectedIndicators
      };
      console.log("Pay submitted", payload);
      const authToken = localStorage.getItem("token");

        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/generate-report`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(payload),
          }
        );
        const result = await response.json();

        if (result.status) {
          document.querySelector(".loaderBox").classList.add("d-none");
          console.log(result.message);
          toast.success(result.message || "Payment successful!")
          
        } else {
          document.querySelector(".loaderBox").classList.add("d-none");
          toast.error("Payment failed!")
          console.log("Payment failed:", result);
        }
        closeModal()

      // You can send the token to your server for further processing
      // For example, you might want to create a charge or save the token for future use
    } else {
      console.log("Submitting payment form...", error);
      setErrorMessage("Failed to create payment token.");
    }
  };
  const ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "16px",
        color: "#32325d",
        "::placeholder": {
          color: "#aab7c4",
        },
        border: "1px solid #000",
        padding: "10px",
      },
      invalid: {
        color: "#fa755a",
      },
    },
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-3 rounded shadow-sm d-flex flex-column"
    >
      {/* <PaymentElement /> */}
      {/* <CardElement options={CARD_OPTIONS} /> */}

      <label className="mt-3">
        Email
        <input
          className="p-2 rounded border d-block w-100"
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </label>
      <label className="mt-3">
        Card Number
        <div className="p-2 border rounded">
          <CardNumberElement options={ELEMENT_OPTIONS} />
        </div>
      </label>
      <label className="mt-3">
        Expiration date
        <div className="p-2 border rounded">
          <CardExpiryElement options={ELEMENT_OPTIONS} />
        </div>
      </label>
      <label className="mt-3">
        Security code
        <div className="p-2 border rounded">
          <CardCvcElement options={ELEMENT_OPTIONS} />
        </div>
      </label>
      {/* <div className="ms-2 mt-3 d-flex align-items-center">
        <input
          type="checkbox"
          id="notes"
          name="notes"
          onChange={(e) => setAdditionalNotes(e.target.checked)}
          required
        />
        <label className="form-check-label ms-2" htmlFor="notes">
          Agree to all Additional Notes mentioned on Invoice
        </label>
      </div> */}
      {/* <div className="ms-2 mt-3 d-flex align-items-center">
        <input
          type="checkbox"
          id="terms_condition"
          name="terms_condition"
          onChange={(e) => setTermsAndCondition(e.target.checked)}
          required
        />
        <label className="form-check-label ms-2" htmlFor="terms_condition">
          Agree to all{" "}
          <Link
            to={`${import.meta.env.VITE_BASE_URL}/${
              invoiceData?.terms_condition
            }`}
            target="_blank"
            className="text-decoration-underline text-primary"
          >
            Terms and Conditions
          </Link>
        </label>
      </div> */}
      <div className="my-4 d-flex justify-content-end flex-column gap-3">
        <h5 className="d-flex justify-content-between mb-4 ">
          Total Amount <span className="text-success">${amount}</span>
        </h5>
        <div className="d-flex justify-content-between">
          <button
            className="btn "
            // type="submit"
            onClick={() => setStep("order confirmation")}
          >
            Back
          </button>
          <button
            className="btn "
            type="submit"
            disabled={!stripe || !elements}
          >
            Pay
          </button>
        </div>
      </div>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
