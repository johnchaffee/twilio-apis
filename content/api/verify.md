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

Create a Verification Service (once), Send OTP, Check OTP.

{{< tabs "verify" >}}

{{< tab "CREATE" >}}
{{< postman id=`create` file=`../../postman-params/verify/create.js` >}}
{{< /tab >}}

{{< tab "LIST" >}}
{{< postman id=`list` file=`../../postman-params/verify/list.js` >}}
{{< /tab >}}

{{< tab "GET" >}}
{{< postman id=`get` file=`../../postman-params/verify/get.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
{{< postman id=`delete` file=`../../postman-params/verify/delete.js` >}}
{{< /tab >}}

{{< tab "SEND OTP" >}}
Channel options include `sms`, `whatsapp`, `call`, and `email`.
{{< postman id=`send` file=`../../postman-params/verify/send.js` >}}
{{< /tab >}}

{{< tab "CHECK OTP" >}}
{{< postman id=`check` file=`../../postman-params/verify/check.js` >}}
{{< /tab >}}

{{< /tabs >}}
