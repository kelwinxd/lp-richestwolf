import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/config";

export const metadata: Metadata = { title: `Privacy Policy — ${site.name}` };

// TODO: have this reviewed before scaling sales.
export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 27, 2026">
      <p>
        This policy explains what information {site.name} collects when you visit this website or buy the ebook, and how it
        is used.
      </p>

      <h2>Purchases</h2>
      <p>
        Orders are processed by Lemon Squeezy, which acts as the Merchant of Record. Lemon Squeezy collects your name, e-mail,
        billing details and payment information to complete the purchase, handle taxes and deliver the ebook. We never see or
        store your full card details. Lemon Squeezy's own privacy policy applies to that data.
      </p>
      <p>We receive your name, e-mail and order details so we can provide support and process refunds.</p>

      <h2>Website analytics</h2>
      <p>
        We use privacy-friendly analytics to count visits and clicks in aggregate. It does not use advertising cookies or
        build a profile of you.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To deliver the ebook and any updates you're entitled to</li>
        <li>To answer support requests and handle refunds</li>
        <li>To understand, in aggregate, how the website is used</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or delete the personal information we hold about you at any time by e-mailing{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
