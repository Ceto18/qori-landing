import { Suspense } from "react";

import { CheckoutPage } from "@/components/landing/checkout/CheckoutPage";
import { CheckoutLoading } from "@/components/landing/checkout/components/CheckoutLoading";


export default function Page() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutPage />
    </Suspense>
  );
}