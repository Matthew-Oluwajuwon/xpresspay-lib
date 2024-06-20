# XpressPay NPM Library

[![npm version](https://img.shields.io/npm/v/xpresspay-pop")](https://www.npmjs.com/package/xpresspay-pop")
[![npm license](https://img.shields.io/npm/l/xpresspay-pop")](https://github.com/muyiwer/XpressPayPlugin/tree/main/XprssPayPop/LICENSE)

A Javasript library for integrating with the XpressPay.

## Installation

```sh
npm install xpresspay
```

```javascript
import { payWithXpressPay, PayWithXpressPayConfig } from "xpresspay";

/**
 *
 * The PayWithXpressPayConfig is the type for the parameters expected to be passed as an argument inside the payWithXpressPay, this is useful for typescript type  checking
 *
 */

// Example: call the payWithXpressPay function to invoke the payment gateway
payWithXpressPay({
  onSuccess: (response) => {
    console.log(response);
  },
  onError: (error) => {
    console.log(error);
  },
  authorizationUrl: "http://myxpresspay.com:6003/******",
  amount: "2000.00",
  transactionId: Math.floor(Math.random() * 1000000),
  email: "sample@mail.com",
  public_key: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
  currency: "NGN",
  productId: "1001",
  applyConviniencyCharge: true,
  isRecurring: false,
  DISPLAY_MODE: "POPUP" | "PAGE",
  ENV_MODE: "DEBUG" | "TEST" | "LIVE",
  productDescription: "MTN",
  bodyColor: "#0000",
  buttonColor: "#0000",
  footerText: "Powered by Test Ltd",
  footerLink: "http://test.com",
  footerLogo: "http://test.com/test.png",
  metadata: [
    {
      name: "sample",
      value: "test",
    },
  ],
});
```

#### Request for calling xpresspay function.

If you want to implement initialize payment from backend, just pass `authorizationUrl`, you can also decide whether to use a popup mode or page mode by passing either value to the `DISPLAY_MODE`

To initialize the transaction, you'll need to pass information such as email, first name, last name amount, public_Key, etc. Email and amount are required. You can also pass any other additional information in the metadata object field. Here is the full list of parameters you can pass:
|Param | Type | Default | Required | Description  
| :------------ | :------------------- | :--------- | :------- | :-------------------------------------------------
| amount | `string` | undefined | `true` | Amount you want to debit customer e.g 1000.00, 10.00...
| transactionId | `string` | undefined | `true` | Unique case sensitive transaction identification
| email | `string` | undefined | `true` | Email address of customer
| public_Key | `string` | undefined | `true` | Your public key from XpressPay.
| currency | `string` | `NGN` | `true` | Currency charge should be performed in. Allowed only `NGN`.
| productId | `string` | undefined | `false` | unique identification number of the product your customer want to pay to.
| applyConviniencyCharge | `boolean` | undefined | `false` | specify whether to apply charge for this customer transaction.
| productDescription | `string` | undefined | `false` | description number of the product your customer want to pay to.
| mode | `string` | `Debug` | `true` | Allowed values are `Debug` or `Live`.
| callBackUrl | `string` | your current url page | `false` | CallbackUrl is the url you want your customer to be redirected to when payment is successful. The default url is the page url where customer intialized payment.
| bodyColor | `string` | null | `false` | your prefered customized color for the payment page body.
| buttonColor | `string` | null | `false` | your prefered customized color for the payment page buttons.
| footerText | `string` | null | `false` | your prefered customized text for the payment page footer.
| footerLogo | `string` | null | `false` | your prefered customized logo for the payment page footer.
| metadata | `object` | empty `object` | `false` | Object containing any extra information you want recorded with the transaction.
| DISPLAY_MODE | `string` | `POPUP`  | `false` | This defines the appearance of the payment gateway either a popup or page
| ENV_MODE | `string` | `DEBUG` | `false` | This defines the environment to be used `DEBUG` means our test environment, `TEST` means our payment gateway sandbox, while `LIVE` means production