---
title: "Numbers v2 - Available"
draft: false
weight: 200
tags:
  - api
  - postman
  - phone-numbers
# geekdocNav: false
# geekdocBreadcrumb: false
---

The new [Global Phone Numbers Catalog API](https://www.twilio.com/docs/phone-numbers/global-catalog) lets you search for available numbers to purchase and to manage active numbers.

{{< tabs "PhoneNumbers" >}}

{{< tab "TYPE" >}}
Search for available phone numbers by type (e.g. `local`, `mobile`, `tollfree`, `shortcode`.)
{{< postman id=`available-type` file=`../../../api-params/phone-numbers-v2/available-type.js` >}}
{{< /tab >}}

{{< tab "USE CASE" >}}
Search for available phone numbers by use case (e.g. `twilio.use-case.conversations.sms`, `twilio.use-case.marketing.sms`, `twilio.use-case.notifications.sms`, `twilio.use-case.verifications.sms`, `twilio.use-case.contact-centers.sms`.)
{{< postman id=`available-use-case` file=`../../../api-params/phone-numbers-v2/available-use-case.js` >}}
{{< /tab >}}

{{< tab "CAPABILITIES" >}}
{{< postman id=`available-capabilities` file=`../../../api-params/phone-numbers-v2/available-capabilities.js` >}}
{{< /tab >}}

{{< /tabs >}}
