import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { product, site } from "@/lib/config";

export const metadata: Metadata = { title: `Refund Policy — ${site.name}` };

export default function Refund() {
  return (
    <LegalPage title="Refund Policy" updated="October 27, 2026">
      <p>
        We want you to be happy with your purchase. If the ebook isn't right for you, you can get a full refund within{" "}
        {product.refundDays} days of purchase.
      </p>

      <h2>How to request a refund</h2>
      <ul>
        <li>
          E-mail <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> within {product.refundDays} days of your
          purchase
        </li>
        <li>Include the e-mail address you used at checkout or your order number</li>
        <li>No explanation is required</li>
      </ul>

      <h2>Processing</h2>
      <p>
        Refunds are issued through Lemon Squeezy to your original payment method, usually within 5–10 business days depending
        on your bank.
      </p>

      <h2>After {product.refundDays} days</h2>
      <p>Requests made after the {product.refundDays}-day window are not eligible for a refund.</p>
    </LegalPage>
  );
}
