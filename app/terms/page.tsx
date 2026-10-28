import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { disclaimer, site } from "@/lib/config";

export const metadata: Metadata = { title: `Terms of Use — ${site.name}` };

// TODO: have this reviewed before scaling sales.
export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="October 27, 2026">
      <p>By using this website or buying the {site.name} ebook, you agree to these terms.</p>

      <h2>The product</h2>
      <p>
        {site.name} is a digital ebook delivered as a PDF file. After purchase you receive a download link by e-mail. Orders
        are processed by Lemon Squeezy, our Merchant of Record, whose terms also apply to the transaction.
      </p>

      <h2>License</h2>
      <p>
        Your purchase gives you a personal, non-transferable license to read the ebook. You may not resell, share, publish or
        distribute the file or its contents, in whole or in part, without written permission.
      </p>

      <h2>Educational content only</h2>
      <p>{disclaimer}</p>
      <p>
        You are solely responsible for your financial decisions. Consider consulting a licensed professional before acting on
        anything you read.
      </p>

      <h2>Refunds</h2>
      <p>
        See our <Link href="/refund">refund policy</Link>.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, {site.name} is not liable for any loss or damage arising from the use of the ebook or
        this website.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
      </p>
    </LegalPage>
  );
}
