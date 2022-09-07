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
{{< api-explorer id=`active-list` file=`../params/phone-numbers-v2/active-list.js` >}}
{{< /tab >}}

{{< tab "FETCH" >}}
{{< api-explorer id=`active-fetch` file=`../params/phone-numbers-v2/active-fetch.js` >}}
{{< /tab >}}

{{< tab "PURCHASE" >}}
{{< api-explorer id=`active-purchase` file=`../params/phone-numbers-v2/active-purchase.js` >}}
{{< /tab >}}

{{< tab "CONFIG" >}}
{{< api-explorer id=`active-config` file=`../params/phone-numbers-v2/active-config.js` >}}
{{< /tab >}}

{{< tab "TRANSFER" >}}
{{< api-explorer id=`active-transfer` file=`../params/phone-numbers-v2/active-transfer.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
{{< api-explorer id=`active-delete` file=`../params/phone-numbers-v2/active-delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
