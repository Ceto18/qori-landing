// src/types/culqi.ts

export type CulqiToken = {
  id: string;
  email: string;
};

export type CulqiError = {
  code?: string;
  type?: string;
  message?: string;
  user_message?: string;
};

export type CulqiSettings = {
  title: string;
  currency: string;
  amount: number;
  order?: string;
};

export type CulqiOptions = {
  lang?: string;
  installments?: boolean;
  paymentMethods?: {
    tarjeta?: boolean;
    yape?: boolean;
    bancaMovil?: boolean;
    agente?: boolean;
    billetera?: boolean;
    cuotealo?: boolean;
  };
};

declare global {
  interface Window {
    Culqi?: {
      publicKey: string;

      settings: (settings: CulqiSettings) => void;

      options?: (options: CulqiOptions) => void;

      open: () => void;

      token?: CulqiToken;

      error?: CulqiError;
    };

    culqi?: () => void;
  }
}

export {};