---
title: "Numbers v2 - Active"
draft: false
weight: 300
tags:
  - api
  - postman
  - phone-numbers
# geekdocNav: false
# geekdocBreadcrumb: false
---

The new [Global Phone Numbers Catalog API](https://www.twilio.com/docs/phone-numbers/global-catalog) lets you search for available numbers to purchase and to manage active numbers.

{{< tabs "PhoneNumbers" >}}

{{< tab "LIST" >}}
List all active phone numbers. Optionally filter by `PhoneNumber`, `Geography`, and `Type` (e.g. `local`, `mobile`, `tollfree`, `shortcode`.)
{{< postman id=`active-list` file=`../../../postman-params/phone-numbers-v2/active-list.js` >}}
{{< /tab >}}

{{< tab "GET" >}}
{{< postman id=`active-get` file=`../../../postman-params/phone-numbers-v2/active-get.js` >}}
{{< /tab >}}

{{< tab "PURCHASE" >}}
{{< postman id=`active-purchase` file=`../../../postman-params/phone-numbers-v2/active-purchase.js` >}}
{{< /tab >}}

{{< tab "CONFIG" >}}
{{< postman id=`active-config` file=`../../../postman-params/phone-numbers-v2/active-config.js` >}}
{{< /tab >}}

{{< tab "TRANSFER" >}}
{{< postman id=`active-transfer` file=`../../../postman-params/phone-numbers-v2/active-transfer.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
{{< postman id=`active-delete` file=`../../../postman-params/phone-numbers-v2/active-delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
