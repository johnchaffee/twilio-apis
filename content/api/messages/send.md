---
title: "Send Message"
draft: false
weight: 100
tags:
  - messages
# geekdocNav: false
# geekdocBreadcrumb: false
---

Send messages with the Twilio Messaging API.

{{< tabs "send" >}}

{{< tab "SMS" >}}
{{< api-explorer id=`sms` file=`../params/send/sms.js` >}}
{{< /tab >}}

{{< tab "SCHEDULED" >}}
{{< api-explorer id=`scheduled` file=`../params/send/scheduled.js` >}}
{{< /tab >}}

{{< tab "MMS" >}}
{{< api-explorer id=`mms` file=`../params/send/mms.js` >}}
{{< /tab >}}

{{< tab "WHATSAPP" >}}
The mobile customer must send a WhatsApp message to `+14155238886` with a message body of  `join immediately-finger` to opt-in to receiving WhatsApp messages.
{{< api-explorer id=`whatsapp` file=`../params/send/whatsapp.js` >}}
{{< /tab >}}

{{< tab "FACEBOOK" >}}
The mobile customer must initiate a conversation with the business by sending a Facebook Messenger message to Owl-Taxis at `https://www.facebook.com/Owl-Taxis-100633889146611`.
{{< api-explorer id=`facebook` file=`../params/send/facebook.js` >}}
{{< /tab >}}

{{< tab "GOOGLE" >}}
{{< api-explorer id=`google` file=`../params/send/google.js` >}}
{{< /tab >}}

{{< /tabs >}}
