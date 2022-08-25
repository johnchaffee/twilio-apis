---
title: "Send Message"
draft: false
weight: 100
tags:
  - api
  - postman
  - messaging
# geekdocNav: false
# geekdocBreadcrumb: false
---

How to send and fetch messages with the Twilio Messaging API.

{{< tabs "send" >}}

{{< tab "SMS" >}}
{{< api-explorer id=`sms` file=`../../../api-params/messages/sms.js` >}}
{{< /tab >}}

{{< tab "STUDIO" >}}
Send an HTTP request to a Studio Flow, which sends an outgoing message to the recipient and Waits for a Reply to generate an auto-response. 
{{< api-explorer id=`studio` file=`../../../api-params/messages/studio.js` >}}
{{< /tab >}}

{{< tab "SCHEDULED" >}}
{{< api-explorer id=`scheduled` file=`../../../api-params/messages/scheduled.js` >}}
{{< /tab >}}

{{< tab "MMS" >}}
{{< api-explorer id=`mms` file=`../../../api-params/messages/mms.js` >}}
{{< /tab >}}

{{< tab "WHATSAPP" >}}
The mobile customer must send a WhatsApp message to `+14155238886` with a message body of  `join immediately-finger` to opt-in to receiving WhatsApp messages.
{{< api-explorer id=`whatsapp` file=`../../../api-params/messages/whatsapp.js` >}}
{{< /tab >}}

{{< tab "FACEBOOK" >}}
The mobile customer must initiate a conversation with the business by sending a Facebook Messenger message to Owl-Taxis at `https://www.facebook.com/Owl-Taxis-100633889146611`.
{{< api-explorer id=`facebook` file=`../../../api-params/messages/facebook.js` >}}
{{< /tab >}}

{{< tab "GOOGLE" >}}
{{< api-explorer id=`google` file=`../../../api-params/messages/google.js` >}}
{{< /tab >}}

{{< /tabs >}}
