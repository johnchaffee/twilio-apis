---
title: "Feedback"
draft: false
# weight: 100
tags:
  - api
  - postman
  - feedback
# geekdocNav: false
# geekdocBreadcrumb: false
---

How to send and fetch messages with the Twilio Messaging API.

{{< tabs "feedback" >}}

{{< tab "PROVIDE FEEDABACK" >}}
Send an SMS for which to provide feedback with `ProvideFeedback=true` param. 
{{< postman id=`create` file=`../../postman-params/feedback/create.js` >}}
{{< /tab >}}

{{< tab "CONFIRM FEEDBACK" >}}
Send Delivery Confirmation Feedack with with `MessageSid` + `Outcome=confirmed` params.
{{< postman id=`confirm` file=`../../postman-params/feedback/confirm.js` >}}
{{< /tab >}}

{{< /tabs >}}
