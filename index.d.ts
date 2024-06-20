declare namespace XpressPayPop {
  type ENV_MODE = "DEBUG" | "TEST" | "LIVE";
  type DISPLAY_MODE = "POPUP" | "PAGE";

  interface SetupOptions {
    public_key?: string;
    email?: string;
    amount?: string;
    transactionId?: string;
    currency?: string;
    callbackUrl?: string;
    metadata?: any;
    productId?: string;
    productDescription?: string;
    applyConviniencyCharge?: boolean;
    mode?: string;
    bodyColor?: string;
    buttonColor?: string;
    footerText?: string;
    footerLink?: string;
    footerLogo?: string;
    isRecurring?: boolean;
    authorizationUrl?: string;
    ENV_MODE?: ENV_MODE;
    DISPLAY_MODE?: DISPLAY_MODE;
    onSuccess: (data: any) => void;
    onError: (error: any) => void;
  }

  function setup(options: SetupOptions): void;
}

interface SuccessOptions {
  $id: string;
  chargedAmount: string;
  orderReference: string | null;
  providerReference: string;
  recurringId: string | null;
  responseCode: string;
  responseMessage: string;
}

interface PayWithXpressPayConfig
  extends Omit<XpressPayPop.SetupOptions, "onSuccess" | "onError"> {
  onSuccess?: (data: SuccessOptions) => void;
  onError?: (error: any) => void;
}

declare function payWithXpressPay(config: PayWithXpressPayConfig): void;

export { payWithXpressPay, PayWithXpressPayConfig };
