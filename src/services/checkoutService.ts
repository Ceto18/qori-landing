import { api } from "@/services/api";

export type CheckoutPaymentPayload = {
  plan_slug: string;
  culqi_token: string;
  buyer_name: string;
  buyer_email: string;
  business_name: string;
  ruc: string;
  phone: string;
};

export type CheckoutPaymentResponse = {
  success: boolean;
  message: string;
  data?: {
    charge_id?: string;
    order_id?: string;
  };
};

export const checkoutService = {
  pay: async (payload: CheckoutPaymentPayload) => {
    const response = await api.post<CheckoutPaymentResponse>(
      "/public/checkout/pay",
      payload
    );

    return response.data;
  },
};