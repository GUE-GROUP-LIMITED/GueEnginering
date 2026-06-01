"use client";

import { useEffect, useMemo, useState } from "react";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const badgeClassByStatus = {
  success: "bg-success text-white",
  failed: "bg-danger text-white",
  initialized: "bg-warning",
  pending: "bg-secondary text-white",
};

const formatDate = (value) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString();
};

const formatAmount = (order) => {
  if (typeof order.amount === "number") {
    return `$${order.amount.toFixed(2)}`;
  }
  if (typeof order.amountKobo === "number") {
    return `$${(order.amountKobo / 100).toFixed(2)}`;
  }
  return "-";
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/orders", { cache: "no-store" });
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Unable to load orders.");
        }

        const items = Array.isArray(payload.orders) ? payload.orders : [];
        setOrders(items);
      } catch (fetchError) {
        setError(fetchError.message || "Unable to load orders.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const sortedOrders = useMemo(
    () =>
      [...orders].sort((a, b) => {
        const aDate = new Date(a.updatedAt || a.createdAt || 0).getTime();
        const bDate = new Date(b.updatedAt || b.createdAt || 0).getTime();
        return bDate - aDate;
      }),
    [orders]
  );

  return (
    <Layout>
      <PageBanner titleHtml={`Order <span>Dashboard</span>`} titleText="Orders" />
      <section className="py-130 rel z-1">
        <div className="container">
          <div className="section-title mb-35">
            <span className="sub-title style-two mb-15">Payments</span>
            <h2>Order and Payment Records</h2>
          </div>

          {isLoading && <p>Loading orders...</p>}
          {!isLoading && error && <p>{error}</p>}

          {!isLoading && !error && (
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Plan</th>
                    <th>Billing</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Email</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedOrders.length === 0 && (
                    <tr>
                      <td colSpan={7}>No orders found yet.</td>
                    </tr>
                  )}

                  {sortedOrders.map((order) => {
                    const status = (order.status || "pending").toLowerCase();
                    const badgeClass =
                      badgeClassByStatus[status] || "bg-secondary text-white";

                    return (
                      <tr key={order.reference || `${order.createdAt}-${order.updatedAt}`}>
                        <td>{order.reference || "-"}</td>
                        <td>{order.plan || "-"}</td>
                        <td>{order.billing || "-"}</td>
                        <td>{formatAmount(order)}</td>
                        <td>
                          <span className={`badge ${badgeClass}`}>{status}</span>
                        </td>
                        <td>{order.customerEmail || order.email || "-"}</td>
                        <td>{formatDate(order.updatedAt || order.createdAt || order.paidAt)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
