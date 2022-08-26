---
title: "Test Credentials"
draft: false
# weight: 700
tags:
  - api
  - postman
  - messaging
# geekdocNav: false
# geekdocBreadcrumb: false
---

Send messages with test credentials to simulate different responses. This API uses the test credentials and test phone numbers described [here](/messaging/test-credentials/).


{{< tabs "test" >}}

{{< tab "SUCCESS" >}}
{{< api-explorer id=`success` file=`../../../api-params/test/success.js` >}}
{{< /tab >}}

{{< tab "UNSUBSCRIBED" >}}
Error Code `21610` - The `To` phone number is blocked (opted-out) for your account.
{{< api-explorer id=`unsubscribed` file=`../../../api-params/test/unsubscribed.js` >}}
{{< /tab >}}

{{< tab "INVALID TO" >}}
Error Code `21212` - The `To` phone number is invalid.
{{< api-explorer id=`invalid-to` file=`../../../api-params/test/invalid-to.js` >}}
{{< /tab >}}

{{< tab "INVALID REGION" >}}
Error Code `21408` - Your account doesn’t have the international permissions necessary to SMS this number.
{{< api-explorer id=`invalid-region` file=`../../../api-params/test/invalid-region.js` >}}
{{< /tab >}}

{{< tab "QUEUE FULL" >}}
Status Code `429`, Error Code `21611` - This number has an SMS message queue that is full.
{{< api-explorer id=`queue-full` file=`../../../api-params/test/queue-full.js` >}}
{{< /tab >}}

{{< /tabs >}}
