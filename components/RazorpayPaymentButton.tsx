"use client";

import { useEffect, useRef } from "react";

const PAYMENT_BUTTON_ID = "pl_T2B3R9XbuECHkB";
const SCRIPT_SRC = "https://checkout.razorpay.com/v1/payment-button.js";

/**
 * Embeds the Razorpay hosted payment button for vendor registration fees.
 * @author Cursor
 */
export default function RazorpayPaymentButton() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form || form.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-payment_button_id", PAYMENT_BUTTON_ID);
    form.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <form
      ref={formRef}
      className="razorpay-payment-form flex justify-center min-h-[48px]"
    />
  );
}
