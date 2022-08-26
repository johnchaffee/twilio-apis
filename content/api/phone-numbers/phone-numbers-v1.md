---
title: "Numbers v1"
draft: false
weight: 100
tags:
  - api
  - postman
  - phone-numbers
# geekdocNav: false
# geekdocBreadcrumb: false
---

[Phone Numbers API](https://www.twilio.com/docs/phone-numbers/api) lets you search for available numbers, purchase and manage numbers.

{{< tabs "PhoneNumbers" >}}

{{< tab "ACTIVE" >}}
List all active phone numbers.
{{< api-explorer id=`active` file=`../params/phone-numbers/incoming.js` >}}
{{< /tab >}}

{{< tab "TYPES" >}}
List available phone number types by country.
{{< api-explorer id=`country` file=`../params/phone-numbers/available-country.js` >}}
{{< /tab >}}

{{< tab "LOCAL" >}}
List available local phone numbers by country.
{{< api-explorer id=`local` file=`../params/phone-numbers/available-local.js` >}}
{{< /tab >}}

{{< tab "TOLL FREE" >}}
List available toll-free phone numbers by country.
{{< api-explorer id=`tollfree` file=`../params/phone-numbers/available-tollfree.js` >}}
{{< /tab >}}

{{< tab "MOBILE" >}}
List available mobile phone numbers by country.
{{< api-explorer id=`mobile` file=`../params/phone-numbers/available-mobile.js` >}}
{{< /tab >}}

{{< /tabs >}}
