---
title: "Messages"
draft: false
# weight: 100
tags:
  - api
  - postman
  - messaging
# geekdocNav: false
# geekdocBreadcrumb: false
---

How to send and fetch messages with the Twilio Messaging API.

{{< tabs "messaging" >}}

{{< tab "SMS" >}}
{{< postman id=`create` file=`../../api-params/messages/create.js` >}}
{{< /tab >}}

{{< tab "WHATSAPP" >}}
{{< postman id=`whatsapp` file=`../../api-params/messages/whatsapp.js` >}}
{{< /tab >}}

{{< tab "LIST" >}}
{{< postman id=`list` file=`../../api-params/messages/list.js` >}}
{{< /tab >}}

{{< tab "READ" >}}
{{< postman id=`read` file=`../../api-params/messages/read.js` >}}
{{< /tab >}}

{{< tab "UPDATE" >}}
To redact a message-body from a post-flight message, post an empty body to the message instance resource.
{{< postman id=`update` file=`../../api-params/messages/update.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
{{< postman id=`delete` file=`../../api-params/messages/delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
