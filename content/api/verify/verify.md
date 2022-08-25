---
title: "Verify"
draft: false
# weight: 100
tags:
  - api
  - postman
  - verify
# geekdocNav: false
# geekdocBreadcrumb: false
---

How to add user verification to your web application with Twilio Verify.

Send OTP, Check OTP.

{{< tabs "verify" >}}

{{< tab "SEND OTP" >}}
Channel options include `sms`, `whatsapp`, `call`, and `email`.
{{< api-explorer id=`send` file=`../../../api-params/verify/send.js` >}}
{{< /tab >}}

{{< tab "CHECK OTP" >}}
{{< api-explorer id=`check` file=`../../../api-params/verify/check.js` >}}
{{< /tab >}}

{{< /tabs >}}
