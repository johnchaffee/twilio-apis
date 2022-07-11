---
title: "Test Credentials"
draft: false
# weight: 100
tags:
  - api
  - postman
  - messaging
# geekdocNav: false
# geekdocBreadcrumb: false
---

How to send messages with test credentials to simulate different responses. This API uses the test credentials and test phone numbers described [here](/messaging/test-credentials/).


{{< tabs "test" >}}

{{< tab "SUCCESS" >}}
{{< postman id=`success` file=`/_includes/test/success.js` >}}
{{< /tab >}}

{{< tab "UNSUBSCRIBED" >}}
Error Code `21610` - The `To` phone number is blocked (opted-out) for your account.
{{< postman id=`unsubscribed` file=`/_includes/test/unsubscribed.js` >}}
{{< /tab >}}

{{< tab "INVALID TO" >}}
Error Code `21212` - The `To` phone number is invalid.
{{< postman id=`invalid-to` file=`/_includes/test/invalid-to.js` >}}
{{< /tab >}}

{{< tab "INVALID REGION" >}}
Error Code `21408` - Your account doesn’t have the international permissions necessary to SMS this number.
{{< postman id=`invalid-region` file=`/_includes/test/invalid-region.js` >}}
{{< /tab >}}

{{< tab "QUEUE FULL" >}}
Status Code `429`, Error Code `21611` - This number has an SMS message queue that is full.
{{< postman id=`queue-full` file=`/_includes/test/queue-full.js` >}}
{{< /tab >}}

{{< /tabs >}}
