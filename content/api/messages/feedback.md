---
title: "Feedback"
draft: false
weight: 300
tags:
  - messages
  - feedback
# geekdocNav: false
# geekdocBreadcrumb: false
---

Provide feedback to Twilio on the deliverability of messages through different messaging channels.

{{< tabs "feedback" >}}

{{< tab "PROVIDE FEEDABACK" >}}
Send an SMS for which to provide feedback with `ProvideFeedback=true` param. 
{{< api-explorer id=`create` file=`../params/feedback/create.js` >}}
{{< /tab >}}

{{< tab "CONFIRM FEEDBACK" >}}
Send Delivery Confirmation Feedack with with `MessageSid` + `Outcome=confirmed` params.
{{< api-explorer id=`confirm` file=`../params/feedback/confirm.js` >}}
{{< /tab >}}

{{< /tabs >}}
