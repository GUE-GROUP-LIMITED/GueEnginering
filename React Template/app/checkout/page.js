"use client";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Accordion } from "react-bootstrap";

const PLAN_PRICES = {
  basic: { label: "Basic Plan", monthly: 248, yearly: 382 },
  ultra: { label: "Ultra Plan", monthly: 548, yearly: 805 },
  gold: { label: "Gold Plan", monthly: 948, yearly: 1248 },
};

const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

const Checkout = () => {
  const searchParams = useSearchParams();
  const initialPlan = (searchParams.get("plan") || "basic").toLowerCase();
  const initialBilling = (searchParams.get("billing") || "monthly").toLowerCase();
  const [selectedPlan, setSelectedPlan] = useState(
    PLAN_PRICES[initialPlan] ? initialPlan : "basic"
  );
  const [selectedBilling, setSelectedBilling] = useState(
    initialBilling === "yearly" ? "yearly" : "monthly"
  );
  const [customerEmail, setCustomerEmail] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [paymentMessage, setPaymentMessage] = useState("");

  const callbackReference =
    searchParams.get("reference") || searchParams.get("trxref") || "";

  const selectedPackage = useMemo(
    () => PLAN_PRICES[selectedPlan] || PLAN_PRICES.basic,
    [selectedPlan]
  );
  const subTotal = selectedPackage[selectedBilling];
  const vat = 0;
  const orderTotal = subTotal + vat;

  useEffect(() => {
    const verifyPayment = async () => {
      if (!callbackReference) return;

      try {
        setPaymentStatus("verifying");
        const response = await fetch(
          `/api/paystack/verify?reference=${encodeURIComponent(callbackReference)}`
        );
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Unable to verify transaction.");
        }

        if (payload.status === "success") {
          setPaymentStatus("success");
          setPaymentMessage(
            `Payment confirmed. Reference: ${payload.reference}.`
          );
          return;
        }

        setPaymentStatus("failed");
        setPaymentMessage(
          payload.message ||
            "Payment was not successful. Please try again or contact support."
        );
      } catch (error) {
        setPaymentStatus("failed");
        setPaymentMessage(
          error.message || "Could not verify payment. Please contact support."
        );
      }
    };

    verifyPayment();
  }, [callbackReference]);

  const handlePay = async () => {
    if (!customerEmail) {
      alert("Please enter a billing email address before payment.");
      return;
    }

    try {
      setIsPaying(true);
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: customerEmail,
          amount: orderTotal,
          metadata: {
            plan: selectedPackage.label,
            billing: selectedBilling,
          },
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to initialize payment.");
      }

      window.location.href = payload.authorization_url;
    } catch (error) {
      alert(error.message || "Unable to start payment. Please try again.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <Layout>
      <PageBanner titleHtml={`Chec<span>kout</span>`} titleText="Checkout" />
      <div className="checkout-form-area py-130">
        <div className="container">
          <div className="checkout-faqs" id="checkout-faqs">
            {paymentStatus !== "idle" && (
              <div className="alert bgc-lighter mb-25">
                <h6 className="mb-10">
                  {paymentStatus === "verifying" && "Verifying payment..."}
                  {paymentStatus === "success" && "Payment Successful"}
                  {paymentStatus === "failed" && "Payment Verification Failed"}
                </h6>
                {paymentMessage && <p className="mb-0">{paymentMessage}</p>}
              </div>
            )}
            <Accordion className="alert bgc-lighter wow fadeInUp delay-0-2s">
              <h6>
                Returning customer?{" "}
                <Accordion.Toggle
                  as={"a"}
                  eventKey={"collapse0"}
                  className="card-header"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse0"
                  aria-expanded="false"
                  aria-controls="collapse0"
                >
                  Click here to login
                </Accordion.Toggle>
              </h6>
              <Accordion.Collapse eventKey="collapse0" className="content">
                <form onSubmit={(e) => e.preventDefault()} action="#">
                  <p>Please login your accont.</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email-address"
                          name="email-address"
                          className="form-control"
                          defaultValue=""
                          placeholder="Your Email Address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          defaultValue=""
                          placeholder="Your Password"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-footer">
                    <button type="submit" className="theme-btn style-two">
                      login <i className="fas fa-angle-double-right" />
                    </button>
                    <input
                      type="checkbox"
                      name="loss-passowrd"
                      id="loss-passowrd"
                      required=""
                    />
                    <label htmlFor="loss-passowrd">Remember me</label>
                  </div>
                  <a href="#">Lost your password?</a>
                </form>
              </Accordion.Collapse>
            </Accordion>
            <Accordion className="alert bgc-lighter wow fadeInUp delay-0-3s">
              <h6>
                Have a coupon?{" "}
                <Accordion.Toggle
                  as={"a"}
                  eventKey="collapse3"
                  className="card-header"
                >
                  Click here to enter your code
                </Accordion.Toggle>
              </h6>
              <Accordion.Collapse eventKey="collapse3" className="content">
                <form onSubmit={(e) => e.preventDefault()} action="#">
                  <p>If you have a coupon code, please apply it below.</p>
                  <div className="form-group">
                    <input
                      type="text"
                      id="coupon-code"
                      name="coupon-code"
                      className="form-control"
                      defaultValue=""
                      placeholder="Coupon Code"
                      required=""
                    />
                  </div>
                  <button type="submit" className="theme-btn style-two">
                    apply coupon <i className="fas fa-angle-double-right" />
                  </button>
                </form>
              </Accordion.Collapse>
            </Accordion>
            <Accordion
              defaultActiveKey="collapse4"
              className="alert bgc-lighter wow fadeInUp delay-0-4s"
            >
              <h6>
                Billing Address{" "}
                <Accordion.Toggle
                  as={"a"}
                  eventKey="collapse4"
                  className="card-header"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="true"
                  aria-controls="collapse4"
                >
                  {" "}
                  Enter here
                </Accordion.Toggle>
              </h6>
              <Accordion.Collapse eventKey="collapse4" className="content">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="checkout-form"
                  className="checkout-form"
                  name="checkout-form"
                  action="#"
                  method="post"
                >
                  <div className="row">
                    <div className="col-lg-12 pt-15">
                      <h5>Personal Information</h5>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="first-name"
                          name="first-name"
                          className="form-control"
                          defaultValue=""
                          placeholder="First Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="last-name"
                          name="last-name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Last Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="number"
                          name="number"
                          className="form-control"
                          defaultValue=""
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email Address"
                          required=""
                          onChange={(e) => setCustomerEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="company-name"
                          name="company-name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Company name (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="company-address"
                          name="company-address"
                          className="form-control"
                          defaultValue=""
                          placeholder="Company Address (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <h5>Your Address</h5>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="form-group">
                        <select className="select" name="country" id="country">
                          <option value="value1">Select Country</option>
                          <option value="value2">Australia</option>
                          <option value="value3">Canada</option>
                          <option value="value4">China</option>
                          <option value="value5">Morocco</option>
                          <option value="value6">Saudi Arabia</option>
                          <option value="value7">United Kingdom (UK)</option>
                          <option value="value8">United States (US)</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="form-control"
                          defaultValue=""
                          placeholder="City"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="state"
                          name="state"
                          className="form-control"
                          defaultValue=""
                          placeholder="State"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          className="form-control"
                          defaultValue=""
                          placeholder="Zip"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="street-name"
                          name="street-name"
                          className="form-control"
                          defaultValue=""
                          placeholder="House, street name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="apartment-name"
                          name="apartment-name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Apartment, suite, unit etc. (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <h5>Order Notes (optional)</h5>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <textarea
                          name="order-note"
                          id="order-note"
                          className="form-control"
                          rows={5}
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </Accordion.Collapse>
            </Accordion>
            <Accordion className="alert bgc-lighter wow fadeInUp delay-0-2s">
              <h6>
                Select Your{" "}
                <Accordion.Toggle
                  as={"a"}
                  eventKey="collapse5"
                  className="card-header"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  {" "}
                  Payment Method
                </Accordion.Toggle>
              </h6>
              <Accordion.Collapse eventKey="collapse5" className="content">
                <div className="payment-cart-total pt-25">
                  <div className="row justify-content-between">
                    <div className="col-lg-6">
                      <div className="mb-25">
                        <h5 className="mb-15">Selected Package</h5>
                        <div className="form-group mb-15">
                          <select
                            className="select"
                            value={selectedPlan}
                            onChange={(e) => setSelectedPlan(e.target.value)}
                          >
                            <option value="basic">Basic Plan</option>
                            <option value="ultra">Ultra Plan</option>
                            <option value="gold">Gold Plan</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <select
                            className="select"
                            value={selectedBilling}
                            onChange={(e) => setSelectedBilling(e.target.value)}
                          >
                            <option value="monthly">Monthly Billing</option>
                            <option value="yearly">Yearly Billing</option>
                          </select>
                        </div>
                      </div>
                      <Accordion
                        defaultActiveKey="collapseOne"
                        className="payment-method rmb-30"
                      >
                        <h5 className="mb-20">Payment Method</h5>
                        <ul id="paymentMethod" className="mb-30">
                          {/* Default unchecked */}
                          <li className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="methodone"
                              name="defaultExampleRadios"
                              defaultChecked=""
                            />{" "}
                            <Accordion.Toggle
                              as="label"
                              eventKey="collapseOne"
                              className="custom-control-label"
                              htmlFor="methodone"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-controls="collapseOne"
                            >
                              {" "}
                              Direct Bank Transfer{" "}
                              <i className="fas fa-money-check" />
                            </Accordion.Toggle>
                            <Accordion.Collapse
                              eventKey="collapseOne"
                              data-bs-parent="#paymentMethod"
                            >
                              <p>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order will not be shipped our
                                account.
                              </p>
                            </Accordion.Collapse>
                          </li>
                          {/* Default unchecked */}
                          <li className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="methodtwo"
                              name="defaultExampleRadios"
                            />{" "}
                            <Accordion.Toggle
                              as="label"
                              eventKey="collapseTwo"
                              className="custom-control-label"
                              htmlFor="methodtwo"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-controls="collapseTwo"
                            >
                              {" "}
                              Cash On Delivery <i className="fas fa-truck" />
                            </Accordion.Toggle>
                            <Accordion.Collapse
                              eventKey="collapseTwo"
                              id="collapseTwo"
                              data-bs-parent="#paymentMethod"
                              style={{}}
                            >
                              <p>Pay with cash upon delivery.</p>
                            </Accordion.Collapse>
                          </li>
                          {/* Default unchecked */}
                          <li className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="methodthree"
                              name="defaultExampleRadios"
                            />{" "}
                            <Accordion.Toggle
                              as="label"
                              eventKey="collapsethree"
                              className="custom-control-label"
                              htmlFor="methodthree"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsethree"
                              aria-controls="collapsethree"
                            >
                              Paypal <i className="fab fa-cc-paypal" />
                            </Accordion.Toggle>
                            <Accordion.Collapse
                              eventKey="collapsethree"
                              id="collapsethree"
                              data-bs-parent="#paymentMethod"
                              style={{}}
                            >
                              <p>
                                Pay via PayPal; you can pay with your credit
                                card if you don’t have a PayPal account.
                              </p>
                            </Accordion.Collapse>
                          </li>
                        </ul>
                        <p>
                          Your personal data will be used to process your order,
                          support your experience throughout this website, and
                          for other purposes described in our privacy policy.
                        </p>
                      </Accordion>
                    </div>
                    <div className="col-lg-5">
                      <div className="shoping-cart-total text-left mb-20">
                        <h5 className="text-center mb-20">Cart Totals</h5>
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                {selectedPackage.label} <strong>x 1</strong>
                              </td>
                              <td>{formatCurrency(subTotal)}</td>
                            </tr>
                            <tr>
                              <td>Shipping Fee</td>
                              <td>{formatCurrency(0)}</td>
                            </tr>
                            <tr>
                              <td>Vat</td>
                              <td>{formatCurrency(vat)}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Order Total</strong>
                              </td>
                              <td>
                                <strong>{formatCurrency(orderTotal)}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Collapse>
            </Accordion>
            <button
              type="button"
              className="theme-btn w-100"
              onClick={handlePay}
              disabled={isPaying || paymentStatus === "verifying"}
            >
              {isPaying ? "Redirecting to payment..." : "Pay Now"}{" "}
              <i className="fas fa-angle-double-right" />
            </button>
          </div>
        </div>
      </div>
      {/* Checkout Form Area End */}
    </Layout>
  );
};
export default Checkout;
