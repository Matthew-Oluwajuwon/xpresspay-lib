// Function to load the XpressPay script
function loadXpressPayScript() {
  return new Promise((resolve, reject) => {
    if (document.getElementById("xpresspay-script")) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://test.xpresspayments.com:8032/inlineXpressPayPop.js"
    );
    script.setAttribute("id", "xpresspay-script");
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function payWithXpressPay(config) {
  loadXpressPayScript()
    .then(() => {
      XpressPayPop.setup({
        public_key: config.public_key,
        email: config.email,
        amount: config.amount,
        transactionId: config.transactionId || "" + String(Date.now()),
        currency: config.currency || "NGN",
        callbackUrl: config.callbackUrl,
        metadata: config.metadata,
        productId: config.productId,
        productDescription: config.productDescription,
        applyConviniencyCharge: config.applyConviniencyCharge,
        mode: config.mode,
        bodyColor: config.bodyColor,
        buttonColor: config.buttonColor,
        footerText: config.footerText,
        footerLink: config.footerLink,
        footerLogo: config.footerLogo,
        isRecurring: config.isRecurring,
        authorizationUrl: config.authorizationUrl,
        ENV_MODE: config.ENV_MODE || "DEBUG",
        DISPLAY_MODE: config.DISPLAY_MODE || "POPUP",
        onSuccess:
          config.onSuccess ||
          ((response) => {
            console.log("Payment successful:", response);
          }),
        onError:
          config.onError ||
          ((error) => {
            console.error("Payment error:", error);
          }),
      });
    })
    .catch((error) => {
      console.error("Failed to load XpressPay script:", error);
    });
}

module.exports = {
  payWithXpressPay,
};
